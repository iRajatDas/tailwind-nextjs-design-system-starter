"use client";
import React, { useState } from "react";
import { Palette, Type, Layers, Move } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DesignSystemShowcase = () => {
  const [activeSection, setActiveSection] = useState("typography");

  const sections = [
    {
      name: "typography",
      icon: Type,
      render: () => (
        <div className="space-y-6">
          <h2 className="responsive-text-4xl font-bold text-foreground">
            Typography Showcase
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-foreground-muted">Responsive Text Sizes</h3>
              <div className="space-y-2">
                {[
                  { class: "responsive-text-xs", text: "Extra Small Text" },
                  { class: "responsive-text-sm", text: "Small Text" },
                  { class: "responsive-text-base", text: "Base Text" },
                  { class: "responsive-text-lg", text: "Large Text" },
                  { class: "responsive-text-xl", text: "Extra Large Text" },
                  { class: "responsive-text-2xl", text: "Heading 2XL" },
                  { class: "responsive-text-3xl", text: "Heading 3XL" },
                  { class: "responsive-text-4xl", text: "Heading 4XL" },
                  { class: "responsive-text-5xl", text: "Heading 5XL" },
                ].map(({ class: cls, text }) => (
                  <div
                    key={cls}
                    className="flex md:items-center max-md:flex-col-reverse gap-1"
                  >
                    <span className={cn("whitespace-nowrap mr-4", cls)}>
                      {text}
                    </span>
                    <code className="text-xs text-foreground-subtle">
                      {cls}
                    </code>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground-muted">Typography Variants</h3>
              <div className="space-y-2">
                <p className="text-foreground">Default Foreground Text</p>
                <p className="text-foreground-muted">Muted Foreground Text</p>
                <p className="text-foreground-subtle">Subtle Foreground Text</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "colors",
      icon: Palette,
      render: () => (
        <div className="space-y-6">
          <h2 className="responsive-text-4xl font-bold text-foreground">
            Color Palette
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Background",
                colors: [
                  {
                    name: "Default",
                    variable: "background",
                    className: "bg-background",
                  },
                  {
                    name: "Foreground",
                    variable: "background-foreground",
                    className: "bg-background-foreground",
                  },
                  {
                    name: "Muted",
                    variable: "background-muted",
                    className: "bg-background-muted",
                  },
                  {
                    name: "Subtle",
                    variable: "background-subtle",
                    className: "bg-background-subtle",
                  },
                ],
              },
              {
                category: "Brand",
                colors: [
                  {
                    name: "Primary",
                    variable: "primary",
                    className: "bg-primary",
                  },
                  {
                    name: "Primary Hover",
                    variable: "primary-hover",
                    className: "bg-primary-hover",
                  },
                  {
                    name: "Secondary",
                    variable: "secondary",
                    className: "bg-secondary",
                  },
                  {
                    name: "Secondary Hover",
                    variable: "secondary-hover",
                    className: "bg-secondary-hover",
                  },
                ],
              },
              {
                category: "State",
                colors: [
                  {
                    name: "Success",
                    variable: "success",
                    className: "bg-success",
                  },
                  {
                    name: "Warning",
                    variable: "warning",
                    className: "bg-warning",
                  },
                  {
                    name: "Destructive",
                    variable: "destructive",
                    className: "bg-destructive",
                  },
                  {
                    name: "Accent",
                    variable: "accent",
                    className: "bg-accent",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-foreground-muted">
                  {group.category} Colors
                </h3>
                <div className="space-y-2">
                  {group.colors.map((color) => {
                    return (
                      <div
                        key={color.name}
                        className={cn(
                          "rounded-md flex items-center p-4",
                          {
                            border: group.category === "Background",
                          },
                          color.className
                        )}
                      >
                        <div className="mr-4 font-medium text-foreground">
                          {color.name}
                        </div>
                        <code className="text-xs text-foreground-muted">
                          {color.variable}
                        </code>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "shadows",
      icon: Layers,
      render: () => (
        <div className="space-y-6">
          <h2 className="responsive-text-4xl font-bold text-foreground">
            Shadow System
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Extra Small", value: "shadow-xs" },
              { name: "Small", value: "shadow-sm" },
              { name: "Default", value: "shadow" },
              { name: "Medium", value: "shadow-md" },
              { name: "Large", value: "shadow-lg" },
              { name: "Extra Large", value: "shadow-xl" },
            ].map((shadow) => (
              <div
                key={shadow.name}
                className={cn(
                  "border bg-background-subtle rounded-lg p-4",
                  shadow.value
                )}
              >
                <div className="font-medium text-foreground mb-2">
                  {shadow.name}
                </div>
                <code className="text-xs text-foreground-subtle">
                  {shadow.value}
                </code>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "breakpoints",
      icon: Move,
      render: () => (
        <div className="space-y-6">
          <h2 className="responsive-text-4xl font-bold text-foreground">
            Responsive Breakpoints
          </h2>

          <div className="space-y-4">
            <div className="bg-background-foreground rounded-lg p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {[
                  { name: "xs", width: "475px" },
                  { name: "sm", width: "640px" },
                  { name: "md", width: "768px" },
                  { name: "lg", width: "1024px" },
                  { name: "xl", width: "1280px" },
                  { name: "2xl", width: "1536px" },
                ].map((bp) => (
                  <div
                    key={bp.name}
                    className="bg-primary p-4 rounded-md text-center"
                  >
                    <div className="font-medium text-foreground">{bp.name}</div>
                    <code className="text-xs text-primary-foreground">
                      {bp.width}
                    </code>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-foreground-muted">
              Resize the browser to see breakpoint changes
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "cards",
      icon: Layers,
      render: () => (
        <div className="space-y-6">
          <h2 className="responsive-text-4xl font-bold text-foreground">
            Cards Showcase
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Simple Card */}
            <div
              className={cn(
                "p-6 rounded-xl border bg-gradient-to-b from-background-subtle to-background-muted hover:bg-gradient-to-t transition-colors duration-300",
                "border-muted shadow-lg"
              )}
            >
              <h3 className="text-lg font-semibold text-foreground">
                Simple Card
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                Clean and minimalistic card design for general use cases.
              </p>
            </div>

            {/* Interactive Card */}
            <div
              className={cn(
                "p-6 rounded-xl border bg-gradient-to-br from-background-muted to-background-foreground",
                "hover:from-primary hover:to-primary-hover",
                "hover:scale-105 transform transition-all duration-300 ease-smooth group/card",
                "border-muted shadow-md hover:shadow-xl"
              )}
            >
              <h3 className="text-lg font-semibold text-primary group-hover/card:text-foreground">
                Interactive Card
              </h3>
              <p className="text-sm text-foreground-muted group-hover/card:text-foreground-muted/10 mt-2">
                Hover to see interaction effects with scaling and gradients.
              </p>
            </div>

            {/* Card with Image */}
            <div
              className={cn(
                "rounded-xl overflow-hidden border bg-background-muted",
                "border-muted shadow-lg"
              )}
            >
              <Image
                height={150}
                width={300}
                unoptimized
                src="https://picsum.photos/seed/minimal/950/633"
                alt="Card Example"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Card with Image
                </h3>
                <p className="text-sm text-foreground-muted mt-2">
                  Beautiful card featuring a full-width image for added context.
                </p>
              </div>
            </div>

            {/* Card with Actions */}
            <div
              className={cn(
                "relative overflow-hidden p-6 rounded-xl border bg-background-muted",
                "border-muted shadow-md group"
              )}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-semibold text-foreground">
                Card with Actions
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                Includes actionable buttons and interactive elements.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm shadow-sm hover:shadow-md">
                  Action 1
                </button>
                <button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm shadow-sm hover:shadow-md">
                  Action 2
                </button>
              </div>
            </div>

            {/* Complex Card */}
            <div
              className={cn(
                "relative p-6 rounded-xl border bg-background-foreground",
                "border-muted shadow-xl overflow-hidden"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 opacity-75 -z-10" />
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary-hover" />
              <h3 className="text-lg font-semibold text-foreground">
                Complex Card
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                Includes advanced sections, gradients, and interactive features.
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-primary">
                  Highlights:
                </h4>
                <ul className="list-disc list-inside text-sm text-foreground-muted mt-2">
                  <li>Multiple features listed</li>
                  <li>Premium design layout</li>
                  <li>Rich interactive elements</li>
                </ul>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm shadow-sm hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Status Card */}
            <div
              className={cn(
                "p-6 rounded-xl border bg-success/10",
                "border-success shadow-lg"
              )}
            >
              <h3 className="text-lg font-semibold text-success">
                Status Card
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                Display status or feedback messages in a clear, elegant way.
              </p>
              <div className="mt-4">
                <span className="px-4 py-2 rounded-md bg-success text-success-foreground text-sm shadow-sm">
                  Active
                </span>
              </div>
            </div>

            {/* Elevated Card */}
            <div
              className={cn(
                "p-6 rounded-xl bg-gradient-to-t from-primary/10 via-background-muted to-primary/5",
                "border border-primary/30 shadow-2xl transform hover:scale-105 transition-transform duration-500"
              )}
            >
              <h3 className="text-lg font-semibold text-primary">
                Elevated Card
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                A card with enhanced shadow effects and hover elevation.
              </p>
            </div>

            {/* Featured Card */}
            <div
              className={cn(
                "relative p-8 rounded-2xl border border-muted bg-background-muted shadow-xl",
                "overflow-hidden group"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 -z-10" />
              <h3 className="text-xl font-bold text-foreground">
                Featured Card
              </h3>
              <p className="text-sm text-foreground-muted mt-2">
                Perfect for highlighting important content or calls to action.
              </p>
              <div className="mt-4">
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:bg-primary-hover">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-background-subtle">
      <div className="mb-8">
        <h1 className="responsive-text-5xl font-bold text-foreground mb-4">
          Design System Showcase
        </h1>
        <p className="text-foreground-muted">
          Explore the comprehensive design system features
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => setActiveSection(section.name)}
            className={cn(
              "flex items-center px-4 py-2 rounded-md transition-colors duration-200",
              activeSection === section.name
                ? "bg-primary text-primary-foreground"
                : "bg-background-foreground text-foreground hover:bg-background-muted"
            )}
          >
            <section.icon className="mr-2 w-4 h-4" />
            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-background-foreground rounded-lg p-4 md:p-8">
        {sections.find((s) => s.name === activeSection)?.render()}
      </div>

      <div className="mt-8 bg-background-muted rounded-lg p-6">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Responsive Typography Utilities
        </h3>
        <div className="grid md:grid-cols-2 gap-4 overflow-x-auto">
          <div>
            <h4 className="text-foreground-muted mb-2">Responsive Classes</h4>
            <ul className="space-y-2 text-foreground break-words w-full">
              <li>
                <code>.responsive-text-xs</code>: Adapts from xs to base
              </li>
              <li>
                <code>.responsive-text-sm</code>: Adapts from sm to lg
              </li>
              <li>
                <code>.responsive-text-base</code>: Adapts from base to xl
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground-muted mb-2">Usage Example</h4>
            <pre className="bg-background p-4 rounded-md text-foreground-subtle">
              <code>
                {`<h1 className="responsive-text-4xl">
  Responsive Heading
</h1>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
