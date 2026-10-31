export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start?: string; // "YYYY" ou "YYYY-MM"
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

// Parcours académique
export const education: Education[] = [
  {
    school: "ENS Marrakech",
    degree: "Master",
    field: "Technologies éducatives (MDSIE)",
    location: "Marrakech",
    start: "2025",
  },
  {
    school: "École normale supérieure",
    degree: "Licence en Éducation",
    field: "Spécialisation Informatique",
    start: "2022",
    end: "2025",
  },
  {
    school: "Lycée Qualifiant Rahali El Farouk",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    start: "2018",
    end: "2021",
  },
];

// Formations en ligne
export const trainings: Education[] = [
  {
    school: "MLIA Edu",
    degree: "Hibernate & JPA",
    location: "En ligne",
    start: "2026-10",
    end: "2026-10",
    highlights: ["Certificat vérifiable en ligne"],
  },
  {
    school: "MLIA Edu",
    degree: "Fondamentaux et concepts avancés de la programmation Java",
    location: "En ligne",
    start: "2026-09",
    end: "2026-09",
    highlights: ["Certificat vérifiable en ligne"],
  },
  {
    school: "One Million Prompters",
    degree: "IA générative",
    location: "En ligne",
    highlights: ["Certificat de réussite"],
  },
  {
    school: "365 Data Science",
    degree: "Git et GitHub",
    location: "En ligne",
    start: "2024-11",
    end: "2024-11",
    highlights: ["Certificat de réussite"],
  },
];
