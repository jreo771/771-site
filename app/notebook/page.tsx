export default function NotebookPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-950 md:px-12 lg:px-20">
      <section className="mx-auto max-w-4xl space-y-8">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Working Notebook
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Democratized AI in Education
        </h1>

        <p className="text-xl leading-8 text-stone-700">
          This is my live research notebook for exploring how democratized AI could reshape education, especially for communities that are usually last to receive meaningful access to infrastructure, tools, and opportunity.
        </p>

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Why this exists</h2>
          <p className="leading-8 text-stone-700">
            I am not starting with a finished answer. I am starting with a question:
            what would it actually take to make AI useful, safe, sustainable, and accessible in education—not as a shiny tool, but as infrastructure?
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Current questions</h2>
          <ul className="space-y-3 leading-7 text-stone-700">
            <li>• Why education as the first test case?</li>
            <li>• What does “democratized AI” mean beyond access to chatbots?</li>
            <li>• Who owns governance when AI enters learning environments?</li>
            <li>• What infrastructure is required before this can scale?</li>
            <li>• Where could this fail?</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-stone-900 p-8 text-white shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Working thesis</h2>
          <p className="leading-8 text-stone-300">
            Democratized AI in education is not primarily a software problem. It is an infrastructure, governance, sustainability, and human agency problem.
          </p>
        </div>
      </section>
    </main>
  );
}