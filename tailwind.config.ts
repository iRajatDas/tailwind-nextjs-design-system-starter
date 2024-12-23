// tailwind.config.ts
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Color palette with semantic naming
      colors: {
        // Base colors
        background: {
          DEFAULT: "var(--background)",
          foreground: "var(--background-foreground)",
          muted: "var(--background-muted)",
          subtle: "var(--background-subtle)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
          subtle: "var(--foreground-subtle)",
        },

        // Brand colors
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
          active: "var(--primary-active)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          hover: "var(--secondary-hover)",
          active: "var(--secondary-active)",
        },

        // Accent and state colors
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        // Border and divider colors
        border: "var(--border)",
        divider: "var(--divider)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
        subtle: "var(--border-subtle)",
        muted: "var(--border-muted)",
      },

      // Font family with custom variable
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },

      // Extended typography scales
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em" }], // Small, tight but readable
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }], // Comfortable small text
        base: ["1rem", { lineHeight: "1.6rem", letterSpacing: "0.02em" }], // Default body text
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.015em" }], // Slightly larger body text
        xl: ["1.25rem", { lineHeight: "1.8rem", letterSpacing: "0.01em" }], // Subheadings
        "2xl": ["1.5rem", { lineHeight: "2.2rem", letterSpacing: "0" }], // Small headings
        "3xl": ["1.875rem", { lineHeight: "2.5rem", letterSpacing: "-0.01em" }], // Medium headings
        "4xl": [
          "2.25rem",
          { lineHeight: "2.75rem", letterSpacing: "-0.015em" },
        ], // Large display text
        "5xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.02em" }], // Large heading with spacious lines
        "6xl": [
          "3.75rem",
          { lineHeight: "4.25rem", letterSpacing: "-0.025em" },
        ], // Extra-large headings
        "7xl": ["4.5rem", { lineHeight: "5rem", letterSpacing: "-0.03em" }], // Hero headings
        "8xl": ["6rem", { lineHeight: "6.75rem", letterSpacing: "-0.035em" }], // Largest possible text
      },

      // Spacing and sizing
      spacing: {
        "4.5": "1.125rem", // Custom spacing for fine-tuned layouts
        "7.5": "1.875rem",
      },

      // Border radius with more granular control
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },

      // Shadow system
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        DEFAULT:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
        xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },

      // Transition and animation
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        dimensions:
          "width, height, max-width, max-height, min-width, min-height",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        // unique timing functions
        sassy: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        lazy: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },

    // Default configuration overrides
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // Optional plugins for additional functionality
  plugins: [
    // Example: Add a custom plugin for responsive typography
    // Custom plugin for enhanced responsive typography
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      const responsiveTypography = {
        ".responsive-text-xs": {
          "@apply text-xs sm:text-sm font-normal": {},
        },
        ".responsive-text-sm": {
          "@apply text-sm sm:text-base md:text-lg lg:text-lg font-normal": {},
        },
        ".responsive-text-base": {
          "@apply text-base sm:text-lg md:text-xl lg:text-2xl md:font-medium":
            {},
        },
        ".responsive-text-lg": {
          "@apply text-lg sm:text-xl md:text-2xl lg:text-3xl md:font-semibold":
            {},
        },
        ".responsive-text-xl": {
          "@apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium lg:font-bold":
            {},
        },
        ".responsive-text-2xl": {
          "@apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold":
            {},
        },
        ".responsive-text-3xl": {
          "@apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-bold":
            {},
        },
        ".responsive-text-4xl": {
          "@apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold": {},
        },
        ".responsive-text-5xl": {
          "@apply text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold": {},
        },
      };
      addUtilities(responsiveTypography);
    },
  ],
} satisfies Config;



