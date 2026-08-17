import { projects } from "../data/content";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

// Group the flat projects list by category so the section reads as
// "UI/UX Design", "Web Development", "Academic Project" rather than one
// undifferentiated grid.
function groupByCategory(items) {
  const groups = new Map();
  for (const project of items) {
    if (!groups.has(project.category)) groups.set(project.category, []);
    groups.get(project.category).push(project);
  }
  return Array.from(groups.entries());
}

export default function Projects() {
  const grouped = groupByCategory(projects);

  return (
    <Section id="projects" eyebrow="// Selected Work" title="Projects">
      <div className="space-y-16">
        {grouped.map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-faint mb-6 pb-3 border-b border-border">
              {category}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
