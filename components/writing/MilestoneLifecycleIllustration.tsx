"use client";

import { useState, useEffect } from "react";

type LoopMode = "structured" | "chaos";
type Step = "context" | "prompt" | "execute" | "verify" | "commit" | "complete";

interface ExplainerContent {
    title: string;
    role: string;
    description: string;
    takeaway: string;
    bgBadge: string;
    textBadge: string;
}

const explanationData: Record<LoopMode, Record<Step, ExplainerContent>> = {
    structured: {
        context: {
            title: "Project Context Initialization",
            role: "Human (Define base guidelines)",
            description: "Anchor the agent by loading architectural principles, tech stack specifications, and codebase conventions once at the start of the session. This prevents the agent from making arbitrary style decisions.",
            takeaway: "The boundaries you specify ahead of time determine the quality of output. Never let the agent invent conventions.",
            bgBadge: "bg-accent/10 border-accent/20",
            textBadge: "text-accent"
        },
        prompt: {
            title: "Decomposed Milestone Prompt",
            role: "Human (Specify boundaries)",
            description: "Translate one design choice into a small, self-contained prompt brief. Scope the milestone to target only 1-4 files, setting explicit prerequisites, inputs, and clear acceptance criteria.",
            takeaway: "Prompting is specifying, not typing. Scopes must be small enough to verify by eye in under a minute.",
            bgBadge: "bg-accent/10 border-accent/20",
            textBadge: "text-accent"
        },
        execute: {
            title: "Focused Agent Execution",
            role: "Agent (Implement design)",
            description: "The AI agent writes code within the tightly bounded sandbox. Because the scope is narrow and the guidelines are clear, the agent handles edge cases, maintains conventions, and implements accurately.",
            takeaway: "A bounded workspace enables the agent's pattern-matching to act as an effective second pair of eyes.",
            bgBadge: "bg-blue-500/10 border-blue-500/20",
            textBadge: "text-blue-400"
        },
        verify: {
            title: "The Verification Gate",
            role: "Human (Verify assertions)",
            description: "The load-bearing element of the cycle. The human engineer inspects the diff block, runs unit tests, and verifies compilation. If issues are found, a targeted follow-up is prompted immediately.",
            takeaway: "You remain responsible for the codebase. The verification gate prevents complex cascades of bad choices.",
            bgBadge: "bg-green-500/10 border-green-500/20",
            textBadge: "text-green-500 font-bold"
        },
        commit: {
            title: "Atomic Git Commit",
            role: "Human (Document choices)",
            description: "Commit the changes using a descriptive commit message that matches the milestone. The git log becomes a clean narrative of design decisions rather than a messy stream of lines of code.",
            takeaway: "Each milestone is a validated decision checkpoint. Keep history coherent.",
            bgBadge: "bg-purple-500/10 border-purple-500/20",
            textBadge: "text-purple-400"
        },
        complete: {
            title: "System Coherence Achieved",
            role: "System (Stable Base State)",
            description: "The milestone is successfully integrated, tested, and archived. The workspace transitions into the next base state. You are ready to specify the next milestone loop.",
            takeaway: "Denser decision-making results in high leverage, stable products, and zero technical debt.",
            bgBadge: "bg-emerald-500/10 border-emerald-500/20",
            textBadge: "text-emerald-500"
        }
    },
    chaos: {
        context: {
            // fallback
            title: "Skipped Context",
            role: "None",
            description: "Skipping guidelines. The agent starts with defaults.",
            takeaway: "Without context, the agent defaults to generic styles.",
            bgBadge: "bg-red-500/10 border-red-500/20",
            textBadge: "text-red-500"
        },
        prompt: {
            title: "The Giant Vague Prompt",
            role: "Human (Outsource decisions)",
            description: "Prompting a massive scope at once: 'Build the entire dashboard, booking page, and database models.' The human delegates architectural planning to the agent.",
            takeaway: "When you outsource decisions, the agent makes choices you might not understand later.",
            bgBadge: "bg-red-500/10 border-red-500/20",
            textBadge: "text-red-500"
        },
        execute: {
            title: "Blind Code Generation",
            role: "Agent (Generates wide diff)",
            description: "The agent writes code across 15+ files, producing 2,000+ lines. It looks functional at first glance, but conflicts with existing patterns and contains silent design regressions.",
            takeaway: "The speed of implementation is a multiplier of bugs if the decisions are incorrect.",
            bgBadge: "bg-orange-500/10 border-orange-500/20",
            textBadge: "text-orange-500"
        },
        verify: {
            title: "Superficial / Skipped Review",
            role: "Human (Overwhelmed by scope)",
            description: "The diff block is too large to review by eye. The human skips verification or runs the app blindly. Subtle errors enter production, requiring endless patches that break other areas.",
            takeaway: "When verification is impossible, ownership of the codebase is lost.",
            bgBadge: "bg-red-500/15 border-red-500/30",
            textBadge: "text-red-500 font-bold"
        },
        commit: {
            // fallback
            title: "Messy commit stream",
            role: "Human (Debugging)",
            description: "Committing dozens of lines of ad-hoc fixes. The git log reads like 'fix bug again', 'should work now'.",
            takeaway: "Git history becomes unstructured noise.",
            bgBadge: "bg-red-500/10 border-red-500/20",
            textBadge: "text-red-500"
        },
        complete: {
            title: "Incoherent & Opaque Codebase",
            role: "System (Accidental Architecture)",
            description: "The product ships, but the developer cannot explain the system. Code is tightly coupled and fragile. Future iterations become exponentially slow.",
            takeaway: "Outsourcing choices builds a system that works by accident. You must remain a conductor, not a typist.",
            bgBadge: "bg-red-500/20 border-red-500/40",
            textBadge: "text-red-500"
        }
    }
};

export function MilestoneLifecycleIllustration() {
    const [mode, setMode] = useState<LoopMode>("structured");
    const [currentStep, setCurrentStep] = useState<Step>("context");
    const [autoPlay, setAutoPlay] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [chaosIterations, setChaosIterations] = useState(0);

    const structuredSteps: Step[] = ["context", "prompt", "execute", "verify", "commit", "complete"];
    const chaosSteps: Step[] = ["prompt", "execute", "verify", "execute", "verify", "complete"];

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (autoPlay) {
            timer = setTimeout(() => {
                handleNext();
            }, 2500);
        }
        return () => clearTimeout(timer);
    }, [autoPlay, stepIndex, mode]);

    const handleNext = () => {
        const steps = mode === "structured" ? structuredSteps : chaosSteps;
        if (stepIndex < steps.length - 1) {
            const nextIdx = stepIndex + 1;
            setStepIndex(nextIdx);
            setCurrentStep(steps[nextIdx]);
            if (mode === "chaos" && steps[nextIdx] === "execute") {
                setChaosIterations(prev => prev + 1);
            }
        } else {
            setStepIndex(0);
            setCurrentStep(steps[0]);
            if (mode === "chaos") {
                setChaosIterations(0);
            }
        }
    };

    const handleReset = () => {
        setStepIndex(0);
        setCurrentStep(mode === "structured" ? "context" : "prompt");
        setAutoPlay(false);
        setChaosIterations(0);
    };

    const currentExplainer = explanationData[mode][currentStep] || explanationData[mode]["prompt"];

    return (
        <div className="my-10 p-6 border border-border-subtle rounded-xl bg-bg-secondary space-y-6">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse-ring {
                    0% { transform: scale(0.95); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(0.95); opacity: 0.5; }
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: -40;
                    }
                }
                .animate-pulse-ring {
                    animation: pulse-ring 2s infinite ease-in-out;
                }
                .animate-dash {
                    stroke-dasharray: 8 4;
                    animation: dash 3s linear infinite;
                }
            `}} />

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-text-primary">Immersive Demo: The Milestone Prompt Lifecycle</h3>
                <p className="text-sm text-text-muted">
                    Toggle between loops, click steps, and see how decomposing features into verified milestone units preserves system coherence compared to single-prompt chaos.
                </p>
            </div>

            {/* Mode Toggle */}
            <div className="flex border-b border-border-subtle">
                <button
                    onClick={() => {
                        setMode("structured");
                        handleReset();
                    }}
                    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                        mode === "structured"
                            ? "border-accent text-accent"
                            : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                >
                    Milestone Loop (Structured)
                </button>
                <button
                    onClick={() => {
                        setMode("chaos");
                        handleReset();
                    }}
                    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                        mode === "chaos"
                            ? "border-accent text-accent"
                            : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                >
                    Single-Prompt Loop (Chaos)
                </button>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleNext}
                    className="px-4 py-2 text-xs font-bold rounded bg-bg-primary border border-border-subtle hover:border-accent text-text-primary transition-all flex items-center gap-1.5"
                >
                    Next Step ➔
                </button>
                <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className={`px-4 py-2 text-xs font-bold rounded border transition-all ${
                        autoPlay
                            ? "bg-accent/10 border-accent text-accent animate-pulse"
                            : "bg-bg-primary border-border-subtle text-text-primary hover:border-accent"
                    }`}
                >
                    {autoPlay ? "Pause Auto-play" : "Auto-play Loop"}
                </button>
                <button
                    onClick={handleReset}
                    className="px-3 py-1.5 text-xs text-text-muted hover:text-text-primary transition-all ml-auto"
                >
                    Reset Simulation
                </button>
            </div>

            {/* Visual Workspace & Explainer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* 1. Loop Visualizer (Col: 7) */}
                <div className="lg:col-span-7 p-6 bg-bg-primary border border-border-subtle rounded-lg flex flex-col items-center justify-center min-h-[360px] relative overflow-hidden">
                    {mode === "structured" ? (
                        /* STRUCTURED DIAGRAM */
                        <div className="relative w-full max-w-sm h-72 flex items-center justify-center">
                            {/* Session context anchor at the top */}
                            <div className={`absolute top-0 px-4 py-2 rounded-lg border text-center transition-all duration-300 ${
                                currentStep === "context"
                                    ? "bg-accent/15 border-accent shadow-[0_0_12px_rgba(255,179,71,0.2)] scale-105"
                                    : "bg-bg-secondary border-border-subtle opacity-70"
                             }`}>
                                <div className="text-[9px] uppercase font-bold tracking-wider text-text-muted">Session Start</div>
                                <div className="text-xs font-bold text-text-primary flex items-center gap-1 justify-center">
                                    <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Loaded Context
                                </div>
                                <div className="text-[9px] text-text-muted mt-0.5">Rules, Architecture, Base State</div>
                            </div>

                            {/* Circular Connecting Line */}
                            <svg className="absolute w-56 h-56 top-16 pointer-events-none" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#333"
                                    strokeWidth="1.5"
                                    className="text-border-subtle"
                                />
                                {currentStep !== "context" && currentStep !== "complete" && (
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#ffb347"
                                        strokeWidth="2"
                                        className="animate-dash"
                                    />
                                )}
                            </svg>

                            {/* Node: Prompt */}
                            <div className={`absolute top-16 left-4 w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                                currentStep === "prompt"
                                    ? "bg-accent/15 border-accent shadow-[0_0_12px_rgba(255,179,71,0.25)] scale-110"
                                    : "bg-bg-secondary border-border-subtle opacity-80"
                            }`}>
                                <svg className="w-5 h-5 text-accent mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-[10px] font-bold text-text-primary">1. Prompt</span>
                                <span className="text-[8px] text-text-muted leading-tight">Bounded Brief</span>
                            </div>

                            {/* Node: Execute */}
                            <div className={`absolute bottom-6 left-12 w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                                currentStep === "execute"
                                    ? "bg-blue-500/15 border-blue-500 shadow-lg scale-110"
                                    : "bg-bg-secondary border-border-subtle opacity-80"
                            }`}>
                                <svg className="w-5 h-5 text-blue-500 mb-1 animate-spin" style={{ animationDuration: "8s" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-[10px] font-bold text-text-primary">2. Execute</span>
                                <span className="text-[8px] text-text-muted leading-tight">AI Implements</span>
                            </div>

                            {/* Node: Verify (Load-bearing) */}
                            <div className={`absolute bottom-6 right-12 w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                                currentStep === "verify"
                                    ? "bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(74,222,128,0.25)] scale-110 font-bold"
                                    : "bg-bg-secondary border-border-subtle opacity-90"
                            }`}>
                                {currentStep === "verify" && (
                                    <div className="absolute inset-0 rounded-full bg-green-500/10 animate-pulse-ring pointer-events-none" />
                                )}
                                <svg className="w-5 h-5 text-green-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-[10px] font-bold text-text-primary">3. Verify</span>
                                <span className="text-[8px] text-green-500 font-semibold leading-tight">Human Gate</span>
                            </div>

                            {/* Node: Commit */}
                            <div className={`absolute top-16 right-4 w-20 h-20 rounded-full border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                                currentStep === "commit"
                                    ? "bg-purple-500/15 border-purple-500 shadow-lg scale-110"
                                    : "bg-bg-secondary border-border-subtle opacity-80"
                            }`}>
                                <svg className="w-5 h-5 text-purple-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7H6a2 2 0 00-2 2v2a2 2 0 002 2h2m10-6a2 2 0 11-4 0 2 2 0 014 0zm0 8a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-[10px] font-bold text-text-primary">4. Commit</span>
                                <span className="text-[8px] text-text-muted leading-tight">Log Decision</span>
                            </div>

                            {/* Complete State Center Overlay */}
                            {currentStep === "complete" && (
                                <div className="absolute inset-0 m-auto w-48 h-34 bg-bg-secondary/95 border border-green-500/30 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm animate-scale-in">
                                    <svg className="w-7 h-7 text-green-500 mb-1 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h4 className="text-xs font-bold text-text-primary mt-1">Milestone Complete!</h4>
                                    <p className="text-[9px] text-text-muted mt-1 leading-normal">
                                        Each decision verified and logged. Codebase remains fully coherent.
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* CHAOS DIAGRAM */
                        <div className="relative w-full max-w-sm h-72 flex items-center justify-center">
                            {/* Giant prompt input at bottom/center */}
                            <div className={`absolute top-4 px-4 py-2 rounded-lg border text-center transition-all duration-300 ${
                                currentStep === "prompt"
                                    ? "bg-accent/15 border-accent shadow-[0_0_12px_rgba(255,179,71,0.2)] scale-105"
                                    : "bg-bg-secondary border-border-subtle opacity-70"
                             }`}>
                                <div className="text-[9px] uppercase font-bold tracking-wider text-text-muted">Start</div>
                                <div className="text-xs font-bold text-text-primary">Giant Vague Prompt</div>
                                <div className="text-[9px] text-text-muted mt-0.5">"Build booking module with auth & payments"</div>
                            </div>

                            {/* Tangled path visualization */}
                            <svg className="absolute w-64 h-48 top-16 pointer-events-none" viewBox="0 0 200 100">
                                <path
                                    d="M 100,0 Q 20,40 100,50 T 180,60 Q 100,80 100,100"
                                    fill="none"
                                    stroke={chaosIterations > 0 ? "#e05252" : "#333"}
                                    strokeWidth="2"
                                    className={currentStep === "execute" ? "animate-dash" : ""}
                                />
                                {chaosIterations > 1 && (
                                    <>
                                        <path
                                            d="M 100,0 Q 180,20 100,50 T 20,70 Q 120,90 100,100"
                                            fill="none"
                                            stroke="#e05252"
                                            strokeWidth="1.5"
                                            opacity="0.6"
                                        />
                                        <path
                                            d="M 100,0 Q 120,50 80,60 T 100,100"
                                            fill="none"
                                            stroke="#e05252"
                                            strokeWidth="1"
                                            opacity="0.4"
                                        />
                                    </>
                                )}
                            </svg>

                            {/* Node: AI Writes Code */}
                            <div className={`absolute left-4 top-24 w-24 p-3 rounded-lg border text-center transition-all duration-300 ${
                                currentStep === "execute"
                                    ? "bg-blue-500/15 border-blue-500 shadow-lg scale-105"
                                    : "bg-bg-secondary border-border-subtle opacity-70"
                            }`}>
                                <svg className="w-5 h-5 text-blue-500 mb-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                <div className="text-[10px] font-bold text-text-primary">AI Writes 15+ Files</div>
                                <div className="text-[8px] text-text-muted mt-0.5">Large diff block</div>
                            </div>

                            {/* Node: Broken Verification */}
                            <div className={`absolute right-4 top-24 w-24 p-3 rounded-lg border text-center transition-all duration-300 ${
                                currentStep === "verify"
                                    ? "bg-red-500/15 border-red-500 shadow-lg scale-105"
                                    : "bg-bg-secondary border-border-subtle opacity-70"
                            }`}>
                                <svg className="w-5 h-5 text-red-500 mb-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-[10px] font-bold text-text-primary">Verify Skipped</div>
                                <div className="text-[8px] text-red-400 mt-0.5">Too large to review</div>
                            </div>

                            {/* Incoherent State Warning */}
                            {currentStep === "complete" && (
                                <div className="absolute inset-0 m-auto w-48 h-34 bg-[#e05252]/10 border border-[#e05252]/40 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-sm animate-scale-in">
                                    <svg className="w-7 h-7 text-red-500 mb-1 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <h4 className="text-xs font-bold text-[#e05252] mt-1">Incoherent Codebase</h4>
                                    <p className="text-[9px] text-text-muted mt-1 leading-normal">
                                        Accidental choices compiled. Regressions introduced. Structure opaque to engineer.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* 2. Concept Explainer (Col: 5) */}
                <div className="lg:col-span-5 p-5 bg-bg-primary border border-border-subtle rounded-lg flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-border-subtle">
                            <span className="text-[9px] font-mono uppercase text-text-muted tracking-wider">Concept Explainer</span>
                            <span className={`text-[9.5px] uppercase font-bold px-2 py-0.5 rounded border ${currentExplainer.bgBadge} ${currentExplainer.textBadge}`}>
                                {currentExplainer.role}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-bold text-text-primary leading-tight">
                                {currentExplainer.title}
                            </h4>
                            <p className="text-xs text-text-muted leading-relaxed">
                                {currentExplainer.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border-subtle bg-bg-secondary/30 p-3.5 rounded-lg space-y-1">
                        <span className="text-[9px] uppercase font-bold text-text-muted tracking-wider block">Key Decision Point</span>
                        <p className="text-xs italic text-text-primary leading-relaxed">
                            "{currentExplainer.takeaway}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Console Log Pane */}
            <div className="p-4 rounded-lg bg-bg-primary border border-border-subtle font-mono text-[10px] flex flex-col justify-between min-h-[140px]">
                <div className="space-y-2">
                    <div className="text-text-muted uppercase text-[9px] font-bold tracking-wider pb-1.5 border-b border-border-subtle">
                        Live Execution Logs
                    </div>
                    <div className="space-y-1 max-h-[100px] overflow-y-auto">
                        {mode === "structured" ? (
                            <>
                                <div className="text-text-muted">[SYSTEM] Base context guidelines loaded.</div>
                                {stepIndex >= 1 && <div className="text-text-primary">→ [PROMPT] Specified milestone 1. Acceptance criteria loaded.</div>}
                                {stepIndex >= 2 && <div className="text-blue-400">→ [EXECUTE] Agent updated auth-validator.ts (+42 lines). Code compiles successfully.</div>}
                                {stepIndex >= 3 && <div className="text-green-500 font-semibold">→ [VERIFY] Human verified diff in 35 seconds. 3 test suites passed.</div>}
                                {stepIndex >= 4 && <div className="text-purple-400">→ [COMMIT] git commit -m "Milestone 1: auth validation rules". Decision registered.</div>}
                                {stepIndex >= 5 && <div className="text-green-500 font-bold">→ [COMPLETE] State fully verified. Core system remains coherent.</div>}
                            </>
                        ) : (
                            <>
                                <div className="text-text-muted">[SYSTEM] Giant prompt submitted. Using default agent weights.</div>
                                {stepIndex >= 1 && <div className="text-blue-400">→ [EXECUTE] Agent modified 18 files (+2,190 lines).</div>}
                                {stepIndex >= 2 && <div className="text-red-500">→ [VERIFY] Diff is too large to inspect. Skipping code verification. App fails to start.</div>}
                                {stepIndex >= 3 && <div className="text-blue-400">→ [EXECUTE-2] Agent patching booking router. Modified 5 files (+300 lines).</div>}
                                {stepIndex >= 4 && <div className="text-red-500">→ [VERIFY-2] Payments now throwing runtime exceptions. System opacity index = 98%.</div>}
                                {stepIndex >= 5 && <div className="text-red-500 font-bold">→ [COMPLETE] Chaos loop finishes. System works by accident. Architecture incoherent.</div>}
                            </>
                        )}
                    </div>
                </div>
                <div className="pt-2 mt-2 border-t border-border-subtle flex justify-between text-[9px] text-text-muted">
                    <span>Sim Status: {currentStep.toUpperCase()}</span>
                    {mode === "chaos" && chaosIterations > 0 && (
                        <span className="text-accent animate-pulse">Patch Iteration: {chaosIterations}</span>
                    )}
                </div>
            </div>

            {/* Comparison Metrics Matrix */}
            <div className="p-5 bg-bg-primary border border-border-subtle rounded-lg space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    Compare: Milestone Loop vs Single-Prompt Loop
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-3 bg-bg-secondary/40 border border-border-subtle/50 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-text-primary block">Decision Density</span>
                        <div className="flex items-center justify-between text-text-muted text-[11px] pt-1">
                            <span>Milestones:</span>
                            <span className="font-semibold text-green-500">Denser (10/hr)</span>
                        </div>
                        <div className="flex items-center justify-between text-text-muted text-[11px]">
                            <span>Single-Prompt:</span>
                            <span className="font-medium text-red-500">Accidental</span>
                        </div>
                    </div>
                    
                    <div className="p-3 bg-bg-secondary/40 border border-border-subtle/50 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-text-primary block">Verification Effort</span>
                        <div className="flex items-center justify-between text-text-muted text-[11px] pt-1">
                            <span>Milestones:</span>
                            <span className="font-semibold text-green-500">Seconds by eye</span>
                        </div>
                        <div className="flex items-center justify-between text-text-muted text-[11px]">
                            <span>Single-Prompt:</span>
                            <span className="font-medium text-red-500">Hours of debugging</span>
                        </div>
                    </div>

                    <div className="p-3 bg-bg-secondary/40 border border-border-subtle/50 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-text-primary block">Git History Quality</span>
                        <div className="flex items-center justify-between text-text-muted text-[11px] pt-1">
                            <span>Milestones:</span>
                            <span className="font-semibold text-green-500">Narrative Log</span>
                        </div>
                        <div className="flex items-center justify-between text-text-muted text-[11px]">
                            <span>Single-Prompt:</span>
                            <span className="font-medium text-red-500">Commit streams</span>
                        </div>
                    </div>

                    <div className="p-3 bg-bg-secondary/40 border border-border-subtle/50 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-text-primary block">Risk of Opacity</span>
                        <div className="flex items-center justify-between text-text-muted text-[11px] pt-1">
                            <span>Milestones:</span>
                            <span className="font-semibold text-green-500">Zero</span>
                        </div>
                        <div className="flex items-center justify-between text-text-muted text-[11px]">
                            <span>Single-Prompt:</span>
                            <span className="font-medium text-red-500">Very High</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
