import type { Service } from "@/lib/solutions/types";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { ChevronRight } from "lucide-react";
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
      <ol className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-0">
        {service.process.map((step, index) => (
          <FadeIn key={step.step} delay={index * 50} className="relative flex-1">
            <li className="flex gap-4 lg:flex-col lg:pe-8">
              <div className="flex items-center gap-3 lg:mb-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-600 text-sm font-semibold text-blue-600">
                  {step.step}
                </span>
                {index < service.process.length - 1 && (
                  <ChevronRight
                    className="hidden h-4 w-4 text-neutral-300 lg:absolute lg:end-2 lg:top-3 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-navy-800">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
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
