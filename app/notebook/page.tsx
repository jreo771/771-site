export default function NotebookPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-950 md:px-12 lg:px-20">
      <section className="mx-auto max-w-4xl space-y-12">
        
        <div className="space-y-4">
          <a href="/" className="text-sm text-stone-500 hover:text-stone-950">
            ← Back
          </a>

          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Working Notebook
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Democratized AI in Education
          </h1>

          <p className="text-xl leading-8 text-stone-700">
            This is a live notebook. Ideas here are incomplete, evolving, and sometimes wrong.
          </p>
        </div>

        {/* ENTRY 001 */}
        <article className="space-y-6">
          <p className="text-sm text-stone-500">Entry 001</p>

          <h2 className="text-3xl font-semibold">
            Why education?
          </h2>

          <div className="space-y-6 text-lg leading-9 text-stone-700">
            <p>
              I didn’t start with a technical reason. I started with a tension.
            </p>

            <p>
              If AI is going to reshape access to knowledge, decision-making, and opportunity,
              then education feels like the most honest place to test that.
            </p>

            <p>
              But that also raises a harder question:
            </p>

            <blockquote className="border-l-4 border-stone-300 pl-5 text-xl font-medium text-stone-900">
              If democratized AI cannot work in education, should we expect it to work anywhere else?
            </blockquote>

            <p>
              The more I think about it, the less this feels like a software problem.
            </p>

            <p>
              It feels like an infrastructure problem. A governance problem. A question of ownership,
              accountability, and what systems we actually trust to shape how people learn.
            </p>

            <p>
              I’m not sure yet if education is the right starting point. But the fact that I’m unsure
              is probably the signal that it’s worth exploring.
            </p>
          </div>
        </article>

        {/* QUESTIONS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Open questions</h2>

          <ul className="space-y-2 text-stone-700">
            <li>• What does “democratized AI” actually mean beyond access?</li>
            <li>• What infrastructure would schools realistically need?</li>
            <li>• Who governs AI in a classroom context?</li>
            <li>• Where does this break first?</li>
          </ul>
        </section>

      </section>
    </main>
  );
}