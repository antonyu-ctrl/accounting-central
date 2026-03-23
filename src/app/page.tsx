"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const apps = [
  {
    name: "ARMP",
    subtitle: "Accounting Rule Management Platform",
    description:
      "Manage accounting rules, schemas, transactions, and journal entries with AI-powered suggestions.",
    url: "http://43.203.179.163/login",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "Close Tracker",
    subtitle: "Month-End Closing Time Tracker",
    description:
      "Track month-end closing cycles, manage tasks, monitor employee performance, and view analytics.",
    url: "https://closing-timetracker.vercel.app/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: "AP Module",
    subtitle: "Accounts Payable",
    description:
      "Manage vendors, invoices, purchase orders, payments, expense reports, and accruals.",
    url: "https://ap-module.vercel.app/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "Loss Provision",
    subtitle: "Loss Allowance Calculation System",
    description:
      "Calculate loss allowances, manage segments, run provisions, and perform back-testing analysis.",
    url: "https://loss-provision.vercel.app/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<(typeof apps)[0] | null>(
    null
  );

  const handleLaunch = () => {
    if (selectedApp) {
      window.open(selectedApp.url, "_blank", "noopener,noreferrer");
      setSelectedApp(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-zinc-900">
              Accounting Central
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <div className="mx-auto w-full max-w-7xl px-6 pt-12 pb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Welcome to Accounting Central
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Access all accounting operations from one place. Select an
            application below to get started.
          </p>
        </div>

        {/* App Cards Grid */}
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map((app) => (
              <button
                key={app.name}
                type="button"
                onClick={() => setSelectedApp(app)}
                className="group block cursor-pointer text-left"
              >
                <Card className="flex h-64 flex-col transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.15)] hover:ring-zinc-300">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white">
                        {app.icon}
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-zinc-900">
                          {app.name}
                        </CardTitle>
                        <CardDescription className="mt-0.5 text-xs text-zinc-400">
                          {app.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-center text-sm leading-relaxed text-zinc-600">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          <p className="text-xs text-zinc-400">Accounting Central</p>
          <p className="text-xs text-zinc-400">Enablement Team</p>
        </div>
      </footer>

      {/* Launch Confirmation Dialog */}
      <Dialog
        open={!!selectedApp}
        onOpenChange={(open) => !open && setSelectedApp(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Launch {selectedApp?.name}?</DialogTitle>
            <DialogDescription>
              This will open {selectedApp?.name} ({selectedApp?.subtitle}) in a
              new browser tab.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button variant="outline" onClick={() => setSelectedApp(null)}>
              Cancel
            </Button>
            <Button onClick={handleLaunch}>Yes, Launch</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
