export type Certification = {
  title: string;
  issuer: string;
  issueDate?: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/hibernate-jpa.webp"
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIA Edu",
    issueDate: "2026-10",
    credentialId: "28-5b7a9127-85d9-43e5-83a2-15c871bf7add-965332",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/28-5b7a9127-85d9-43e5-83a2-15c871bf7add-965332",
    skills: ["Hibernate", "JPA"],
    tags: ["Java", "Back-end"],
    image: "/certs/hibernate-jpa.webp",
    imageAlt: "Badge Hibernate & JPA",
    status: "active",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIA Edu",
    issueDate: "2026-09",
    credentialId: "6-5b7a9127-85d9-43e5-83a2-15c871bf7add-149235",
    credentialUrl:
      "https://mliaedu.toubkalit.com/verify-certificate/6-5b7a9127-85d9-43e5-83a2-15c871bf7add-149235",
    skills: ["Java", "POO"],
    tags: ["Java", "Back-end"],
    image: "/certs/java.webp",
    imageAlt: "Badge Programmation Java",
    status: "active",
  },
  {
    title: "Certificate of completion – Git and GitHub",
    issuer: "365 Data Science",
    issueDate: "2024-11",
    credentialId: "CC-05779FCE76",
    skills: ["Git", "GitHub"],
    tags: ["Outils", "Versioning"],
    image: "/certs/git-github.webp",
    imageAlt: "Badge Git et GitHub",
    status: "active",
  },
  {
    title: "One Million Prompters",
    issuer: "One Million Prompters",
    skills: ["IA générative"],
    tags: ["IA"],
    image: "/certs/prompters.webp",
    imageAlt: "Badge One Million Prompters",
    status: "active",
  },
];
