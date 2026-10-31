import { Helmet } from "react-helmet-async";
import { education, trainings, type Education } from "@/data/education";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import Timeline, { TimelineItem } from "@/components/Timeline";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return m ? `${m}/${y}` : y;
}

function periode(e: Education) {
  if (!e.start) return "";
  if (e.start === e.end) return fmt(e.start);
  return `${fmt(e.start)} — ${fmt(e.end)}`;
}

function Entry({ e }: { e: Education }) {
  return (
    <TimelineItem>
      <h3 className="text-lg font-bold">
        {e.degree}
        {e.field ? ` — ${e.field}` : ""}
        <span className="font-semibold text-muted-foreground"> @ {e.school}</span>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {[periode(e), e.location, e.gpa ? `GPA ${e.gpa}` : ""].filter(Boolean).join(" • ")}
      </p>
      {e.courses?.length ? (
        <p className="mt-2 text-sm">Cours : {e.courses.slice(0, 5).join(", ")}</p>
      ) : null}
      {e.highlights?.length ? (
        <ul className="ms-5 mt-2 list-disc text-sm">
          {e.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}
    </TimelineItem>
  );
}

export default function EducationPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Formations — Ilham Ayouchi</title>
        <meta
          name="description"
          content="Parcours académique (ENS Marrakech) et formations en ligne : Java, Hibernate & JPA, Git et GitHub, IA générative."
        />
      </Helmet>
      <section>
        <SectionTitle eyebrow="Apprentissage" title="Formations" />

        <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Parcours académique
        </h3>
        <Timeline>
          {education.map((e) => (
            <Entry key={e.school + e.degree} e={e} />
          ))}
        </Timeline>

        <h3 className="mb-6 mt-14 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Formations en ligne
        </h3>
        <Timeline>
          {trainings.map((e) => (
            <Entry key={e.school + e.degree} e={e} />
          ))}
        </Timeline>
      </section>
    </PageTransition>
  );
}
