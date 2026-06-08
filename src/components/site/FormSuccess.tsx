type FormSuccessProps = {
  title: string;
  message: string;
  reference?: string;
  referenceLabel?: string;
  nextStepsTitle?: string;
  nextSteps?: string[];
};

export function FormSuccess({
  title,
  message,
  reference,
  referenceLabel,
  nextStepsTitle,
  nextSteps,
}: FormSuccessProps) {
  return (
    <div
      className="rounded-[4px] border border-neutral-200 bg-white p-8"
      role="status"
      aria-live="polite"
    >
      <h2 className="text-heading-sm text-navy-800">{title}</h2>
      <p className="mt-4 text-neutral-700">{message}</p>
      {reference && referenceLabel && (
        <p className="mt-4 rounded-[4px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm">
          <span className="font-semibold text-navy-800">{referenceLabel}:</span>{" "}
          <span className="font-mono text-neutral-900" dir="ltr">
            {reference}
          </span>
        </p>
      )}
      {nextSteps && nextSteps.length > 0 && (
        <div className="mt-6">
          {nextStepsTitle && (
            <h3 className="text-sm font-semibold text-navy-800">{nextStepsTitle}</h3>
          )}
          <ol className="mt-2 list-decimal space-y-1 ps-5 text-sm text-neutral-700">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
