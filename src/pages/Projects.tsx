import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <PageTransition>
      <Helmet>
        <title>Projets — Ilham Ayouchi</title>
        <meta
          name="description"
          content="Projets : gestion d’hôtel (PHP MVC), gestion d’infrastructure (Java, Servlet), gestion des congés."
        />
      </Helmet>
      <section>
        <SectionTitle eyebrow="Réalisations" title="Projets" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="flex flex-col transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                {p.period && <p className="text-xs font-bold text-link">{p.period}</p>}
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.summary}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex gap-3">
                  {p.link && (
                    <a
                      className={buttonVariants({ size: "sm" })}
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      className={buttonVariants({ variant: "secondary", size: "sm" })}
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code sur GitHub
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
