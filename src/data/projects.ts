export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion d’hôtel",
    tags: ["HTML", "CSS", "JavaScript", "PHP MVC", "Bootstrap"],
    summary:
      "Application web de gestion d’hôtel (projet de fin de module), développée en PHP selon l’architecture MVC.",
    repo: "https://github.com/ilhamayouchi/projet-de-fin-module/tree/master",
  },
  {
    title: "Gestion d’infrastructure",
    tags: ["Java", "Servlet"],
    summary: "Logiciel sur PC de gestion d’infrastructure, développé en Java ",
    repo: "https://github.com/ilhamayouchi/gestion_infrastructure",
  },
  {
    title: "Gestion des congés en entreprise",
    tags: [],
    summary: "Application de gestion des congés en entreprise.",
    repo: "https://github.com/ilhamayouchi/Gestion_Conge/",
  },
];
