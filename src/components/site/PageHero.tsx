import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  heading: string;
  lead?: string;
  overline?: string;
  dark?: boolean;
};

export function PageHero({ heading, lead, overline, dark = false }: PageHeroProps) {
  if (dark) {
    return (
      <section className="bg-navy-900 py-14 text-white md:py-20">
        <Container>
          {overline && <p className="text-overline mb-3 text-blue-400">{overline}</p>}
          <h1 className="text-display-md text-white">{heading}</h1>
          {lead && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">{lead}</p>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-neutral-200 bg-neutral-50 py-14 md:py-20">
      <Container>
        {overline && <p className="text-overline mb-3">{overline}</p>}
        <h1 className="text-display-md text-navy-800">{heading}</h1>
        {lead && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
