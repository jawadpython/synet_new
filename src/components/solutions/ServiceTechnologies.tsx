import type { Service } from "@/lib/solutions/types";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { FadeIn } from "@/components/ui/FadeIn";

type ServiceTechnologiesProps = {
  service: Service;
  copy: BusinessPagesCopy;
};

export function ServiceTechnologies({ service, copy }: ServiceTechnologiesProps) {
  return (
    <section aria-labelledby="technologies-heading">
      <FadeIn>
        <h2 id="technologies-heading" className="text-heading-lg text-navy-800">
          {copy.detail.technologies}
        </h2>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="mt-8 flex flex-wrap gap-3">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-[2px] border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
