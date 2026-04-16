import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Is Orbyt free for students?",
    answer:
      "Yes—Orbyt is free for students and works with the ChatGPT access you already pay for, so you are not buying a second AI subscription. An AI student harness is a local layer that reads Canvas, calendars, and notes so you can ask things like what is due tonight, prep me for lab, or shuffle my week and get answers tied to your real classes. Students use it for gentle deadline nudges, study blocks dropped on the calendar, and turning a noisy syllabus into a simple plan.",
  },
  {
    id: "item-2",
    question: "How does Canvas integration work?",
    answer:
      "Orbyt connects through Canvas using a developer token you create in your account settings. Assignments, announcements, and grades sync locally—nothing is stored on our servers.",
  },
  {
    id: "item-3",
    question: "Is my data stored locally?",
    answer:
      "Yes. Orbyt is local-first: your database and tokens live on your machine, with OS-level protection for credentials. You control exports and backups.",
  },
  {
    id: "item-4",
    question: "What AI providers are supported?",
    answer:
      "Orbyt works with the providers you configure via API keys—commonly ChatGPT-compatible endpoints—and is designed so you can bring your own model stack.",
  },
  {
    id: "item-5",
    question: "When can I get access?",
    answer:
      "Join the waitlist and we will email you when a spot opens. Early access prioritizes students already using Canvas, Notion, or Discord in their workflow.",
  },
];

export default function FAQs() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border bg-muted py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Quick answers about Orbyt, privacy, integrations, and how the waitlist
            works.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-border bg-card px-8 py-3 shadow-sm ring-4 ring-muted dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base text-ink hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 px-8 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#waitlist"
              className="font-medium text-primary hover:underline"
            >
              Join the waitlist
            </a>{" "}
            and we will keep you posted.
          </p>
        </div>
      </div>
    </section>
  );
}
