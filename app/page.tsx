"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Cpu, NotebookPen, Sparkles } from "lucide-react";

// Minimal components
function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

function Button({
  className = "",
  variant,
  href,
  children,
}: {
  className?: string;
  variant?: "outline";
  href?: string;
  children: React.ReactNode;
}) {
  const base = "inline-flex items-center justify-center font-medium transition";
  const styles =
    variant === "outline"
      ? "border bg-transparent hover:bg-stone-100"
      : "bg-stone-950 text-white hover:bg-stone-800";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

// Content pillars (reframed)
const pillars = [
  {
    icon: Users,
    title: "Access",
    text: "Who gets to use these systems, and who is left out.",
  },
  {
    icon: MapPin,
    title: "Context",
    text: "What changes when the same system is placed in different environments.",
  },
  {
    icon: Cpu,
    title: "Infrastructure",
    text: "The parts underneath that determine whether anything actually works.",
  },
  {
    icon: NotebookPen,
    title: "Observation",
    text: "A place to notice what does not quite line up.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-950">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/80 px-6 py-4 backdrop-blur md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">
            Loren Reolizo
          </a>
          <div className="flex gap-5 text-sm text-stone-600">
            <a href="/notebook" className="hover:text-stone-950">Notebook</a>
            <a href="/thesis" className="hover:text-stone-950">Thesis</a>
            <a href="/case-study" className="hover:text-stone-950">Case Study</a>
            <a href="/field-notes" className="hover:text-stone-950">Field Notes</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,113,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(68,64,60,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-sm text-stone-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI · Systems · Context
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Access is not the same as relevance.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                There is a lot of conversation around democratizing AI. But giving people access to the same system does not mean it will mean the same thing everywhere.
              </p>

              <p className="max-w-2xl text-lg leading-8 text-stone-700">
                I am trying to understand what changes when AI is not just distributed, but situated—when it begins to reflect the environments it lives in.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/notebook" className="rounded-2xl px-6 py-6 text-base shadow-md">
                Open the notebook <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button href="/case-study" variant="outline" className="rounded-2xl border-stone-300 px-6 py-6 text-base">
                Follow the case study
              </Button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Card className="rounded-[2rem] border-stone-200 bg-white/80 shadow-xl backdrop-blur">
              <CardContent className="space-y-6 p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                  A question
                </p>

                <blockquote className="text-2xl font-medium leading-snug text-stone-900">
                  “What happens when everyone has access to the same intelligence, but not the same context?”
                </blockquote>

                <p className="leading-7 text-stone-600">
                  This is where I follow that question without trying to resolve it too quickly.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* WORK */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              The work
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Not answers. Patterns.
            </h2>

            <p className="text-lg leading-8 text-stone-700">
              This is a place to collect observations about the systems around AI—where they hold, where they break, and what changes depending on where they are used.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="rounded-3xl border-stone-200 bg-white shadow-sm hover:shadow-md">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-100">
                      <Icon className="h-5 w-5 text-stone-800" />
                    </div>
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="text-stone-600">{pillar.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}