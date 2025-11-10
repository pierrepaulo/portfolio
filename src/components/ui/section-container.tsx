import type { ReactNode } from "react";

type ContainerSectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export function SectionContainer({
  id,
  label,
  title,
  children,
}: ContainerSectionProps) {
  return (
    <div id={id} className="space-y-4 scroll-mt-32">
      <div className="flex items-center gap-2">
        <span className="h-px w-10 bg-primary" />
        <span className="text-primary uppercase tracking-[0.5em]">{label}</span>
      </div>

      <div className="group bg-card/80 rounded-2xl border border-white/10 hover:border-primary transition-colors duration-300 ease-out">
        <div className="space-y-6 p-8">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
