"use client";

import React, { useState } from "react";

export function InfrastructureIllustration() {
    const [network, setNetwork] = useState<"online" | "offline">("online");
    const [channel, setChannel] = useState<"email" | "whatsapp">("whatsapp");
    const [device, setDevice] = useState<"desktop" | "mobile">("mobile");
    const [bookingState, setBookingState] = useState<"idle" | "booking" | "complete">("idle");
    const [localClients, setLocalClients] = useState([
        { id: 1, name: "Kojo Mensah", time: "10:30 AM", service: "Skin Fade", status: "confirmed" },
        { id: 2, name: "Ama Serwaa", time: "12:00 PM", service: "Wash & Dye", status: "pending" },
    ]);

    const handleAddBooking = () => {
        setBookingState("booking");
        setTimeout(() => {
            if (network === "online" || device === "mobile") {
                setLocalClients(prev => [
                    ...prev,
                    { id: Date.now(), name: "Yaw Boateng", time: "3:00 PM", service: "Beard Trim", status: "queued" }
                ]);
            }
            setBookingState("complete");
            setTimeout(() => setBookingState("idle"), 2500);
        }, 800);
    };

    return (
        <div className="border border-border-subtle rounded-lg bg-bg-secondary p-6 font-sans">
            {/* Top Control Bar */}
            <div className="mb-6 pb-6 border-b border-border-subtle flex flex-wrap gap-6 items-center justify-between">
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-1">
                        Local Adoption Simulator
                    </h4>
                    <p className="text-xs text-text-muted">
                        Toggle environmental parameters to see how software performs on an Accra barbershop floor.
                    </p>
                </div>
                
                {/* Configuration Controls */}
                <div className="flex flex-wrap gap-4 text-xs">
                    {/* Network Toggle */}
                    <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Network Connection</span>
                        <div className="flex bg-bg-primary rounded p-0.5 border border-border-subtle">
                            <button
                                onClick={() => setNetwork("online")}
                                className={`px-2.5 py-1 rounded transition-colors font-medium ${
                                    network === "online" ? "bg-accent text-bg" : "text-text-muted hover:text-text-primary"
                                }`}
                            >
                                Online
                            </button>
                            <button
                                onClick={() => setNetwork("offline")}
                                className={`px-2.5 py-1 rounded transition-colors font-medium ${
                                    network === "offline" ? "bg-accent text-bg" : "text-text-muted hover:text-text-primary"
                                }`}
                            >
                                Offline
                            </button>
                        </div>
                    </div>

                    {/* Outreach toggle */}
                    <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Outreach Channel</span>
                        <div className="flex bg-bg-primary rounded p-0.5 border border-border-subtle">
                            <button
                                onClick={() => setChannel("email")}
                                className={`px-2.5 py-1 rounded transition-colors font-medium ${
                                    channel === "email" ? "bg-accent text-bg" : "text-text-muted hover:text-text-primary"
                                }`}
                            >
                                Email
                            </button>
                            <button
                                onClick={() => setChannel("whatsapp")}
                                className={`px-2.5 py-1 rounded transition-colors font-medium ${
                                    channel === "whatsapp" ? "bg-accent text-bg" : "text-text-muted hover:text-text-primary"
                                }`}
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Visual Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Legacy Enterprise SaaS Panel */}
                <div className="border border-border-subtle rounded-lg bg-bg-primary p-4 flex flex-col relative overflow-hidden min-h-[360px]">
                    <div className="flex items-center justify-between mb-4 border-b border-border-subtle pb-2">
                        <span className="text-xs font-bold tracking-wider text-text-muted uppercase">Standard Enterprise SaaS</span>
                        <span className="text-[10px] px-2 py-0.5 rounded border border-red-500/20 text-red-500 bg-red-500/5 font-semibold">
                            Friction: High
                        </span>
                    </div>

                    {/* Offline Block Mask */}
                    {network === "offline" && (
                        <div className="absolute inset-0 bg-bg-primary/95 flex flex-col items-center justify-center p-6 text-center z-10 animate-fade-in">
                            <svg className="w-8 h-8 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 5 5 0 011.414-3.536m0 0l2.829 2.829m-4.243 2.829L3 21M9.879 9.879a3 3 0 014.242 0M9.879 9.879l2.829 2.829" />
                            </svg>
                            <h5 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1">
                                Connection Required
                            </h5>
                            <p className="text-[11px] text-text-muted max-w-[200px]">
                                Could not load dashboard. Reconnect to access scheduling and calendar operations.
                            </p>
                        </div>
                    )}

                    {/* Complex SaaS Dashboard Simulator */}
                    <div className="flex-1 flex flex-col text-[11px]">
                        <div className="mb-3 bg-bg-secondary p-2.5 rounded border border-border-subtle space-y-1">
                            <div className="font-bold text-text-primary text-[10px] uppercase">Desktop Administration Portal</div>
                            <div className="text-text-muted text-[10px]">Warning: Render scaled down for mobile screen width</div>
                        </div>

                        {/* Booking List Table mock */}
                        <div className="border border-border-subtle rounded overflow-hidden mb-3">
                            <div className="grid grid-cols-3 bg-bg-secondary p-1.5 border-b border-border-subtle font-bold text-text-muted">
                                <span>Client</span>
                                <span>Service</span>
                                <span>Outreach</span>
                            </div>
                            <div className="p-1.5 space-y-1 bg-bg-primary text-text-muted">
                                <div className="grid grid-cols-3 border-b border-border-subtle/30 pb-1">
                                    <span className="font-semibold text-text-primary">Kojo Mensah</span>
                                    <span>Skin Fade</span>
                                    <span className="text-red-500">Email (Bounced)</span>
                                </div>
                                <div className="grid grid-cols-3">
                                    <span className="font-semibold text-text-primary">Ama Serwaa</span>
                                    <span>Wash & Dye</span>
                                    <span className="text-yellow-500">Unread</span>
                                </div>
                            </div>
                        </div>

                        {/* Friction checklist */}
                        <div className="mt-auto pt-3 border-t border-border-subtle space-y-2 text-[10px] text-text-muted">
                            <div className="flex justify-between">
                                <span>Requires Laptop/Desktop Screen:</span>
                                <span className="font-medium text-text-primary">Yes (Layout breaks on mobile)</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Confirmations:</span>
                                <span className="font-medium text-text-primary">
                                    {channel === "email" ? "Email (Read rate ~12%)" : "SMS/WhatsApp Gateway API (High cost)"}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Offline Behavior:</span>
                                <span className="font-medium text-red-500">Total operational failure</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Buzzba Context-Optimized Panel */}
                <div className="border border-border-subtle rounded-lg bg-bg-primary p-4 flex flex-col relative overflow-hidden min-h-[360px]">
                    <div className="flex items-center justify-between mb-4 border-b border-border-subtle pb-2">
                        <span className="text-xs font-bold tracking-wider text-text-muted uppercase">Buzzba (Mobile-First)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded border border-green-500/20 text-green-500 bg-green-500/5 font-semibold">
                            Friction: Zero
                        </span>
                    </div>

                    {/* Local scheduler app mock */}
                    <div className="flex-1 flex flex-col text-[11px]">
                        {/* Offline banner */}
                        {network === "offline" && (
                            <div className="mb-2 bg-yellow-500/5 border border-yellow-500/20 text-yellow-500 rounded p-1.5 text-[10px] text-center font-medium animate-pulse">
                                Offline Mode active. Work is saved locally.
                            </div>
                        )}

                        {/* Top App Header */}
                        <div className="flex items-center justify-between mb-3 bg-bg-secondary p-2 rounded border border-border-subtle">
                            <span className="font-bold text-[10px] uppercase text-text-primary">Cybah Haircut Schedule</span>
                            <span className="text-[10px] font-semibold text-accent">Buzzba</span>
                        </div>

                        {/* Schedule List */}
                        <div className="space-y-1.5 mb-3 flex-1 overflow-y-auto max-h-[140px]">
                            {localClients.map(client => (
                                <div 
                                    key={client.id} 
                                    className="p-2 border border-border-subtle/50 rounded bg-bg-secondary/40 flex justify-between items-center"
                                >
                                    <div>
                                        <div className="font-bold text-text-primary">{client.name}</div>
                                        <div className="text-[10px] text-text-muted">{client.service} · {client.time}</div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
                                            client.status === "confirmed" 
                                                ? "border border-green-500/20 text-green-500 bg-green-500/5" 
                                                : client.status === "queued"
                                                ? "border border-yellow-500/20 text-yellow-500 bg-yellow-500/5"
                                                : "border border-border-subtle text-text-muted"
                                        }`}>
                                            {client.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp Outreach preview */}
                        {channel === "whatsapp" && (
                            <div className="mb-3 p-2 bg-bg-secondary border border-border-subtle rounded space-y-1 text-[10px]">
                                <div className="font-bold text-accent uppercase text-[9px]">Direct WhatsApp Flow</div>
                                <div className="text-text-muted italic border-l border-accent/40 pl-2">
                                    "Hello, this is Cybah Haircut. Confirming your barber booking for tomorrow at 2:00 PM."
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="mt-auto space-y-2">
                            <button
                                onClick={handleAddBooking}
                                disabled={bookingState === "booking"}
                                className="w-full bg-text-primary text-bg font-bold py-2 rounded text-center transition-all hover:opacity-90 disabled:opacity-50"
                            >
                                {bookingState === "booking" 
                                    ? "Saving locally..." 
                                    : bookingState === "complete"
                                    ? "Booking saved successfully" 
                                    : "+ Quick Book Barber"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Interactive Insights Banner */}
            <div className="mt-6 p-4 rounded-lg bg-bg-primary border border-border-subtle text-xs">
                <h5 className="font-bold text-text-primary uppercase text-[10px] tracking-wider mb-2">
                    Simulator Findings
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-text-muted">
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold text-text-primary">Device Readiness</div>
                        <p className="text-[11px] leading-relaxed">
                            {device === "mobile" 
                                ? "Correct. Barbers rely on smartphones. Desktop-based tools result in zero adoption."
                                : "Desktop SaaS interface fails to fit on busy barber shop floor operations."}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold text-text-primary">Connectivity Fault Tolerance</div>
                        <p className="text-[11px] leading-relaxed">
                            {network === "offline"
                                ? "Buzzba saves booking data into offline indexedDB storage, syncing later. Standard SaaS crashes instantly."
                                : "Network is active, but offline redundancy is mandatory for continuous power cuts."}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold text-text-primary">Engagement Rate</div>
                        <p className="text-[11px] leading-relaxed">
                            {channel === "whatsapp"
                                ? "WhatsApp has a 98% opening rate in Ghana. Standard email confirmations have less than 15%."
                                : "Email outreach is highly ineffective in informal business segments."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
