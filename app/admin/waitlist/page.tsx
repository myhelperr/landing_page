import { prisma } from "@/lib/prisma";
import DownloadButton from "./DownloadButton";

export default async function AdminWaitlist() {
  const entries = await prisma.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-8 md:px-16 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">
          Waitlist ({entries.length})
        </h1>
        {entries.length > 0 && <DownloadButton entries={entries} />}
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-card border border-border/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-2"
          >
            <h3 className="font-semibold text-card-foreground text-lg">
              {entry.name}
            </h3>
            <p className="text-sm text-muted-foreground bg-muted/30 py-1 rounded-full inline-block">
              {entry.email}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {new Date(entry.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}

        {entries.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-muted-foreground text-lg">No entries yet</p>
            <p className="text-muted-foreground/70 text-sm mt-2">
              Waitlist entries will appear here once users sign up
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
