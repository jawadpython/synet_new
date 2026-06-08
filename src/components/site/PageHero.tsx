import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  heading: string;
  lead?: string;
  dark?: boolean;
};

export function PageHero({ heading, lead, dark = false }: PageHeroProps) {
  return (
    <section className={dark ? "bg-navy-800 py-16 text-white md:py-20" : "bg-neutral-100 py-12 md:py-16"}>
      <Container>
        <h1 className={dark ? "text-display-md text-white" : "text-display-md text-navy-800"}>
          {heading}
        </h1>
        {lead && (
          <p className={`mt-4 max-w-3xl text-lg leading-relaxed ${dark ? "text-neutral-200" : "text-neutral-700"}`}>
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
