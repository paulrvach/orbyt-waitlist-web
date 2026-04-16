/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Cancel01Icon,
  CheckmarkCircle02Icon,
  DatabaseIcon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  Menu01Icon,
  Moon02Icon,
  SparklesIcon,
  Sun03Icon,
  TwitterIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";

import {
  AppleCalendarMark,
  BrandIcon,
  siCanvas,
  siDiscord,
  siGithub,
  siGoogledocs,
  siNotion,
} from "@/components/brand-icon";
import { Features } from "@/components/blocks/features-8";
import FAQs from "@/components/ui/faq";

const Hi = ({
  icon,
  size = 24,
  className,
  strokeWidth = 1.75,
}: {
  icon: IconSvgElement;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) => (
  <HugeiconsIcon
    icon={icon}
    size={size}
    strokeWidth={strokeWidth}
    className={className}
    color="currentColor"
  />
);

const LOOPS_FORM_URL = import.meta.env.VITE_LOOPS_FORM_URL as string | undefined;

type LoopsFormResponse = {
  success?: boolean;
  message?: string;
};

// --- Components ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 187 156" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g filter="url(#filter0_d_47_210)">
      <circle cx="93.2761" cy="82" r="61.5" fill="url(#paint0_radial_47_210)"/>
    </g>
    <path d="M31.7759 81.9995C31.7759 90.1727 33.3706 97.9737 36.2652 105.108C34.6029 106.727 33.0485 108.321 31.6067 109.882C27.7839 114.021 25.0892 117.575 23.2906 120.439C26.6725 120.446 31.117 120.065 36.6576 119.04C38.7403 118.654 40.9099 118.19 43.158 117.65C47.8167 124.188 53.723 129.775 60.5289 134.064C30.8947 143.433 7.68233 143.547 1.55037 132.431C-4.59336 121.291 7.94963 101.661 31.7779 81.5531C31.7768 81.7018 31.7759 81.8506 31.7759 81.9995Z" fill="url(#paint1_linear_47_210)"/>
    <path d="M125.601 29.6715C155.604 20.0604 179.167 19.8473 185.352 31.0608L185.561 31.4592C191.224 42.7195 178.544 62.2566 154.774 82.2287C154.774 82.1524 154.776 82.0759 154.776 81.9995C154.776 73.7784 153.162 65.9342 150.235 58.7658C152.048 57.0145 153.738 55.2947 155.294 53.6098C159.117 49.471 161.81 45.9153 163.608 43.0515C160.227 43.0449 155.783 43.427 150.243 44.4519C147.974 44.8718 145.601 45.3857 143.136 45.9894C138.421 39.4725 132.459 33.9169 125.601 29.6715Z" fill="url(#paint2_linear_47_210)"/>
    <path d="M136.947 26.4018C161.433 20.1953 179.97 21.3051 185.351 31.0614L185.56 31.4597C194.134 48.5086 160.665 84.5357 110.306 112.31C59.5507 140.302 10.8595 149.31 1.54942 132.43C-3.3713 123.508 3.6963 109.139 18.9484 93.4402C19.2553 94.9946 19.7674 96.4798 20.4939 97.8826C22.9353 102.596 27.5369 105.865 33.6667 107.71C32.9568 108.441 32.2695 109.164 31.6067 109.882C27.7838 114.021 25.0883 117.576 23.2896 120.44C26.6715 120.446 31.116 120.064 36.6567 119.039C53.6462 115.896 76.4177 107.589 100.406 94.3591C124.394 81.1291 143.57 66.3017 155.293 53.6094C159.116 49.4708 161.809 45.9158 163.608 43.0521C160.226 43.0454 155.782 43.4266 150.242 44.4514C148.833 44.7122 147.385 45.0106 145.898 45.3423C146.543 41.1223 146.053 37.201 144.277 33.772C142.689 30.7064 140.188 28.2511 136.947 26.4018Z" fill="url(#paint3_linear_47_210)"/>
    <path d="M107.626 0C107.626 14.1523 119.099 25.625 133.251 25.625C119.099 25.625 107.626 37.0977 107.626 51.25C107.626 37.0977 96.1534 25.625 82.0011 25.625C96.1534 25.625 107.626 14.1523 107.626 0Z" fill="#D9D9D9"/>
    <defs>
      <filter id="filter0_d_47_210" x="24.1761" y="16.9" width="138.2" height="138.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_47_210"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2.8"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_47_210"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_47_210" result="shape"/>
      </filter>
      <radialGradient id="paint0_radial_47_210" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.7386 108.138) rotate(-17.0764) scale(82.0288)">
        <stop stop-color="#006EFE"/>
        <stop offset="1" stop-color="#010101"/>
      </radialGradient>
      <linearGradient id="paint1_linear_47_210" x1="9.73862" y1="121.975" x2="201.414" y2="22.5499" gradientUnits="userSpaceOnUse">
        <stop stop-color="#74B0FF"/>
        <stop offset="0.514423" stop-color="#006EFE"/>
        <stop offset="1" stop-color="#004298"/>
      </linearGradient>
      <linearGradient id="paint2_linear_47_210" x1="9.73862" y1="121.975" x2="201.414" y2="22.5499" gradientUnits="userSpaceOnUse">
        <stop stop-color="#74B0FF"/>
        <stop offset="0.514423" stop-color="#006EFE"/>
        <stop offset="1" stop-color="#004298"/>
      </linearGradient>
      <linearGradient id="paint3_linear_47_210" x1="9.73862" y1="121.975" x2="201.414" y2="22.5499" gradientUnits="userSpaceOnUse">
        <stop stop-color="#74B0FF"/>
        <stop offset="0.514423" stop-color="#006EFE"/>
        <stop offset="1" stop-color="#004298"/>
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = ({
  onJoinWaitlist,
  isDark,
  onToggleTheme,
}: {
  onJoinWaitlist: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-surface/80 py-3 backdrop-blur-md dark:bg-surface/90"
          : "bg-transparent py-8"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-12">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <span className="font-logo text-2xl font-semibold tracking-tight text-ink">
            Orbyt
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {[
              { label: "Features", href: "features" },
              { label: "Integrations", href: "integrations" },
              { label: "Demo", href: "demo" },
              { label: "FAQ", href: "faq" },
            ].map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="font-mono text-[13px] uppercase tracking-wider text-subtle transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-ink shadow-sm transition-colors hover:bg-muted"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Hi icon={Sun03Icon} size={20} className="h-5 w-5" />
            ) : (
              <Hi icon={Moon02Icon} size={20} className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            onClick={onJoinWaitlist}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
          >
            Join Waitlist
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Hi icon={Sun03Icon} size={20} className="h-5 w-5" />
            ) : (
              <Hi icon={Moon02Icon} size={20} className="h-5 w-5" />
            )}
          </button>
          <button type="button" className="text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <Hi icon={Cancel01Icon} size={22} /> : <Hi icon={Menu01Icon} size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full border-b border-border bg-surface p-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {[
                  { label: "Features", href: "features" },
                  { label: "Integrations", href: "integrations" },
                  { label: "Demo", href: "demo" },
                  { label: "FAQ", href: "faq" },
                ].map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-lg uppercase text-subtle transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onJoinWaitlist();
                }}
                className="w-full rounded-xl bg-accent px-5 py-4 text-lg font-semibold text-white"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ emailInputRef }: { emailInputRef: React.RefObject<HTMLInputElement | null> }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formConfigured = Boolean(LOOPS_FORM_URL?.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !formConfigured) return;

    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.set("email", email.trim());
      params.set("source", "Orbyt landing");
      params.set("userGroup", "Waitlist");

      const response = await fetch(LOOPS_FORM_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.status === 429) {
        setError("Too many signups, please try again in a little while.");
        return;
      }

      let data: LoopsFormResponse;
      try {
        data = (await response.json()) as LoopsFormResponse;
      } catch {
        setError("Something went wrong. Please try again.");
        return;
      }

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setError(data.message ?? "Could not join the waitlist. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroFloaters: {
    top: string;
    left: string;
    delay: number;
    node: React.ReactNode;
  }[] = [
    { top: "10%", left: "2%", delay: 0, node: <BrandIcon icon={siCanvas} className="h-9 w-9" /> },
    { top: "22%", left: "12%", delay: 0.4, node: <AppleCalendarMark className="h-9 w-9" /> },
    { top: "8%", left: "38%", delay: 0.2, node: <BrandIcon icon={siGoogledocs} className="h-8 w-8" /> },
    { top: "56%", left: "4%", delay: 0.6, node: <BrandIcon icon={siDiscord} className="h-9 w-9" /> },
    { top: "82%", left: "6%", delay: 0.1, node: <BrandIcon icon={siNotion} monochrome className="h-8 w-8 text-ink" /> },
    { top: "18%", left: "52%", delay: 0.8, node: <BrandIcon icon={siGithub} monochrome className="h-8 w-8 text-ink" /> },
  ];

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-surface pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {heroFloaters.map((f, i) => (
          <motion.div
            key={i}
            className="absolute rounded-2xl border border-border/40 bg-card/50 p-2.5 shadow-lg backdrop-blur-md dark:bg-card/30"
            style={{ top: f.top, left: f.left }}
            animate={{ y: [0, -16, 0], rotate: [-2, 3, -2] }}
            transition={{
              duration: 5.5 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.delay,
            }}
          >
            {f.node}
          </motion.div>
        ))}
        <div className="absolute -right-8 top-1/3 opacity-[0.045] dark:opacity-[0.08]">
          <BrandIcon icon={siNotion} monochrome className="h-[min(55vw,420px)] w-[min(55vw,420px)] text-ink" />
        </div>
        <div className="absolute -left-16 bottom-1/4 opacity-[0.05] dark:opacity-[0.07]">
          <BrandIcon icon={siCanvas} className="h-[min(40vw,320px)] w-[min(40vw,320px)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="mb-6 font-display text-7xl font-extrabold leading-[0.9] tracking-[-0.05em] text-ink md:text-[84px]">
            Your academic <br />
            weapon. Assembled.
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">Connects to</span>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-2 shadow-sm backdrop-blur-sm dark:bg-card/80">
              <BrandIcon icon={siCanvas} className="h-5 w-5" />
              <AppleCalendarMark className="h-5 w-5" />
              <BrandIcon icon={siGoogledocs} className="h-5 w-5" />
              <BrandIcon icon={siDiscord} className="h-5 w-5" />
              <BrandIcon icon={siNotion} monochrome className="h-5 w-5 text-ink" />
              <BrandIcon icon={siGithub} monochrome className="h-5 w-5 text-ink" />
            </div>
          </div>
          <p className="mb-12 max-w-lg text-xl leading-relaxed text-subtle">
            Orbyt gives you a team of AI agents that proactively manage your deadlines, organize
            your study flow, and keep your campus life running — so you show up prepared, every time.
          </p>

          <div id="waitlist" className="max-w-md scroll-mt-28">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex gap-3 rounded-xl border border-border bg-card p-1.5 shadow-sm transition-colors focus-within:border-accent">
                  <input
                    ref={emailInputRef}
                    type="email"
                    placeholder="student@university.edu"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!formConfigured || isSubmitting}
                    className="flex-1 bg-transparent border-none outline-none text-ink px-4 py-3 text-base font-sans disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={!formConfigured || isSubmitting}
                    className="bg-accent text-white px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none shrink-0"
                  >
                    {isSubmitting ? "Joining…" : "Join Waitlist"}
                  </button>
                </div>
                {!formConfigured && (
                  <p className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                    Set <span className="font-mono">VITE_LOOPS_FORM_URL</span> to your Loops form endpoint to enable signups.
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2" role="alert">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-100 p-5 rounded-xl flex items-center gap-4 text-green-700"
              >
                <Hi icon={CheckmarkCircle02Icon} size={24} className="h-6 w-6 shrink-0 text-green-600" />
                <div className="text-left">
                  <p className="font-bold">You're on the list!</p>
                  <p className="text-sm opacity-80">We'll notify you when a spot opens up.</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 font-mono text-xs text-ink">
              <Hi icon={ZapIcon} size={14} className="text-accent" />
              Proactive agents
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 font-mono text-xs text-ink">
              <Hi icon={SparklesIcon} size={14} className="text-accent" />
              Campus-ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 font-mono text-xs text-ink">
              <Hi icon={DatabaseIcon} size={14} className="text-accent" />
              Learns your rhythm
            </span>
          </div>
        </motion.div>

        {/* Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-3 -right-3 z-20 rotate-3 rounded-full bg-zinc-900 px-4 py-2 text-xs font-bold text-white shadow-xl dark:bg-zinc-950">
            Active Syncing
          </div>

          <div className="relative flex min-h-[520px] flex-col gap-5 overflow-hidden rounded-[32px] border border-border bg-muted p-6 shadow-2xl dark:border-zinc-300 dark:bg-zinc-200">
            <div className="flex items-center justify-between border-b border-border pb-4 dark:border-zinc-300">
              <div className="flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-subtle dark:text-zinc-500">
                Orbyt Dashboard
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-zinc-200 dark:bg-white">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-subtle dark:text-zinc-500">
                Active Integrations
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { name: "Canvas LMS", mark: <BrandIcon icon={siCanvas} className="h-5 w-5 shrink-0" />, status: "Active" },
                  { name: "Notion", mark: <BrandIcon icon={siNotion} monochrome className="h-5 w-5 shrink-0 text-zinc-900" />, status: "Synced" },
                  { name: "Google Docs", mark: <BrandIcon icon={siGoogledocs} className="h-5 w-5 shrink-0" />, status: "Ready" },
                  { name: "Discord", mark: <BrandIcon icon={siDiscord} className="h-5 w-5 shrink-0" />, status: "Polling" },
                  { name: "Apple Cal.", mark: <AppleCalendarMark className="h-5 w-5 shrink-0" />, status: "Live" },
                  { name: "GitHub", mark: <BrandIcon icon={siGithub} monochrome className="h-5 w-5 shrink-0 text-zinc-900" />, status: "Hooked" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl border border-border bg-muted p-2.5 sm:gap-3 sm:p-3 dark:border-zinc-200 dark:bg-zinc-50"
                  >
                    {item.mark}
                    <span className="min-w-0 truncate font-mono text-[10px] text-ink sm:text-[11px] dark:text-zinc-900">
                      {item.name}
                    </span>
                    <span className="ml-auto shrink-0 rounded-full bg-green-100 px-1.5 py-0.5 text-[8px] font-bold uppercase text-green-700 sm:px-2 sm:text-[9px] dark:bg-emerald-100 dark:text-emerald-800">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-zinc-200 dark:bg-white">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-subtle dark:text-zinc-500">
                Autonomous Agent Feed
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Smart Planner identified a conflict",
                    meta: "Calculated 4h work load for CS101 assignment. Moving gym session.",
                    mark: <AppleCalendarMark className="h-5 w-5 shrink-0" />,
                  },
                  {
                    title: "Canvas Sync: Midterm Grade Posted",
                    meta: "Physics 2: 94%. Memory updated in SOUL.md",
                    mark: <BrandIcon icon={siCanvas} className="h-5 w-5 shrink-0" />,
                  },
                  {
                    title: "New MCP Plugin Discovered",
                    meta: "Notion workspace linked for secure handshake.",
                    mark: <BrandIcon icon={siNotion} monochrome className="h-5 w-5 shrink-0 text-zinc-900" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 border-b border-zinc-200/80 pb-4 last:border-0 last:pb-0 dark:border-zinc-200"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted dark:border-zinc-200 dark:bg-zinc-100">
                      {item.mark}
                    </div>
                    <div>
                      <div className="mb-0.5 text-[13px] font-bold text-ink dark:text-zinc-900">{item.title}</div>
                      <div className="text-[11px] leading-tight text-subtle dark:text-zinc-600">{item.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Integrations = () => {
  const integrations: {
    name: string;
    color: string;
    mark: React.ReactNode;
  }[] = [
    { name: "Apple Calendar", color: "bg-red-50 text-red-700 border-red-100 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900/50", mark: <AppleCalendarMark className="h-6 w-6 shrink-0" /> },
    { name: "Notion", color: "bg-zinc-50 text-zinc-900 border-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-100 dark:border-zinc-700", mark: <BrandIcon icon={siNotion} monochrome className="h-6 w-6 shrink-0 text-current" /> },
    { name: "Google Docs", color: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/30 dark:text-blue-200 dark:border-blue-900/50", mark: <BrandIcon icon={siGoogledocs} className="h-6 w-6 shrink-0" /> },
    { name: "Discord", color: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-200 dark:border-indigo-900/50", mark: <BrandIcon icon={siDiscord} className="h-6 w-6 shrink-0" /> },
    { name: "Canvas LMS", color: "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950/30 dark:text-orange-200 dark:border-orange-900/50", mark: <BrandIcon icon={siCanvas} className="h-6 w-6 shrink-0" /> },
    { name: "GitHub", color: "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-200 dark:border-zinc-700", mark: <BrandIcon icon={siGithub} monochrome className="h-6 w-6 shrink-0 text-current" /> },
  ];

  /** Half tile (52px) so tile center sits on dashed ring at inset-4 */
  const orbitYOffset = "calc(-50cqmin + 1rem + 26px)";
  const orbitSlots = [
    { angle: -90, node: <AppleCalendarMark className="h-7 w-7" /> },
    { angle: -30, node: <BrandIcon icon={siGoogledocs} className="h-7 w-7" /> },
    { angle: 30, node: <BrandIcon icon={siDiscord} className="h-7 w-7" /> },
    { angle: 90, node: <BrandIcon icon={siCanvas} className="h-7 w-7" /> },
    { angle: 150, node: <BrandIcon icon={siNotion} monochrome className="h-7 w-7 text-ink" /> },
    { angle: -150, node: <BrandIcon icon={siGithub} monochrome className="h-7 w-7 text-ink" /> },
  ];

  return (
    <section
      id="integrations"
      className="border-y border-border bg-muted py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-12">
        <div className="flex flex-col items-center gap-24 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 font-display text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
              Connects to <br />
              <span className="text-accent">Your Entire Stack</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-subtle">
              Orbyt uses a local-first MCP orchestrator to safely connect with your favorite tools. Your tokens never leave your machine.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {integrations.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl border px-5 py-3.5 font-mono text-xs uppercase tracking-wider ${item.color}`}>
                  {item.mark}
                  <span className="min-w-0 truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-square w-full max-w-md [container-type:size]">
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-[100px]" />
              {/* Orbit arm: spins; each tile counter-spins so logos stay upright */}
              <motion.div
                className="absolute inset-0 z-[2]"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              >
                <div className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-border/70" />
                {orbitSlots.map(({ angle, node }, i) => (
                  <div
                    key={i}
                    className="absolute left-[45%] top-[45%] flex h-[52px] w-[52px] items-center justify-center"
                    style={{
                      transform: `rotate(${angle}deg) translateY(${orbitYOffset}) translate(-50%, -50%)`,
                    }}
                  >
                    <motion.div
                      className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                    >
                      {node}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
              <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-[32px] bg-accent shadow-2xl shadow-accent/40">
                  <Logo className="h-20 w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const STUDENT_AVATAR =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&q=80";

const chatMessages: {
  role: "user" | "assistant";
  text: string;
  tools?: { name: string; icon: React.ReactNode }[];
}[] = [
  {
    role: "user",
    text: "I have a physics midterm Thursday and a CS project due Friday. Can you plan my week?",
  },
  {
    role: "assistant",
    text: "Let me check your calendar and Canvas for deadlines.",
    tools: [
      { name: "Canvas LMS", icon: <BrandIcon icon={siCanvas} className="h-4 w-4" /> },
      { name: "Apple Calendar", icon: <AppleCalendarMark className="h-4 w-4" /> },
    ],
  },
  {
    role: "assistant",
    text: "Here's your optimized plan:\n\n• Mon & Tue — Physics review blocks (2 h each), spaced repetition for formulas\n• Wed morning — Final physics practice exam, afternoon free as buffer\n• Wed evening → Thu — CS project sprint (I've moved your gym to 7 AM)\n• Thu night — Light review only, early sleep\n\nI've synced this to your calendar and created a Notion checklist. Want me to set Discord reminders too?",
  },
  {
    role: "user",
    text: "Yes, and can you pull my physics notes from Google Docs?",
  },
  {
    role: "assistant",
    text: "Done! I found 3 docs matching \"Physics 201\" in your Drive. I've linked them to your Notion study page and set a Discord reminder for each study block. Everything stays local — your tokens never left this machine.",
    tools: [
      { name: "Google Docs", icon: <BrandIcon icon={siGoogledocs} className="h-4 w-4" /> },
      { name: "Notion", icon: <BrandIcon icon={siNotion} monochrome className="h-4 w-4 text-current" /> },
      { name: "Discord", icon: <BrandIcon icon={siDiscord} className="h-4 w-4" /> },
    ],
  },
];

const ChatDemo = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let i = 0;
          const show = () => {
            i++;
            setVisibleCount(i);
            if (i < chatMessages.length) {
              setTimeout(show, 1800 + Math.random() * 700);
            }
          };
          setTimeout(show, 800);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = chatScrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [visibleCount]);

  return (
    <section ref={sectionRef} id="demo" className="bg-surface py-32">
      <div className="mx-auto max-w-7xl px-12">
        <div className="mb-16 text-center">
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-accent">
            Live Demo
          </span>
          <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Your AI study partner
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-subtle">
            Orbyt connects your tools and plans your semester autonomously. Here's what a real conversation looks like.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-[28px] border border-border bg-muted shadow-xl">
            <div className="flex items-center gap-3 border-b border-border bg-card/80 px-6 py-4 backdrop-blur-sm">
              <div className="flex gap-1.5">
                <span className="block size-3 rounded-full bg-[#ff5f56]" />
                <span className="block size-3 rounded-full bg-[#ffbd2e]" />
                <span className="block size-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 text-center font-mono text-[11px] uppercase tracking-widest text-subtle">
                Orbyt Chat
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-green-500" />
                <span className="font-mono text-[10px] text-subtle">Local</span>
              </div>
            </div>

            <div ref={chatScrollRef} className="flex h-[520px] flex-col gap-1 overflow-y-auto px-5 py-6">
              <AnimatePresence initial={false}>
                {chatMessages.slice(0, visibleCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div
                      className={`group flex w-full items-end gap-2.5 py-2 ${
                        msg.role === "user"
                          ? "is-user justify-end"
                          : "is-assistant justify-start"
                      }`}
                    >
                      {msg.role === "assistant" && (
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
                          <Logo className="size-5" />
                        </div>
                      )}
                      <div className="flex max-w-[80%] flex-col gap-1.5">
                        <div
                          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.role === "user"
                              ? "rounded-br-md bg-accent text-white"
                              : "rounded-bl-md border border-border bg-card text-ink"
                          }`}
                        >
                          {msg.text.split("\n").map((line, li) => (
                            <p key={li} className={li > 0 ? "mt-1.5" : ""}>
                              {line}
                            </p>
                          ))}
                        </div>
                        {msg.tools && (
                          <div className="flex flex-wrap gap-1.5">
                            {msg.tools.map((tool, ti) => (
                              <span
                                key={ti}
                                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] text-subtle shadow-sm"
                              >
                                {tool.icon}
                                {tool.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      {msg.role === "user" && (
                        <img
                          src={STUDENT_AVATAR}
                          alt=""
                          className="size-8 shrink-0 rounded-full object-cover ring-2 ring-border"
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {visibleCount > 0 && visibleCount < chatMessages.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2.5 py-2"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
                    <Logo className="size-5" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3">
                    <motion.span
                      className="block size-1.5 rounded-full bg-subtle"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="block size-1.5 rounded-full bg-subtle"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.span
                      className="block size-1.5 rounded-full bg-subtle"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </motion.div>
              )}

            </div>

            <div className="border-t border-border bg-card/80 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                <span className="flex-1 text-sm text-subtle">Ask Orbyt anything...</span>
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent text-white">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-12 md:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="font-logo text-2xl font-semibold tracking-tight text-ink">
            Orbyt
          </span>
        </div>
        
        <div className="flex gap-8">
          <Hi icon={GithubIcon} size={20} className="cursor-pointer text-subtle transition-colors hover:text-ink" />
          <Hi icon={TwitterIcon} size={20} className="cursor-pointer text-subtle transition-colors hover:text-ink" />
          <Hi icon={Linkedin01Icon} size={20} className="cursor-pointer text-subtle transition-colors hover:text-ink" />
          <Hi icon={Mail01Icon} size={20} className="cursor-pointer text-subtle transition-colors hover:text-ink" />
        </div>

        <p className="text-subtle text-xs font-mono uppercase tracking-widest">
          © 2026 Orbyt Labs. Built with Bun + Electron.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const waitlistEmailRef = useRef<HTMLInputElement>(null);
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((d) => !d);
  }, []);

  const scrollToWaitlist = useCallback(() => {
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    window.setTimeout(() => {
      waitlistEmailRef.current?.focus({ preventScroll: true });
    }, 350);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-sans text-ink selection:bg-accent/20 selection:text-accent">
      <Navbar
        onJoinWaitlist={scrollToWaitlist}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero emailInputRef={waitlistEmailRef} />
        <Features />
        <Integrations />
        <ChatDemo />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
