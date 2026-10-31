import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { education, trainings } from "@/data/education";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const eduLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  alumniOf: [...new Set(education.map((e) => e.school))].map((name) => ({
    "@type": "CollegeOrUniversity",
    name,
  })),
};

const certLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  hasCredential: (certifications ?? []).map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    recognizedBy: { "@type": "Organization", name: c.issuer },
    validFrom: c.issueDate,
    validUntil: c.expiryDate,
    url: c.credentialUrl,
  })),
};

const latest = [...certifications]
  .sort((a, b) => (b.issueDate ?? "").localeCompare(a.issueDate ?? ""))
  .slice(0, 3);

export default function Home() {
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <PageTransition>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : développement web et Java, Technologies éducatives (ENS Marrakech), Git, IA générative, React."
        />
        <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
        <script type="application/ld+json">{JSON.stringify(certLd)}</script>
      </Helmet>

      <section className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Badge variant="secondary">Portfolio {new Date().getFullYear()}</Badge>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] bg-clip-text text-transparent">
              {firstName}
            </span>{" "}
            {rest.join(" ")}
          </h1>
          <p className="mt-3 text-xl font-semibold text-muted-foreground">{profile.role}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{profile.about}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-link" /> {profile.location}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects" className={buttonVariants()}>
              Voir les projets <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className={buttonVariants({ variant: "outline" })}>
              Contact
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="badges de parcours">
            <Badge variant="outline">Java JPA</Badge>
            <Badge variant="outline">Java Hibernate</Badge>
            <Badge variant="outline">PHP MVC</Badge>
            <Badge variant="outline">HTML CSS JS</Badge>
            <Badge variant="outline">PYTHON</Badge>
            <Badge variant="outline">REACT</Badge>
            <Badge variant="outline">Base de donnés MySql</Badge>
          </div>
        </div>

        <Card
          className="relative overflow-hidden p-8 text-center"
          role="img"
          aria-label="illustration de profil"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
          <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-pink-300/30 blur-2xl" />
          <Avatar className="relative mx-auto h-32 w-32 ring-4 ring-accent">
            <AvatarFallback className="text-4xl font-extrabold">{profile.initials}</AvatarFallback>
          </Avatar>
          <Separator className="my-6" />
          <div className="relative grid grid-cols-3 gap-2">
            <div>
              <p className="text-2xl font-extrabold text-link">{certifications.length}</p>
              <p className="text-xs text-muted-foreground">Certifications</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-link">
                {education.length + trainings.length}
              </p>
              <p className="text-xs text-muted-foreground">Formations</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-link">{profile.skills.length}</p>
              <p className="text-xs text-muted-foreground">Compétences</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Compétences" title="Ce que je maîtrise" />
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((s) => (
            <Badge key={s} className="px-4 py-2 text-sm">
              {s}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Certifications" title="Dernières certifications" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((c) => (
            <CertificationCard key={c.title} c={c} />
          ))}
        </div>
        <Link
          to="/certifications"
          className={buttonVariants({ variant: "ghost", className: "mt-6" })}
        >
          Toutes les certifications <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageTransition>
  );
}
