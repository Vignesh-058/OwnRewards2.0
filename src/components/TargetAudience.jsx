import React from "react";
import { UtensilsCrossed, ShoppingBag, Package, Code2 } from "lucide-react";
import GlassCard from "./GlassCard";

const audiences = [
  {
    icon: <UtensilsCrossed size={30} />,
    label: "Restaurant Chains",
    role: "Owners & Operations Managers",
    description:
      "Run loyalty programs across every outlet — issue points at POS, reward regulars, and track performance by branch in one dashboard.",
    color: "#f97316",
    highlights: [
      "Multi-outlet point sync",
      "POS integration",
      "Branch-level analytics",
    ],
  },
  {
    icon: <ShoppingBag size={30} />,
    label: "Retail Brands",
    role: "Brand Managers · Multi-outlet Operations",
    description:
      "Unify your in-store and online loyalty programs. Reward customers across all channels and drive repeat footfall with automated campaigns.",
    color: "#8b5cf6",
    highlights: [
      "Omnichannel loyalty",
      "7 campaign types",
      "Tier-based promotions",
    ],
  },
  {
    icon: <Package size={30} />,
    label: "D2C & E-commerce",
    role: "Marketing Managers",
    description:
      "Turn one-time buyers into brand loyalists. Use dual-sided referral programs, buy-X-get-Y rewards, and LTV prediction to grow profitably.",
    color: "#06b6d4",
    highlights: ["Referral programs", "Buy-X-get-Y rewards", "LTV prediction"],
  },
  {
    icon: <Code2 size={30} />,
    label: "IT & Integration Teams",
    role: "IT Managers · Platform Evaluators",
    description:
      "REST API-first architecture, webhooks, and pre-built connectors for Shopify, WooCommerce, PetPooja, and OwnChat. 99.9% uptime SLA.",
    color: "#10b981",
    highlights: [
      "REST API & webhooks",
      "Shopify / WooCommerce plugins",
      "99.9% uptime SLA",
    ],
  },
];

const TargetAudience = () => {
  return (
    <section
      id="targetaudience-sec-1"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <h2 className="section-title animate-on-scroll fade-up">
            Built for <span className="gradient-text">your industry</span>
          </h2>
          <p className="section-subtitle mt-4">
            Whether you run a restaurant chain, retail brand, D2C store, or are
            evaluating loyalty platforms — OwnRewards has a purpose-built
            solution for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {audiences.map((a) => (
            <div key={a.label}>
              <GlassCard className="hover-lift" style={{ height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "100%",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${a.color}22`,
                      border: `1px solid ${a.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: a.color,
                      flexShrink: 0,
                    }}
                  >
                    {a.icon}
                  </div>

                  {/* Label + role */}
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text)",
                      }}
                    >
                      {a.label}
                    </h3>
                    <p
                      style={{
                        margin: "3px 0 0",
                        fontSize: "0.75rem",
                        color: a.color,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {a.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {a.description}
                  </p>

                  {/* Highlights */}
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      marginTop: "auto",
                    }}
                  >
                    {a.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: a.color,
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "280px",
          background: "var(--primary)",
          opacity: 0.05,
          filter: "blur(140px)",
          borderRadius: "100%",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default TargetAudience;
