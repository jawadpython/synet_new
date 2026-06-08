import type { Service } from "@/lib/solutions/types";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { FadeIn } from "@/components/ui/FadeIn";

type ServiceProcessProps = {
  service: Service;
  copy: BusinessPagesCopy;
};

export function ServiceProcess({ service, copy }: ServiceProcessProps) {
  return (
    <section aria-labelledby="process-heading">
      <FadeIn>
        <h2 id="process-heading" className="text-heading-lg text-navy-800">
          {copy.detail.process}
        </h2>
      </FadeIn>
      <ol className="mt-8 space-y-0">
        {service.process.map((step, index) => (
          <FadeIn key={step.step} delay={index * 50}>
            <li className="relative flex gap-6 pb-8 last:pb-0">
              {index < service.process.length - 1 && (
                <span
                  className="absolute start-[19px] top-10 bottom-0 w-px bg-neutral-200"
                  aria-hidden="true"
                />
              )}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-navy-800 text-sm font-semibold text-white">
                {step.step}
              </span>
              <div className="pt-1">
                <h3 className="font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {step.description}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
