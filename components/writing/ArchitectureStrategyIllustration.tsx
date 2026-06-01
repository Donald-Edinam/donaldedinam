"use client";

import { useState } from "react";

type ArchMode = "coupled" | "layered";
type PivotAction = "none" | "api" | "cache";

export function ArchitectureStrategyIllustration() {
    const [mode, setMode] = useState<ArchMode>("layered");
    const [pivot, setPivot] = useState<PivotAction>("none");
    const [isSimulating, setIsSimulating] = useState(false);

    const runSimulation = (action: PivotAction) => {
        setPivot(action);
        setIsSimulating(true);
        setTimeout(() => {
            setIsSimulating(false);
        }, 1500);
    };

    return (
        <div className="my-10 p-6 border border-border-subtle rounded-xl bg-bg-secondary space-y-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-text-primary">Interactive Demo: Code Architecture vs Pivot Speed</h3>
                <p className="text-sm text-text-muted">
                    Choose an architecture type, then trigger a product pivot (e.g., swapping a REST API for GraphQL, or adding offline caching). Observe how changes propagate.
                </p>
            </div>

            {/* Architecture Selector */}
            <div className="flex border-b border-border-subtle">
                <button
                    onClick={() => {
                        setMode("layered");
                        setPivot("none");
                    }}
                    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                        mode === "layered"
                            ? "border-accent text-accent"
                            : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                >
                    Layered & Modular (Clean Code)
                </button>
                <button
                    onClick={() => {
                        setMode("coupled");
                        setPivot("none");
                    }}
                    className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${
                        mode === "coupled"
                            ? "border-accent text-accent"
                            : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                >
                    Tightly Coupled (Spaghetti)
                </button>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => runSimulation("api")}
                    disabled={isSimulating}
                    className="px-3 py-2 text-xs font-bold rounded bg-bg-primary border border-border-subtle hover:border-accent text-text-primary transition-all disabled:opacity-50"
                >
                    Pivot: Migrate REST ➔ GraphQL
                </button>
                <button
                    onClick={() => runSimulation("cache")}
                    disabled={isSimulating}
                    className="px-3 py-2 text-xs font-bold rounded bg-bg-primary border border-border-subtle hover:border-accent text-text-primary transition-all disabled:opacity-50"
                >
                    Pivot: Add Offline Caching
                </button>
            </div>

            {/* Simulation Diagram Area */}
            <div className="p-6 bg-bg-primary border border-border-subtle rounded-lg flex flex-col justify-between min-h-80 relative overflow-hidden">
                {/* Simulation overlay alerts */}
                {isSimulating && mode === "coupled" && (
                    <div className="absolute inset-0 bg-[#e05252]0a border border-[#e05252] animate-pulse flex items-center justify-center pointer-events-none">
                        <div className="bg-[#e05252] text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow">
                            Cascade Breakages Detected
                        </div>
                    </div>
                )}
                {isSimulating && mode === "layered" && (
                    <div className="absolute inset-0 bg-[#4caf50]05 border border-[#4caf50] animate-pulse flex items-center justify-center pointer-events-none">
                        <div className="bg-[#4caf50] text-[#1e1e1e] px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow">
                            Clean Decoupled Injection Active
                        </div>
                    </div>
                )}

                {/* Architecture Nodes Rendering */}
                <div className="flex flex-col md:flex-row justify-around items-center gap-6 py-4">
                    {mode === "layered" ? (
                        <>
                            {/* Layered Nodes */}
                            <div 
                                className={`w-36 p-4 rounded-lg border text-center transition-all duration-300 ${
                                    isSimulating && pivot === "api"
                                        ? "bg-[#4caf50]2b border-[#4caf50] scale-105"
                                        : "bg-bg-secondary border-border-subtle"
                                }`}
                            >
                                <div className="text-[10px] font-mono uppercase text-text-muted">Data Adapter</div>
                                <div className="text-xs font-bold mt-1 text-text-primary">API Service</div>
                            </div>

                            <div className="text-text-muted font-bold text-lg">➔</div>

                            <div 
                                className={`w-36 p-4 rounded-lg border text-center transition-all duration-300 ${
                                    isSimulating && pivot === "cache"
                                        ? "bg-[#4caf50]2b border-[#4caf50] scale-105"
                                        : "bg-bg-secondary border-border-subtle"
                                }`}
                            >
                                <div className="text-[10px] font-mono uppercase text-text-muted">State Layer</div>
                                <div className="text-xs font-bold mt-1 text-text-primary">Store / Caching</div>
                            </div>

                            <div className="text-text-muted font-bold text-lg">➔</div>

                            <div className="w-36 p-4 rounded-lg border border-border-subtle bg-bg-secondary text-center">
                                <div className="text-[10px] font-mono uppercase text-text-muted">Presentation</div>
                                <div className="text-xs font-bold mt-1 text-text-primary">Pure UI View</div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Coupled spaghetti representation */}
                            <div 
                                className={`w-full max-w-md p-6 rounded-lg border text-center transition-all duration-300 relative ${
                                    isSimulating
                                        ? "bg-[#e05252]1a border-[#e05252] scale-98"
                                        : "bg-bg-secondary border-border-subtle"
                                }`}
                            >
                                <div className="text-[10px] font-mono uppercase text-text-muted mb-2">Monolithic Spaghetti Component</div>
                                <div className="text-xs font-bold text-text-primary">Single File (API + Storage + State + JSX Rendering)</div>
                                
                                {/* Inner connections demonstrating tangled code */}
                                <div className="mt-4 flex justify-around gap-2 text-[10px] font-mono text-text-muted">
                                    <div className="p-2 border border-dashed border-[#e05252]50 rounded bg-[#e05252]05">API Fetch</div>
                                    <div className="p-2 border border-dashed border-[#e05252]50 rounded bg-[#e05252]05">Local Storage</div>
                                    <div className="p-2 border border-dashed border-[#e05252]50 rounded bg-[#e05252]05">View Render</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Simulation Logs / Metrics */}
                <div className="mt-6 p-4 rounded bg-bg-secondary border border-border-subtle font-mono text-[11px] space-y-1">
                    <div className="text-text-muted uppercase text-[9px] font-bold tracking-wider mb-1">Architecture Diagnostics</div>
                    
                    {pivot === "none" && (
                        <div className="text-text-muted">Select a pivot action above to start the simulator.</div>
                    )}

                    {pivot !== "none" && !isSimulating && (
                        mode === "layered" ? (
                            <div className="space-y-1">
                                <div className="text-[#4caf50] font-bold">Pivot Successful (Modular Integration)</div>
                                <div className="text-text-primary">→ Scope: Replaced API adapter with GraphQL resolver.</div>
                                <div className="text-text-primary">→ UI Component Impact: 0 files modified.</div>
                                <div className="text-text-primary">→ Time to Market: 2 hours.</div>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                <div className="text-[#e05252] font-bold">Pivot Failed (Regression Risks)</div>
                                <div className="text-text-primary">→ Scope: Rewriting UI file to support GraphQL fetch parameters.</div>
                                <div className="text-text-primary">→ UI Component Impact: 1 monolithic file completely rewritten.</div>
                                <div className="text-text-primary">→ Time to Market: 4 days (required testing regressions).</div>
                            </div>
                        )
                    )}

                    {isSimulating && (
                        <div className="text-text-muted animate-pulse">Running architectural analysis...</div>
                    )}
                </div>
            </div>
        </div>
    );
}
