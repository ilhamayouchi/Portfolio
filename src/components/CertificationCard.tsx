import type { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

function isExpired(c: Certification) {
  if (c.status === "expired") return true;
  if (!c.expiryDate) return false;
  const now = new Date();
  const current = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return c.expiryDate < current;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const expired = isExpired(c);

  return (
    <Card
      className={clsx(
        "flex h-full flex-col p-5 transition hover:-translate-y-1 hover:shadow-lg",
        expired && "opacity-80",
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="flex items-start gap-4">
        {c.image && (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={256}
            height={256}
            loading="lazy"
            className="h-20 w-20 shrink-0 rounded-2xl object-contain"
          />
        )}
        <div>
          <h3 className="font-semibold leading-snug">{c.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {c.issuer}
            {c.issueDate ? ` • ${mmYYYY(c.issueDate)}` : ""}
            {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
          </p>
        </div>
      </div>

      {c.credentialId && (
        <p className="mt-3 break-all text-xs text-muted-foreground">ID : {c.credentialId}</p>
      )}

      {c.skills?.length ? (
        <p className="mt-3 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-sm">
        {c.credentialUrl && (
          <a
            className="inline-flex items-center gap-1 font-semibold text-link underline-offset-4 hover:underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {expired && <Badge variant="outline">Expirée</Badge>}
        {c.status === "revoked" && <Badge variant="outline">Révoquée</Badge>}
      </div>
    </Card>
  );
}
