import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/site/FadeIn";
import { StaggerText } from "@/components/site/StaggerText";
import { SectionLabel } from "@/components/site/SectionLabel";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { HoverImage } from "@/components/site/HoverImage";
import { AutoVideo } from "@/components/site/AutoVideo";
import { waMessages } from "@/lib/whatsapp";
import t1 from "@/assets/training-1.jpg";
import t2 from "@/assets/training-2.jpg";
import trainee from "@/assets/atelier-trainee.jpg";
import m17 from "/media/m-7.jpg";
import m22 from "/media/m-12.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Machine Operation Academy - Kenavid Monogram" },
      {
        name: "description",
        content:
          "Hands-on monogram machine operation training in Lagos. Learn industrial multi-needle embroidery from day one.",
      },
      { property: "og:title", content: "Machine Operation Academy - Kenavid Monogram" },
      {
        property: "og:description",
        content:
          "Six-week hands-on training to master industrial monogram embroidery machines. Cohort-based, certified.",
      },
      { property: "og:image", content: "https://kenavidmonogram.com//logo.png" },
      { name: "twitter:image", content: "https://kenavidmonogram.com//logo.png" },
    ],
  }),
  component: Training,
});

function Training() {
  return (
    <>
      <Hero />
      <Intro />
      <Curriculum />
      <LiveLab />
      <Outcomes />
      <Logistics />
      <Enroll />
    </>
  );
}

function LiveLab() {
  return (
    <section className="container-luxe py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
        <FadeIn className="lg:col-span-7">
          <SectionLabel index="◐">Inside the Training Floor</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Hands on the machine from day one.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} className="lg:col-span-5">
          <p className="text-foreground/70 text-lg leading-relaxed">
            Watch our trainees and operators at work - every minute on the floor is supervised
            production, not theory.
          </p>
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
        <FadeIn className="md:col-span-8">
          <AutoVideo
            src="/media/media-13.mp4"
            poster="/media/media-13.mp4"
            ratio="wide"
            ariaLabel="Trainee running a live monogram production job"
          />
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-4">
          <HoverImage src={t2} alt="Embroidery training in progress" ratio="portrait" />
        </FadeIn>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 bg-foreground text-background overflow-hidden">
      <img src={t2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/75 to-foreground/40" />
      <div className="container-luxe relative">
        <FadeIn>
          <p className="text-[10px] tracking-[0.4em] uppercase text-background/60">⊹ The Academy</p>
        </FadeIn>
        <StaggerText
          as="h1"
          text="Master the machine. Own the craft."
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl"
        />
        <FadeIn delay={0.6}>
          <p className="mt-8 text-lg text-background/70 max-w-2xl leading-relaxed">
            A hands-on, cohort-based training program where you learn to operate, calibrate,
            troubleshoot, and produce on industrial multi-needle embroidery machines - taught by
            working professionals.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton
              message={waMessages.training}
              variant="solid"
              className="bg-background text-foreground hover:bg-[oklch(0.85_0.08_85)]"
            >
              Book a Training
            </WhatsAppButton>
            <WhatsAppButton
              message={waMessages.training}
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              Download Brochure
            </WhatsAppButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-16 md:py-24 container-luxe grid lg:grid-cols-12 gap-12 items-start">
      <FadeIn className="lg:col-span-5 grid grid-cols-2 gap-3">
        <HoverImage
          src={trainee}
          alt="Trainee operating a Kenavid Monogram embroidery machine"
          ratio="tall"
          className="col-span-2"
        />
        <HoverImage src={t1} alt="Student threading a multi-needle head" ratio="square" />
        <AutoVideo
          src="/media/m-3.jpg"
          poster="/media/m-3.jpg"
          ratio="square"
          ariaLabel="Hands-on training session with a Kenavid Monogram machine"
        />
      </FadeIn>
      <div className="lg:col-span-7 lg:pt-16">
        <FadeIn>
          <SectionLabel index="01">Program Overview</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            Built for working hands, not lecture halls.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-2xl">
            Our program is engineered for one thing: making you self-sufficient on a multi-needle
            embroidery machine. From the first session you are touching the machine, threading
            needles, hooping fabric, and running real production - under the watch of an experienced
            operator.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t hairline pt-8">
            {[
              ["6 Wks", "Duration"],
              ["1:3", "Trainer Ratio"],
              ["100%", "Hands-On"],
            ].map(([k, v]) => (
              <div key={v}>
                <p className="font-display text-3xl">{k}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mt-2">{v}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    {
      n: "Week 01",
      t: "Machine Anatomy & Setup",
      d: "Identify every component, lubricate, thread the head, set tension, and prepare the machine for daily production.",
      pts: [
        "Threading 9-15 needle heads",
        "Bobbin winding & casing",
        "Tension calibration",
        "Daily maintenance routines",
      ],
    },
    {
      n: "Week 02",
      t: "Hooping & Stabilizers",
      d: "The single most important skill. Learn to hoop perfectly straight, choose the right stabilizer for each fabric, and avoid puckering.",
      pts: [
        "Cut-away vs tear-away",
        "Wash-away & topping films",
        "Hoop sizing & alignment",
        "Cap framing",
      ],
    },
    {
      n: "Week 03",
      t: "File Loading & Color Sequencing",
      d: "Read DST/PES files, assign needles to colors, plan the most efficient sequence, and trim jumps cleanly.",
      pts: [
        "USB & direct file load",
        "Color path planning",
        "Trim & jump optimization",
        "Production scheduling",
      ],
    },
    {
      n: "Week 04",
      t: "Production & Quality Control",
      d: "Run real client jobs under supervision. Learn to spot density issues, registration drift, and finish quality before sign-off.",
      pts: [
        "Live job execution",
        "QC checkpoints",
        "Speed vs quality balance",
        "Pressing & finishing",
      ],
    },
    {
      n: "Week 05",
      t: "Digitization Fundamentals",
      d: "Convert simple logos and monograms into stitch files. Understand density, pull compensation, and underlay.",
      pts: [
        "Software navigation",
        "Stitch types overview",
        "Pull compensation",
        "First-file project",
      ],
    },
    {
      n: "Week 06",
      t: "Business & Certification",
      d: "Pricing, client briefing, packaging, and your final certification piece - produced start-to-finish unsupervised.",
      pts: [
        "Pricing your work",
        "Client communication",
        "Final assessment",
        "Certificate of completion",
      ],
    },
  ];

  return (
    <section className="bg-[var(--pearl)] py-16 md:py-24">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <FadeIn className="lg:col-span-5">
            <SectionLabel index="02">Curriculum</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Six weeks. Six modules. Zero filler.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <p className="text-foreground/70 text-lg leading-relaxed">
              Every module is taught on the same equipment used in our live production studio -
              Kenavid Monogram industrial multi-needle machines. You will leave knowing the machine
              inside-out.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {modules.map((m, i) => (
            <FadeIn key={m.n} delay={(i % 2) * 0.08}>
              <div className="bg-[var(--pearl)] p-8 md:p-10 h-full">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs tracking-[0.3em] uppercase text-[oklch(0.7_0.09_80)]">
                    {m.n}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                    Module 0{i + 1}
                  </p>
                </div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  {m.t}
                </h3>
                <p className="mt-4 text-foreground/65 leading-relaxed">{m.d}</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {m.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/70">
                      <Check className="h-3.5 w-3.5 mt-1 shrink-0 text-[oklch(0.7_0.09_80)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="container-luxe py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <FadeIn>
          <SectionLabel index="03">What You Leave With</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Real skills. Real income potential.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ul className="mt-8 space-y-5">
            {[
              "Operate any multi-needle industrial embroidery machine confidently",
              "Diagnose & fix common stitching faults without calling support",
              "Hoop garments, caps, towels, and unusual surfaces correctly",
              "Read, edit, and load embroidery files (DST, PES, EXP, JEF)",
              "Digitize basic logos and monograms from scratch",
              "Quote and price client work professionally",
              "Receive a Kenavid Monogram Certificate of Completion",
            ].map((o) => (
              <li key={o} className="flex items-start gap-4">
                <span className="h-px w-6 bg-[oklch(0.7_0.09_80)] mt-3 shrink-0" />
                <span className="text-foreground/80 leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
      <FadeIn delay={0.2}>
        <HoverImage src={m22} alt="Embroidery digitization software" ratio="square" />
      </FadeIn>
    </section>
  );
}

function Logistics() {
  return (
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="container-luxe">
        <FadeIn>
          <p className="text-[10px] tracking-[0.32em] uppercase text-background/60">
            ⊹ 04 - Logistics
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
            Cohorts run year-round at our Lagos studio.
          </h2>
        </FadeIn>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
          {[
            ["Format", "In-person, hands-on"],
            ["Schedule", "Mon - Fri, 9am - 2pm"],
            ["Location", "Egbeda, Lagos"],
            ["Class Size", "Maximum 6 students"],
            ["Equipment", "Provided on-site"],
            ["Materials", "Included in tuition"],
            ["Certificate", "Upon final assessment"],
            ["Aftercare", "30-day support hotline"],
          ].map(([k, v]) => (
            <FadeIn key={k}>
              <div className="bg-foreground p-8 h-full">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.85_0.08_85)]">
                  {k}
                </p>
                <p className="mt-4 font-display text-2xl">{v}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-background/15 pt-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-background/50">Tuition</p>
              <p className="mt-3 font-display text-5xl md:text-6xl">₦250,000</p>
              <p className="mt-3 text-sm text-background/60">
                All materials, machine time, and certification included. Payment plans available.
              </p>
            </div>
            <WhatsAppButton
              message={waMessages.training}
              className="bg-background text-foreground hover:bg-[oklch(0.85_0.08_85)]"
              size="lg"
            >
              Book Your Seat
            </WhatsAppButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Enroll() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <img src={m17} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="container-luxe relative text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.32em] uppercase text-foreground/60">
            ⊹ Reserve a Seat
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-5xl mx-auto text-balance">
            The next cohort starts soon.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-foreground/65 max-w-xl mx-auto text-lg">
            Class sizes are capped at six. Reserve your seat by sending us a quick WhatsApp - we'll
            respond within working hours.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message={waMessages.training} size="lg">
              Book a Training
            </WhatsAppButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
