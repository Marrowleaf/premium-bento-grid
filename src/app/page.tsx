"use client";

import React from "react";
import { 
  Zap, 
  Shield, 
  Layers, 
  Globe, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BentoCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  children 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  className?: string; 
  children?: React.ReactNode;
}) => (
  <div className={cn(
    "group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-8 transition-all hover:border-zinc-700/80",
    className
  )}>
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-400">
          <Icon size={20} />
        </div>
        <h3 className="mb-2 text-xl font-medium tracking-tightest text-zinc-100">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
      {children}
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-semibold tracking-tightest sm:text-6xl text-zinc-100">
          Engineered for performance.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          A high-performance bento grid built with Next.js, Tailwind CSS, and Lucide icons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        <BentoCard
          title="Global Edge Network"
          description="Deploy your applications at the edge with millisecond latency worldwide."
          icon={Globe}
          className="md:col-span-2"
        >
          <div className="mt-8 flex items-center gap-2 text-xs font-medium text-blue-400">
            Learn more <ArrowUpRight size={14} />
          </div>
        </BentoCard>

        <BentoCard
          title="Real-time Analytics"
          description="Track every interaction as it happens with zero delay."
          icon={Zap}
          className="md:row-span-2"
        >
          <div className="mt-12 h-32 w-full rounded-2xl bg-gradient-to-t from-zinc-950 to-zinc-800/50 border border-zinc-800/50" />
        </BentoCard>

        <BentoCard
          title="Enterprise Security"
          description="Bank-grade encryption for all your data at rest and in transit."
          icon={Shield}
        />

        <BentoCard
          title="Powerful Infrastructure"
          description="Scalable compute resources that grow with your business needs."
          icon={Cpu}
        />
      </div>
    </main>
  );
}
