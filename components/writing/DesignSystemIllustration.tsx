"use client";

import { useState } from "react";

export function DesignSystemIllustration() {
    const [spacing, setSpacing] = useState<"8" | "16" | "24">("16");
    const [radius, setRadius] = useState<"0" | "8" | "24">("8");
    const [accentColor, setAccentColor] = useState<"amber" | "blue">("amber");

    const accentHex = accentColor === "amber" ? "#ffb347" : "#007aff";

    return (
        <div className="my-10 p-6 border border-border-subtle rounded-xl bg-bg-secondary space-y-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-text-primary">Interactive Demo: Decision-First Token Flows</h3>
                <p className="text-sm text-text-muted">
                    Toggle spacing, corner radius, and accent theme. See how design-system decisions propagate gracefully compared to ad-hoc styling.
                </p>
            </div>

            {/* Token Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-bg-primary border border-border-subtle">
                {/* Spacing Selector */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Spacing Scale</label>
                    <div className="flex gap-2">
                        {(["8", "16", "24"] as const).map((s) => (
                            <button
                                key={s}
                                onClick={() => setSpacing(s)}
                                className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                                    spacing === s
                                        ? "bg-text-primary text-bg-primary border-transparent font-medium"
                                        : "border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
                                }`}
                            >
                                {s}px
                            </button>
                        ))}
                    </div>
                </div>

                {/* Radius Selector */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Corner Radius</label>
                    <div className="flex gap-2">
                        {(["0", "8", "24"] as const).map((r) => (
                            <button
                                key={r}
                                onClick={() => setRadius(r)}
                                className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                                    radius === r
                                        ? "bg-text-primary text-bg-primary border-transparent font-medium"
                                        : "border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
                                }`}
                            >
                                {r === "0" ? "Sharp" : r === "8" ? "Medium" : "Full"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Accent Color Selector */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Accent Theme</label>
                    <div className="flex gap-2">
                        {(["amber", "blue"] as const).map((c) => (
                            <button
                                key={c}
                                onClick={() => setAccentColor(c)}
                                className={`flex-1 py-1.5 text-xs rounded border capitalize transition-colors ${
                                    accentColor === c
                                        ? "bg-text-primary text-bg-primary border-transparent font-medium"
                                        : "border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comparison Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Component-First Block */}
                <div className="border border-border-subtle rounded-lg p-5 flex flex-col justify-between h-72 relative overflow-hidden bg-bg-primary">
                    <div className="absolute top-0 left-0 right-0 bg-[#e05252] text-white text-[10px] uppercase font-bold tracking-wider py-1 px-3 text-center">
                        Component-First (Hardcoded Values)
                    </div>
                    
                    <div className="space-y-3 mt-4">
                        {/* Spacing & size remains static because it doesn't read tokens */}
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold bg-[#333] text-gray-400 px-2 py-0.5 rounded">
                                Category
                            </span>
                            <span className="text-xs text-text-muted">Static Date</span>
                        </div>
                        <h4 className="text-md font-bold text-text-primary">Ad-hoc Hardcoded Layout</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                            This layout has static margins and values. Swapping variables fails because elements do not inherit unified token values.
                        </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-[#2a2a2a]">
                        <span className="text-xs font-semibold text-text-muted">$99.99</span>
                        <button 
                            className="bg-gray-700 text-white text-xs px-3 py-1.5 font-medium cursor-not-allowed"
                            style={{ borderRadius: "4px" }}
                            disabled
                        >
                            Static CTA
                        </button>
                    </div>
                </div>

                {/* Decision-First Block */}
                <div 
                    className="border flex flex-col justify-between h-72 relative overflow-hidden transition-all duration-300 bg-bg-primary"
                    style={{
                        borderColor: accentHex,
                        borderRadius: `${radius}px`,
                        padding: `${spacing}px`,
                    }}
                >
                    <div 
                        className="absolute top-0 left-0 right-0 text-[10px] uppercase font-bold tracking-wider py-1 px-3 text-center transition-colors duration-300"
                        style={{
                            backgroundColor: accentHex,
                            color: accentColor === "amber" ? "#1e1e1e" : "#fff",
                        }}
                    >
                        Decision-First (Token-based Flow)
                    </div>
                    
                    <div 
                        className="transition-all duration-300"
                        style={{
                            marginTop: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: `${parseInt(spacing) / 2}px`
                        }}
                    >
                        <div className="flex justify-between items-start">
                            <span 
                                className="text-[10px] font-bold px-2.5 py-0.5 transition-colors duration-300"
                                style={{
                                    backgroundColor: `${accentHex}1a`,
                                    color: accentHex,
                                    borderRadius: `${parseInt(radius) / 2}px`
                                }}
                            >
                                Tokenized
                            </span>
                            <span className="text-xs text-text-muted">Dynamic Scale</span>
                        </div>
                        <h4 className="text-md font-bold text-text-primary">Fluid Dynamic Interface</h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                            This component consumes local design tokens. Changing scales propagates spacing, roundness, and theme changes instantly.
                        </p>
                    </div>

                    <div 
                        className="flex justify-between items-center border-t transition-all duration-300"
                        style={{
                            borderColor: `${accentHex}2b`,
                            paddingTop: `${parseInt(spacing) / 2}px`,
                        }}
                    >
                        <span className="text-xs font-semibold text-text-primary">$99.99</span>
                        <button 
                            className="text-xs px-4 py-2 font-bold transition-all duration-300 shadow-sm"
                            style={{
                                backgroundColor: accentHex,
                                color: accentColor === "amber" ? "#1e1e1e" : "#fff",
                                borderRadius: `${parseInt(radius) / 2}px`
                            }}
                        >
                            Dynamic CTA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
