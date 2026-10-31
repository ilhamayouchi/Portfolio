import { Outlet, NavLink } from "react-router-dom";
import { profile } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
          <NavLink to="/" className="flex items-center gap-2 font-extrabold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </NavLink>
          <div className="flex items-center gap-1 overflow-x-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-accent",
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <Outlet />
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • {profile.name}
      </footer>
    </div>
  );
}
