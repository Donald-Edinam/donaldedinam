"use client";

import { useState, useEffect } from "react";

type ActionState = "idle" | "loading" | "confirming" | "success";

export function BoringInterfaceIllustration() {
    // Obvious states
    const [obviousState, setObviousState] = useState<ActionState>("idle");
    const [obviousTime, setObviousTime] = useState<number | null>(null);

    // Clever states
    const [cleverState, setCleverState] = useState<ActionState>("idle");
    const [cleverStep, setCleverStep] = useState<number>(0);
    const [cleverTime, setCleverTime] = useState<number | null>(null);
    const [swipeProgress, setSwipeProgress] = useState(0);

    // Reset helper
    const resetPlayground = () => {
        setObviousState("idle");
        setObviousTime(null);
        setCleverState("idle");
        setCleverStep(0);
        setCleverTime(null);
        setSwipeProgress(0);
    };

    // Obvious Submit flow
    const handleObviousSubmit = () => {
        const start = performance.now();
        setObviousState("loading");
        
        setTimeout(() => {
            setObviousState("success");
            setObviousTime(Math.round(performance.now() - start));
        }, 300); // 300ms standard loading duration
    };

    // Clever Submit flows
    const handleCleverStart = () => {
        setCleverState("loading");
        // Phase 1: Wait for a complex "calculating design pixels" load
        setTimeout(() => {
            setCleverStep(1); // Show Swipe to Confirm
            setCleverState("confirming");
        }, 1200);
    };

    // Handle Swipe completion
    const handleSwipeSubmit = () => {
        setCleverState("loading");
        setCleverStep(2);
        // Phase 2: Loading after confirmation
        setTimeout(() => {
            setCleverState("success");
            setCleverTime(1200 + 800 + 600); // simulated actual time elapsed
        }, 800);
    };

    return (
        <div className="my-10 p-6 border border-border-subtle rounded-xl bg-bg-secondary space-y-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-text-primary">Interactive Demo: The "Cleverness" Tax</h3>
                <p className="text-sm text-text-muted">
                    Compare an Obvious Interface (instant, predictable) against a Clever Interface (unnecessary friction, slow feedback). Try executing a submit action on both.
                </p>
            </div>

            {/* Metrics Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-bg-primary rounded-lg border border-border-subtle text-center">
                <div>
                    <div className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Obvious Time</div>
                    <div className="text-lg font-bold text-[#4caf50]">
                        {obviousTime ? `${obviousTime}ms` : "—"}
                    </div>
                </div>
                <div>
                    <div className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Clever Time</div>
                    <div className="text-lg font-bold text-[#ffb347]">
                        {cleverTime ? `~${cleverTime}ms` : "—"}
                    </div>
                </div>
                <div>
                    <div className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Obvious Cognitive Load</div>
                    <div className="text-lg font-bold text-text-primary">
                        {obviousState === "success" ? "Zero" : "—"}
                    </div>
                </div>
                <div>
                    <div className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Clever Frustration</div>
                    <div className="text-lg font-bold text-[#e05252]">
                        {cleverState === "success" ? "High (95%)" : "—"}
                    </div>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Obvious UI */}
                <div className="border border-border-subtle rounded-lg p-5 flex flex-col justify-between h-72 bg-bg-primary relative">
                    <div className="absolute top-0 left-0 right-0 bg-[#4caf50] text-[#1e1e1e] text-[10px] uppercase font-bold tracking-wider py-1 px-3 text-center rounded-t-lg">
                        Obvious & Boring
                    </div>

                    <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-bold text-text-primary">Standard Form Submission</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                            Clicking the button provides immediate visual feedback. The action completes quickly, adhering to standard expectations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {obviousState === "success" ? (
                            <div className="flex items-center justify-center gap-2 p-3 bg-[#4caf50]1a text-[#4caf50] border border-[#4caf50]2b rounded text-xs font-semibold">
                                <svg className="w-4 h-4 animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Submission Complete!
                            </div>
                        ) : (
                            <button
                                onClick={handleObviousSubmit}
                                disabled={obviousState === "loading"}
                                className={`w-full py-2.5 rounded text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                                    obviousState === "loading"
                                        ? "bg-gray-800 text-gray-400 border border-gray-700 cursor-wait"
                                        : "bg-text-primary text-bg-primary hover:opacity-90"
                                }`}
                            >
                                {obviousState === "loading" ? (
                                    <>
                                        <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Action"
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {/* Clever UI */}
                <div className="border border-border-subtle rounded-lg p-5 flex flex-col justify-between h-72 bg-bg-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 bg-[#ffb347] text-[#1e1e1e] text-[10px] uppercase font-bold tracking-wider py-1 px-3 text-center rounded-t-lg">
                        "Clever" & Over-Designed
                    </div>

                    <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-bold text-text-primary">Interactive Custom Checkout</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                            Uses custom loading timers, non-standard confirm dialogs, and animations that delay tasks.
                        </p>
                    </div>

                    {/* Clever interactive state machine */}
                    <div className="flex flex-col gap-3">
                        {cleverState === "idle" && (
                            <button
                                onClick={handleCleverStart}
                                className="w-full py-2.5 bg-gradient-to-r from-[#ffb347] to-[#ff8c00] text-[#1e1e1e] text-xs font-bold rounded animate-pulse hover:brightness-110 transition-all"
                            >
                                Initiate Creative Submission
                            </button>
                        )}

                        {cleverState === "loading" && cleverStep === 0 && (
                            <div className="flex flex-col items-center gap-2 p-3 bg-gray-900 border border-border-subtle rounded text-xs text-text-muted">
                                <div className="w-6 h-6 border-2 border-[#ffb347] border-t-transparent rounded-full animate-spin" />
                                <span className="text-[10px] font-mono">Calibrating UX delight coefficients...</span>
                            </div>
                        )}

                        {cleverState === "confirming" && cleverStep === 1 && (
                            <div className="p-3 bg-gray-900 border border-[#ffb347]2b rounded flex flex-col gap-2">
                                <label className="text-[9px] uppercase font-bold text-[#ffb347] text-center">
                                    Slide slider fully right to confirm
                                </label>
                                <div className="relative h-8 bg-gray-800 rounded-md overflow-hidden flex items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={swipeProgress}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value);
                                            setSwipeProgress(val);
                                            if (val >= 100) {
                                                handleSwipeSubmit();
                                            }
                                        }}
                                        className="absolute inset-0 w-full h-full opacity-100 cursor-pointer accent-[#ffb347]"
                                    />
                                    <div 
                                        className="h-full bg-[#ffb347] opacity-20 pointer-events-none transition-all duration-75"
                                        style={{ width: `${swipeProgress}%` }}
                                    />
                                    <span className="w-full text-center text-[10px] text-text-muted select-none pointer-events-none">
                                        {swipeProgress >= 100 ? "Validating..." : `Confirming (${swipeProgress}%)`}
                                    </span>
                                </div>
                            </div>
                        )}

                        {cleverState === "loading" && cleverStep === 2 && (
                            <div className="flex flex-col items-center gap-2 p-3 bg-gray-900 border border-border-subtle rounded text-xs text-text-muted">
                                <div className="w-6 h-6 border-2 border-text-primary border-t-transparent rounded-full animate-bounce" />
                                <span className="text-[10px]">Processing signature tokens...</span>
                            </div>
                        )}

                        {cleverState === "success" && (
                            <div className="relative p-2 bg-[#ffb347]1a border border-[#ffb347] rounded text-center">
                                <div className="text-[11px] font-bold text-[#ffb347] mb-1">
                                    Processed Successfully
                                </div>
                                <p className="text-[9px] text-text-muted leading-tight">
                                    Your action finished loading after multiple hops and validations.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Reset Button */}
            {(obviousState === "success" || cleverState === "success") && (
                <div className="flex justify-center">
                    <button
                        onClick={resetPlayground}
                        className="px-4 py-2 text-xs text-text-muted hover:text-text-primary border border-border-subtle rounded hover:bg-bg-primary transition-colors"
                    >
                        Reset Playground
                    </button>
                </div>
            )}
        </div>
    );
}
