import { useState } from "react";
import reqForCust from "../../../assets/images/req-for-cust.png";
import wireframe from "../../../assets/images/product-detail-wireframe.png";
import {
  SPEC_ROWS,
  SINGLE_SPEC_ROWS,
  APPLICATIONS,
} from "../../../data/products";

function AccordionRow({ title, isOpen, onToggle, children }) {
  return (
    <div>
      <div style={{ height: "1px", background: "#d9d9d9" }} />
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(14px, 1.25vw, 24px) 0",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="font-nexa capitalize"
          style={{
            fontSize: "clamp(16px, 1.46vw, 28px)",
            lineHeight: "1.43",
            color: isOpen ? "#1863da" : "#515151",
          }}
        >
          {isOpen && title === "Motor Detailed View" ? "Detailed View" : title}
        </span>
        <span
          style={{
            fontSize: "20px",
            color: isOpen ? "#1863da" : "#515151",
            fontWeight: 300,
            lineHeight: 1,
            transform: isOpen ? "rotate(45deg)" : "none",
            display: "inline-block",
            transition: "transform 0.2s ease",
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: "clamp(24px, 2.5vw, 48px)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function ApplicationsContent({ productApplications }) {
  const apps = APPLICATIONS.filter((a) => productApplications.includes(a.id));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "clamp(12px, 1.25vw, 24px)",
      }}
      className="max-[720px]:grid-cols-2!"
    >
      {apps.map((app) => (
        <div
          key={app.id}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div
            style={{
              background: "#f5f5f5",
              borderRadius: "8px",
              aspectRatio: "545/315",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={app.icon}
              alt={app.label}
              style={{ width: "50%", height: "60%", objectFit: "contain" }}
            />
          </div>
          <p
            className="font-nexa capitalize"
            style={{
              color: "#515151",
              fontSize: "clamp(13px, 1.25vw, 24px)",
              lineHeight: "1.5",
            }}
          >
            {app.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function MotorDetailedContent({ product }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(24px, 2.08vw, 40px)",
      }}
    >
      {/* Large motor viewer card */}
      <div
        className="max-[768px]:min-h-55! max-[768px]:rounded-xl!"
        style={{
          background: "rgba(243,243,243,0.9)",
          borderRadius: "24px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "clamp(280px, 37.7vw, 723px)",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-[768px]:w-[55vw]! max-[768px]:h-auto!"
          style={{
            width: "clamp(160px, 26.8vw, 515px)",
            height: "clamp(120px, 22.6vw, 434px)",
            objectFit: "contain",
            transform: `rotate(180deg) scale(${zoom})`,
            transition: "transform 0.2s ease",
          }}
        />

        {/* Zoom controls */}
        <div
          style={{
            position: "absolute",
            right: "clamp(12px, 1.77vw, 34px)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.2, 2.5))}
            style={{
              width: "34px",
              height: "34px",
              background: "#fff",
              border: "1px solid #d9d9d9",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#515151",
            }}
          >
            +
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
            style={{
              width: "34px",
              height: "34px",
              background: "#fff",
              border: "1px solid #d9d9d9",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#515151",
            }}
          >
            −
          </button>
        </div>
      </div>

      {/* Wireframe view */}
      <p
        className="font-nexa capitalize"
        style={{
          color: "#515151",
          fontSize: "clamp(16px, 1.67vw, 32px)",
          lineHeight: "1.25",
        }}
      >
        Wireframe View
      </p>
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(16px, 2.08vw, 40px)",
        }}
      >
        <img
          src={wireframe}
          alt="Motor wireframe technical drawing"
          style={{
            width: "100%",
            maxWidth: "1027px",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default function ProductDetailTechSection({ product }) {
  const [appOpen, setAppOpen] = useState(false);
  const [motorOpen, setMotorOpen] = useState(false);

  const isSingle = !!product.singleSpec;
  const variants = product.variants || [];

  const cellStyle = {
    padding: "clamp(6px, 0.52vw, 10px) clamp(12px, 1.25vw, 24px)",
    fontSize: "clamp(11px, 1.25vw, 24px)",
    color: "#000",
    borderLeft: "1px solid rgba(209,209,209,0.5)",
    letterSpacing: "0.01em",
  };

  return (
    <section
      className="w-full"
      style={{
        background: "#fff",
        padding: "clamp(40px, 5.2vw, 100px) clamp(16px, 10.4vw, 200px)",
      }}
    >
      {/* ── Heading ── */}
      <h2
        className="font-nexa max-[768px]:text-[12px]! max-[768px]:mb-4.5!"
        style={{
          fontSize: "clamp(24px, 2.6vw, 50px)",
          lineHeight: "1.24",
          marginBottom: "clamp(24px, 2.6vw, 50px)",
        }}
      >
        <span style={{ color: "#1863da" }}>Technical </span>
        <span style={{ color: "#000" }}>Details</span>
      </h2>

      {/* ── Specs table ── */}
      <div
        style={{ overflowX: "auto", marginBottom: "clamp(32px, 3.6vw, 70px)" }}
      >
        {isSingle ? (
          /* Single-value table for AF58 / PT-500 */
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "400px",
            }}
          >
            <thead>
              <tr>
                <th
                  className="font-nexa capitalize"
                  style={{
                    textAlign: "left",
                    padding:
                      "clamp(8px, 0.52vw, 10px) clamp(16px, 1.98vw, 38px)",
                    fontSize: "clamp(12px, 1.04vw, 20px)",
                    color: "#fff",
                    background: "#1863da",
                    borderBottom: "1px solid #d9d9d9",
                    fontWeight: 400,
                  }}
                >
                  Specification
                </th>
                <th
                  className="font-nexa capitalize"
                  style={{
                    textAlign: "left",
                    padding:
                      "clamp(8px, 0.52vw, 10px) clamp(12px, 1.25vw, 24px)",
                    fontSize: "clamp(12px, 1.04vw, 20px)",
                    color: "#fff",
                    background: "#1863da",
                    borderLeft: "1px solid rgba(255,255,255,0.3)",
                    borderBottom: "1px solid #d9d9d9",
                    fontWeight: 400,
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {SINGLE_SPEC_ROWS.map((row, idx) => {
                const bg =
                  idx % 2 === 0 ? "rgba(131,255,239,0.10)" : "transparent";
                return (
                  <tr key={row.key} style={{ background: bg }}>
                    <td
                      className="font-nexa capitalize"
                      style={{
                        padding:
                          "clamp(6px, 0.52vw, 10px) clamp(16px, 1.98vw, 38px)",
                        fontSize: "clamp(11px, 1.46vw, 28px)",
                        color: "#515151",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.label}
                    </td>
                    <td className="font-nexa capitalize" style={cellStyle}>
                      {product.singleSpec[row.key]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          /* Multi-variant table for RF series */
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              {SPEC_ROWS.map((row, idx) => {
                const bg =
                  idx % 2 === 0 ? "rgba(131,255,239,0.10)" : "transparent";
                return (
                  <tr key={row.key} style={{ background: bg }}>
                    <td
                      className="font-nexa capitalize max-[768px]:text-[8px]! max-[768px]:px-2!"
                      style={{
                        padding:
                          "clamp(6px, 0.52vw, 10px) clamp(16px, 1.98vw, 38px)",
                        fontSize: "clamp(11px, 1.46vw, 28px)",
                        color: "#515151",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.label}
                    </td>
                    {variants.map((v) => (
                      <td
                        key={v.voltage}
                        className="font-nexa capitalize max-[768px]:text-[8px]! max-[768px]:px-1.5!"
                        style={cellStyle}
                      >
                        {v[row.key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Customization CTA ── */}
      <div
        className="max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center max-[768px]:gap-2"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          padding: "clamp(16px, 1.67vw, 32px) 0",
          borderTop: "1px solid #d9d9d9",
        }}
      >
        <p
          className="font-nexa capitalize max-[768px]:text-[10px]! max-[768px]:max-w-46.5! max-[768px]:leading-normal!"
          style={{
            color: "#515151",
            fontSize: "clamp(13px, 1.46vw, 18px)",
            lineHeight: "1.43",
            maxWidth: "700px",
          }}
        >
          Request a solution tailored to your needs. Customize it your way.
        </p>
        <button
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          type="button"
          aria-label={`Request customization for ${product.name}`}
        >
          <img
            src={reqForCust}
            alt="Request for Customization"
            className="block max-[768px]:w-42.5!"
            style={{ width: "clamp(180px, 16vw, 300px)", height: "auto" }}
          />
        </button>
      </div>

      {/* ── Accordions ── */}
      <AccordionRow
        title="Applications"
        isOpen={appOpen}
        onToggle={() => setAppOpen((o) => !o)}
      >
        <ApplicationsContent productApplications={product.applications} />
      </AccordionRow>

      <AccordionRow
        title="Motor Detailed View"
        isOpen={motorOpen}
        onToggle={() => setMotorOpen((o) => !o)}
      >
        <MotorDetailedContent product={product} />
      </AccordionRow>

      <div style={{ height: "1px", background: "#d9d9d9" }} />
    </section>
  );
}
