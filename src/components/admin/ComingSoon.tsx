import { adminCopy } from "@/lib/admin/copy";
import { Button } from "@/components/ui/Button";

export function ComingSoon() {
  return (
    <div className="rounded-[4px] border border-neutral-200 bg-white px-8 py-16 text-center">
      <h2 className="text-xl font-semibold text-navy-800">{adminCopy.comingSoon.title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">{adminCopy.comingSoon.body}</p>
      <div className="mt-8">
        <Button href="/admin/dashboard" variant="secondary">
          {adminCopy.comingSoon.back}
        </Button>
      </div>
    </div>
  );
}
