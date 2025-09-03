"use client";

interface Entry {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface DownloadButtonProps {
  entries: Entry[];
}

export default function DownloadButton({ entries }: DownloadButtonProps) {
  const downloadCSV = () => {
    const csv = [
      "Name,Email",
      ...entries.map((entry) => `"${entry.name}","${entry.email}"`),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "waitlist.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadCSV}
      className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      Download CSV
    </button>
  );
}
