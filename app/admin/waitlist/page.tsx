import { prisma } from "@/lib/prisma";

export default async function AdminWaitlist() {
  const entries = await prisma.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-8 md:px-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Waitlist ({entries.length})</h1>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg border space-y-1">
            <h3 className="font-semibold">{entry.name}</h3>
            <p className="text-sm text-gray-600">{entry.email}</p>
            <p className="text-xs text-gray-400">
              {new Date(entry.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
        
        {entries.length === 0 && (
          <p className="text-gray-500 text-center py-8">No entries yet</p>
        )}
      </div>
    </main>
  );
}
