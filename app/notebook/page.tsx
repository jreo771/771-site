const entries = [
  {
    number: "001",
    title: "How did I get here?",
    status: "Draft",
    summary:
      "The origin point: sustainability, democratized AI, deja vu, and the systems questions I could not ignore.",
  },
  {
    number: "002",
    title: "What do we mean by democratized AI?",
    status: "Placeholder",
    summary:
      "A working question about access, ownership, literacy, infrastructure, and who gets to shape the tools.",
  },
  {
    number: "003",
    title: "Why education keeps coming up",
    status: "Placeholder",
    summary:
      "A possible test case, not a conclusion. Why learning environments reveal the hard parts quickly.",
  },
  {
    number: "004",
    title: "Infrastructure is the part nobody wants to talk about",
    status: "Placeholder",
    summary:
      "Notes on identity, access, compute, support models, and the systems beneath the interface.",
  },
  {
    number: "005",
    title: "Where this could fail",
    status: "Placeholder",
    summary:
      "A place to be honest about fragility, overreach, governance gaps, incentives, and scale.",
  },
];

export default function NotebookPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-950 md:px-12 lg:px-20">
      <section className="mx-auto max-w-5xl space-y-12">
        {/* HEADER */}
        <div className="space-y-4">
          <a href="/" className="text-sm text-stone-500 hover:text-stone-950">
            ← Back
          </a>

          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Working Notebook
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on AI and the Systems Around It
          </h1>

          <p className="max-w-3xl text-xl leading-8 text-stone-700">
            This notebook is where I follow threads I cannot ignore. It sits
            somewhere between a messy sounding board and a structured thesis:
            unfinished, exploratory, and intentionally not over-cleaned.
          </p>
        </div>

        {/* ENTRY INDEX */}
        <section className="rounded-[2rem] border bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl font-semibold">Entries</h2>
            <p className="text-stone-600">
              A working index so the notebook does not become one endless scroll.
            </p>
          </div>

          <div className="grid gap-4">
            {entries.map((entry) => (
              <a
                key={entry.number}
                href={`#entry-${entry.number}`}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:bg-stone-100"
              >
                <div className="mb-2 flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                    Entry {entry.number}
                  </p>
                  <span className="rounded-full border border-stone-300 px-3 py-1 text-xs text-stone-600">
                    {entry.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{entry.summary}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ENTRY 001 */}
        <article id="entry-001" className="space-y-6 rounded-[2rem] border bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Entry 001
          </p>

          <h2 className="text-3xl font-semibold">How did I get here?</h2>

          <div className="space-y-6 text-lg leading-9 text-stone-700">
            <p>This did not start as a plan.</p>

            <p>
              It started with an invitation. Something around sustainability. I
              was not expecting much from it. Just another conversation, another
              topic that sits next to technology but rarely connects to how
              things actually work.
            </p>

            <p>
              But the conversations kept going. I met people who were thinking
              about democratizing AI. People working in sustainability. People
              trying to make sense of where all of this is going.
            </p>

            <p>And something about it felt familiar.</p>

            <p>
              Not in a way I could immediately explain. More like recognition.
              Like I had been circling the same set of questions from a
              completely different direction. Through infrastructure. Through
              governance. Through the systems that usually sit behind everything.
            </p>

            <p>
              The more I listened, the more I noticed that a lot of the
              conversation was happening at a high level. Ideas about access.
              About potential. About scale.
            </p>

            <p>But I kept thinking about what happens underneath all of that.</p>

            <p>
              Who owns these systems?
              <br />
              Who governs them?
              <br />
              What breaks first?
              <br />
              And what happens when they scale faster than our ability to
              understand or control them?
            </p>

            <p>
              At some point, this stopped feeling like a topic and started
              feeling like something I needed to follow.
            </p>

            <p>
              I am not starting from a position of expertise here. If anything, I
              am starting from tension. Between what is being said, and what I
              have seen systems actually do in practice.
            </p>

            <p>So this notebook is where I work through that.</p>

            <p>
              Not to arrive at quick answers. But to stay with the questions long
              enough to see what holds.
            </p>
          </div>
        </article>

        {/* PLACEHOLDER ENTRIES */}
        <article id="entry-002" className="rounded-[2rem] border border-dashed bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Entry 002
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            What do we mean by democratized AI?
          </h2>
          <p className="leading-8 text-stone-600">
            Placeholder. This entry will question whether democratized AI means
            access to tools, shared infrastructure, literacy, governance,
            ownership, or something else entirely.
          </p>
        </article>

        <article id="entry-003" className="rounded-[2rem] border border-dashed bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Entry 003
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            Why education keeps coming up
          </h2>
          <p className="leading-8 text-stone-600">
            Placeholder. This entry will explore education as a possible test
            case, while resisting the urge to turn it into the entire frame too
            early.
          </p>
        </article>

        <article id="entry-004" className="rounded-[2rem] border border-dashed bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Entry 004
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            Infrastructure is the part nobody wants to talk about
          </h2>
          <p className="leading-8 text-stone-600">
            Placeholder. This entry will collect thoughts on identity, access,
            compute, traceability, support models, and what has to exist beneath
            the interface.
          </p>
        </article>

        <article id="entry-005" className="rounded-[2rem] border border-dashed bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Entry 005
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            Where this could fail
          </h2>
          <p className="leading-8 text-stone-600">
            Placeholder. This entry will be a place to be honest about fragility,
            governance gaps, incentives, overreach, and failure modes before the
            thesis gets too clean.
          </p>
        </article>
      </section>
    </main>
  );
}