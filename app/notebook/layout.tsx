export default function NotebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const entries = [
    { number: "001", title: "How did I get here?" },
    { number: "002", title: "What do we mean by democratized AI?" },
    { number: "003", title: "Why education keeps coming up" },
    { number: "004", title: "Infrastructure is the part nobody talks about" },
    { number: "005", title: "Where this could fail" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-950 flex">
      
      {/* SIDEBAR */}
      <aside className="w-80 border-r border-stone-200 bg-white p-6 space-y-6 hidden md:block">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Notebook
          </p>
          <h1 className="text-xl font-semibold mt-2">
            Notes on AI and the Systems Around It
          </h1>
        </div>

        <nav className="space-y-2">
          {entries.map((entry) => (
            <a
              key={entry.number}
              href={`/notebook/${entry.number}`}
              className="block rounded-lg px-3 py-2 text-sm hover:bg-stone-100"
            >
              {entry.number} — {entry.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 px-6 py-20 md:px-12 lg:px-16">
        {children}
      </section>
    </main>
  );
}