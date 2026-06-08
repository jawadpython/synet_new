import { Check } from "lucide-react";
import type { Service } from "@/lib/solutions/types";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { FadeIn } from "@/components/ui/FadeIn";

type ServiceBenefitsProps = {
  service: Service;
  copy: BusinessPagesCopy;
};

export function ServiceBenefits({ service, copy }: ServiceBenefitsProps) {
  return (
    <section aria-labelledby="benefits-heading">
      <FadeIn>
        <h2 id="benefits-heading" className="text-heading-lg text-navy-800">
          {copy.detail.benefits}
        </h2>
      </FadeIn>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {service.benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} delay={index * 60}>
            <div className="h-full rounded-[4px] border border-neutral-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-navy-800">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
