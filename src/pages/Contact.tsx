import { Helmet } from "react-helmet-async";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact — Ilham Ayouchi</title>
        <meta name="description" content="Me contacter par email." />
      </Helmet>
      <section>
        <SectionTitle eyebrow="Échangeons" title="Contact" />
        <Card className="max-w-xl p-8">
          <p className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-link" />
            <a
              className="font-semibold underline-offset-4 hover:underline"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </p>
          <p className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-link" /> {profile.location}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className={buttonVariants()} href={`mailto:${profile.email}`}>
              Écrire un email
            </a>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                className={buttonVariants({ variant: "outline" })}
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Card>
      </section>
    </PageTransition>
  );
}
