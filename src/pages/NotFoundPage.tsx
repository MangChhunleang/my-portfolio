import { Link } from "react-router";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full border border-border bg-accent/50 p-4 text-muted-foreground">
        <SearchX className="h-8 w-8" />
      </div>
      <div className="mt-6 text-sm uppercase tracking-[0.24em] text-muted-foreground">
        404
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        This page seems to have shipped to the wrong route.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        The content you're looking for isn't here, but the rest of the portfolio
        is still worth exploring.
      </p>
      <Button asChild className="mt-8 rounded-full" size="lg">
        <Link to="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
