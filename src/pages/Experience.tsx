import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Experience() {
  return (
    <PageTransition>
      <Helmet>
        <title>Parcours — Ilham Ayouchi</title>
        <meta
          name="description"
          content="Stages éducatifs : assistance administrative et professeur assistant."
        />
      </Helmet>
      <section>
        <SectionTitle eyebrow="Expériences" title="Parcours" />
        <Timeline>
          {experiences.map((x) => (
            <TimelineItem key={x.organisation}>
              <h3 className="text-lg font-bold">
                {x.organisation}
                {x.period && (
                  <span className="font-semibold text-muted-foreground"> • {x.period}</span>
                )}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.role}</p>
              {x.details?.length ? (
                <ul className="ms-5 mt-2 list-disc text-sm">
                  {x.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : null}
            </TimelineItem>
          ))}
        </Timeline>
      </section>
    </PageTransition>
  );
}
