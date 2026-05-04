export default function NotebookPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-950 md:px-12 lg:px-20">
      <section className="mx-auto max-w-4xl space-y-12">

        {/* HEADER */}
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
            This notebook started as a thread I could not ignore.
          </p>
        </div>

        {/* ENTRY 001 */}
        <article className="space-y-6">
          <p className="text-sm text-stone-500">Entry 001</p>

          <h2 className="text-3xl font-semibold">
            How did I get here?
          </h2>

          <div className="space-y-6 text-lg leading-9 text-stone-700">

            <p>
              This did not start as a plan.
            </p>

            <p>
              It started with an invitation. Something around sustainability. I was not expecting much from it. Just another conversation, another topic that sits next to technology but rarely connects to how things actually work.
            </p>

            <p>
              But the conversations kept going. I met people who were thinking about democratizing AI. People working in sustainability. People trying to make sense of where all of this is going.
            </p>

            <p>
              And something about it felt familiar.
            </p>

            <p>
              Not in a way I could immediately explain. More like recognition. Like I had been circling the same set of questions from a completely different direction. Through infrastructure. Through governance. Through the systems that usually sit behind everything.
            </p>

            <p>
              The more I listened, the more I noticed that a lot of the conversation was happening at a high level. Ideas about access. About potential. About scale.
            </p>

            <p>
              But I kept thinking about what happens underneath all of that.
            </p>

            <p>
              Who owns these systems?
              <br />
              Who governs them?
              <br />
              What breaks first?
              <br />
              And what happens when they scale faster than our ability to understand or control them?
            </p>

            <p>
              At some point, this stopped feeling like a topic and started feeling like something I needed to follow.
            </p>

            <p>
              I am not starting from a position of expertise here. If anything, I am starting from tension. Between what is being said, and what I have seen systems actually do in practice.
            </p>

            <p>
              So this notebook is where I work through that.
            </p>

            <p>
              Not to arrive at quick answers. But to stay with the questions long enough to see what holds.
            </p>

          </div>
        </article>

        {/* QUESTIONS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Open questions</h2>

          <ul className="space-y-2 text-stone-700">
            <li>• What does democratized AI actually mean beyond access?</li>
            <li>• Why does education feel like the starting point?</li>
            <li>• What infrastructure would this require to be real?</li>
            <li>• Who owns governance in these systems?</li>
            <li>• Where does this break first?</li>
          </ul>
        </section>

      </section>
    </main>
  );
}