export type Experience = {
  organisation: string;
  role: string;
  period?: string;
  details?: string[];
};

// Stages éducatifs (3 ans)
export const experiences: Experience[] = [
  {
    organisation: "Collège Charaf",
    role: "Stage éducatif — Assistance administrative",
    period: "1re année",
  },
  {
    organisation: "Lycée M6",
    role: "Stage éducatif — Assistanat et professeur assistant",
    period: "2e année",
  },
  {
    organisation: "Lycée Salaheddine Ayoubi",
    role: "Stage éducatif — Professeur assistant et administration",
    period: "3e année",
  },
];
