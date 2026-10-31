import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import PageTransition from "@/components/PageTransition";
import SectionTitle from "@/components/SectionTitle";
import { Input } from "@/components/ui/input";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => (b.issueDate ?? "").localeCompare(a.issueDate ?? "")),
    [q],
  );

  return (
    <PageTransition>
      <Helmet>
        <title>Certifications — Ilham Ayouchi</title>
        <meta
          name="description"
          content="Certifications : Hibernate & JPA, Java, Git et GitHub, IA générative."
        />
      </Helmet>
      <section className="grid gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Crédibilité" title="Certifications" />
          <Input
            placeholder="Filtrer (ex: Java, Git)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mb-8 w-72"
            aria-label="Filtrer les certifications"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CertificationCard key={c.title + (c.issueDate ?? "")} c={c} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
