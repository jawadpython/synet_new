"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { PublicTestimonialItem } from "@/lib/firestore/testimonials-types";
import type { Locale } from "@/lib/i18n/config";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type TestimonialsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  items?: PublicTestimonialItem[];
};

export function TestimonialsSection({
  locale,
  dictionary,
  items,
}: TestimonialsSectionProps) {
  const { testimonials } = dictionary;
  const testimonialItems = items ?? testimonials.items;
  const rtl = locale === "ar";
  const headingId = "testimonials-heading";

  const pairs: [typeof testimonialItems[0], typeof testimonialItems[0]][] = [];
  const business = testimonialItems.filter((t) => t.division === "business");
  const training = testimonialItems.filter((t) => t.division === "training");
  const pairCount = Math.min(business.length, training.length);

  for (let i = 0; i < pairCount; i++) {
    pairs.push([business[i], training[i]]);
  }

  const [activePair, setActivePair] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setActivePair(pairs.length - 1);
    else if (index >= pairs.length) setActivePair(0);
    else setActivePair(index);
  };

  if (pairs.length === 0) return null;

  const [businessItem, trainingItem] = pairs[activePair];

  return (
    <Section background="neutral-50" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={testimonials.overline}
          heading={testimonials.heading}
        />
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {[businessItem, trainingItem].map((item) => (
          <blockquote
            key={`${item.attribution}-${item.role}`}
            className="synet-card-static overflow-hidden p-7 md:p-8"
          >
            <p className="font-heading text-xl font-medium leading-relaxed text-navy-800 md:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-6 border-t border-neutral-200 pt-5">
              <cite className="not-italic">
                <span className="text-sm font-semibold text-navy-800">
                  {item.attribution}
                </span>
                <span className="text-sm text-neutral-500"> — {item.role}</span>
                {item.organization && (
                  <span className="block text-sm text-neutral-500">{item.organization}</span>
                )}
              </cite>
              <div className="mt-3">
                <Badge variant="neutral">
                  {item.division === "business"
                    ? testimonials.divisionBusiness
                    : testimonials.divisionTraining}
                </Badge>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      {pairs.length > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(activePair - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 bg-white text-navy-800 transition-colors hover:border-blue-600 hover:text-blue-600"
            aria-label={testimonials.prev}
          >
            {rtl ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
          <div className="flex gap-2" role="tablist" aria-label={testimonials.heading}>
            {pairs.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activePair}
                onClick={() => setActivePair(index)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center transition-colors duration-150 before:block before:h-2 before:w-2 before:rounded-full",
                  index === activePair ? "before:bg-blue-600" : "before:bg-neutral-300",
                )}
                aria-label={`${index + 1} / ${pairs.length}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(activePair + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 bg-white text-navy-800 transition-colors hover:border-blue-600 hover:text-blue-600"
            aria-label={testimonials.next}
          >
            {rtl ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
