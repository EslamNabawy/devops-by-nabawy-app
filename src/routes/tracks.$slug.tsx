import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Signal,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { tracks } from "@/lib/tracks";

export const Route = createFileRoute("/tracks/$slug")({
  head: ({ params }) => {
    const track = tracks.find((item) => item.slug === params.slug);
    const title = track
      ? `${track.title} — DevOps By Nabawy`
      : "Track — DevOps By Nabawy";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: track?.description ?? "Practical DevOps learning track.",
        },
      ],
    };
  },
  component: TrackDetailPage,
});

function TrackDetailPage() {
  const { slug } = Route.useParams();
  const track = tracks.find((item) => item.slug === slug);
  if (!track) throw notFound();
  const isLab = track.kind === "lab";
  const workspaceHref = slug === "terraform" ? "/tracks/terraform" : "/tracks";
  const milestones = Array.from({ length: track.milestones }, (_, i) => ({
    n: i + 1,
    title: `Milestone ${i + 1}`,
    text:
      i === 0
        ? "Read the foundations, then run the first guided exercise."
        : "Build on the previous milestone with a hands-on task.",
  }));

  return (
    <div>
      <section className="border-b border-border bg-hero">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <Link
            to="/tracks"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Tracks /{" "}
            <span className="text-foreground">{track.title}</span>
          </Link>
          <div className="flex flex-wrap gap-2">
            <span
              className={`rounded-sm px-2.5 py-1 font-mono text-[10px] font-bold ${isLab ? "bg-secondary-accent/10 text-secondary-accent" : "bg-primary px-2.5 text-primary-foreground"}`}
            >
              {track.status}
            </span>
            <span className="rounded-sm border border-border bg-card px-2.5 py-1 text-xs font-semibold">
              {track.level}
            </span>
            <span className="rounded-sm border border-border bg-card px-2.5 py-1 text-xs font-semibold">
              {track.kind === "lab" ? "Online lab" : "Offline guidebook"}
            </span>
          </div>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="font-display max-w-4xl text-4xl font-extrabold sm:text-5xl">
                {track.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {track.description}
              </p>
            </div>
            <div className="min-w-56 border border-border bg-card p-4 shadow-card">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <span>
                  <b className="block text-base text-foreground">
                    {track.hours}
                  </b>
                  <span className="text-muted-foreground">Est. time</span>
                </span>
                <span>
                  <b className="block text-base text-foreground">
                    {track.chapters}
                  </b>
                  <span className="text-muted-foreground">Chapters</span>
                </span>
                <span>
                  <b className="block text-base text-foreground">
                    {track.milestones}
                  </b>
                  <span className="text-muted-foreground">Milestones</span>
                </span>
              </div>
              <Button className="mt-4 w-full" asChild>
                <Link to={workspaceHref}>
                  {isLab ? (
                    <Wifi className="mr-1 h-4 w-4" />
                  ) : (
                    <BookOpen className="mr-1 h-4 w-4" />
                  )}
                  {slug === "terraform"
                    ? "Open workspace"
                    : isLab
                      ? "Start labs"
                      : "Open guide"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-bold text-primary">SYLLABUS</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold">
              {track.milestones} milestones · {track.chapters} chapters
            </h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> About {track.hours} ·{" "}
            <Signal className="h-4 w-4" /> {track.level}
          </p>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((item) => (
            <li
              key={item.n}
              className="border border-border bg-card p-6 shadow-card"
            >
              <span className="font-mono text-xs font-bold text-primary">
                MILESTONE {item.n}
              </span>
              <h3 className="font-display mt-3 text-xl font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.text}
              </p>
              <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Mark complete
                when built
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
