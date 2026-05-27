import { useState } from "react";
import reqForCust from "../../../assets/images/req-for-cust.svg";
import wireframe from "../../../assets/images/product-detail-wireframe.png";
import expandButton from "../../../assets/socialhandles/expand.png";
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
        type="button"
      >
        <span
          className="font-nexa capitalize"
          style={{
            fontSize: "clamp(16px, 1.46vw, 28px)",
            lineHeight: "1.43",
            color: isOpen ? "#1863da" : "#515151",
            fontWeight: isOpen ? 700 : 400,
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
        {product.detailedVideo || product.heroVideo ? (
          <video
            src={product.detailedVideo || product.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "clamp(160px, 26.8vw, 515px)",
              height: "clamp(120px, 22.6vw, 434px)",
              objectFit: "cover",
              backgroundColor: "transparent",
              transform: `scale(${zoom})`,
              transition: "transform 0.2s ease",
            }}
          />
        ) : (
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
        )}

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
            type="button"
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
            type="button"
          >
            −
          </button>
        </div>
      </div>

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
          src={product.wireframeImage || wireframe}
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

function TechnicalDetailsTable({ isSingle, product, variants, cellStyle, expanded = false }) {
  const visibleSingleSpecRows = SINGLE_SPEC_ROWS.filter(
    (row) => !product.hiddenSingleSpecRows?.includes(row.key)
  );

  const labelCellStyle = {
    padding: expanded
      ? "10px 18px"
      : "clamp(6px, 0.52vw, 10px) clamp(16px, 1.98vw, 38px)",
    fontSize: expanded ? "12px" : "clamp(11px, 1.46vw, 28px)",
    color: "#515151",
    whiteSpace: "nowrap",
    width: expanded ? "176px" : undefined,
    minWidth: expanded ? "176px" : undefined,
    maxWidth: expanded ? "176px" : undefined,
    boxSizing: "border-box",
  };

  const valueCellStyle = expanded
    ? {
        ...cellStyle,
        padding: "10px 18px",
        fontSize: "12px",
        minWidth: "120px",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      }
    : cellStyle;

  const headerPadding = expanded ? "10px 18px" : "clamp(8px, 0.52vw, 10px) clamp(16px, 1.98vw, 38px)";
  const valueHeaderPadding = expanded ? "10px 18px" : "clamp(8px, 0.52vw, 10px) clamp(12px, 1.25vw, 24px)";
  const expandedRowBackground = (idx) =>
    idx % 2 === 0 ? "rgba(131,255,239,0.10)" : "#ffffff";

  if (expanded) {
    if (isSingle) {
      return (
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <table
            style={{
              width: "176px",
              minWidth: "176px",
              maxWidth: "176px",
              borderCollapse: "collapse",
              tableLayout: "fixed",
              flexShrink: 0,
            }}
          >
            <thead>
              <tr>
                <th
                  className="font-nexa capitalize"
                  style={{
                    textAlign: "left",
                    padding: headerPadding,
                    fontSize: "13px",
                    color: "#fff",
                    background: "#1863da",
                    borderBottom: "1px solid #d9d9d9",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    width: "176px",
                    minWidth: "176px",
                    maxWidth: "176px",
                    boxSizing: "border-box",
                  }}
                >
                  Specification
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleSingleSpecRows.map((row, idx) => (
                <tr key={row.key} style={{ background: expandedRowBackground(idx) }}>
                  <td
                    className="font-nexa capitalize"
                    style={{
                      ...labelCellStyle,
                      background: expandedRowBackground(idx),
                    }}
                  >
                    {row.label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ overflowX: "auto", flex: 1 }}>
            <table
              style={{
                width: "max-content",
                minWidth: "120px",
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr>
                  <th
                    className="font-nexa capitalize"
                    style={{
                      textAlign: "left",
                      padding: valueHeaderPadding,
                      fontSize: "13px",
                      color: "#fff",
                      background: "#1863da",
                      borderLeft: "1px solid rgba(255,255,255,0.3)",
                      borderBottom: "1px solid #d9d9d9",
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleSingleSpecRows.map((row, idx) => (
                  <tr key={row.key} style={{ background: expandedRowBackground(idx) }}>
                    <td className="font-nexa capitalize" style={valueCellStyle}>
                      {product.singleSpec[row.key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <table
          style={{
            width: "176px",
            minWidth: "176px",
            maxWidth: "176px",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            flexShrink: 0,
          }}
        >
          <tbody>
            {SPEC_ROWS.map((row, idx) => (
              <tr key={row.key} style={{ background: expandedRowBackground(idx) }}>
                <td
                  className="font-nexa capitalize"
                  style={{
                    ...labelCellStyle,
                    background: expandedRowBackground(idx),
                  }}
                >
                  {row.label}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ overflowX: "auto", flex: 1 }}>
          <table
            style={{
              width: "max-content",
              minWidth: `${variants.length * 120}px`,
              borderCollapse: "collapse",
              tableLayout: "fixed",
            }}
          >
            <tbody>
              {SPEC_ROWS.map((row, idx) => (
                <tr key={row.key} style={{ background: expandedRowBackground(idx) }}>
                  {variants.map((v) => (
                    <td
                      key={`${row.key}-${v.voltage}`}
                      className="font-nexa capitalize"
                      style={valueCellStyle}
                    >
                      {v[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      {isSingle ? (
        <table
          style={{
            width: "100%",
            minWidth: "400px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                className="font-nexa capitalize"
                style={{
                  textAlign: "left",
                  padding: headerPadding,
                  fontSize: expanded ? "13px" : "clamp(12px, 1.04vw, 20px)",
                  color: "#fff",
                  background: "#1863da",
                  borderBottom: "1px solid #d9d9d9",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                Specification
              </th>
              <th
                className="font-nexa capitalize"
                style={{
                  textAlign: "left",
                  padding: valueHeaderPadding,
                  fontSize: expanded ? "13px" : "clamp(12px, 1.04vw, 20px)",
                  color: "#fff",
                  background: "#1863da",
                  borderLeft: "1px solid rgba(255,255,255,0.3)",
                  borderBottom: "1px solid #d9d9d9",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleSingleSpecRows.map((row, idx) => {
              const bg = idx % 2 === 0 ? "rgba(131,255,239,0.10)" : "transparent";
              return (
                <tr key={row.key} style={{ background: bg }}>
                  <td className="font-nexa capitalize" style={labelCellStyle}>
                    {row.label}
                  </td>
                  <td className="font-nexa capitalize" style={valueCellStyle}>
                    {product.singleSpec[row.key]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table
          style={{
            width: "100%",
            minWidth: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            {SPEC_ROWS.map((row, idx) => {
              const bg = idx % 2 === 0 ? "rgba(131,255,239,0.10)" : "transparent";
              return (
                <tr key={row.key} style={{ background: bg }}>
                  <td
                    className={`font-nexa capitalize ${expanded ? "" : "max-[768px]:text-[8px]! max-[768px]:px-2!"}`}
                    style={labelCellStyle}
                  >
                    {row.label}
                  </td>
                  {variants.map((v) => (
                    <td
                      key={`${row.key}-${v.voltage}`}
                      className={`font-nexa capitalize ${expanded ? "" : "max-[768px]:text-[8px]! max-[768px]:px-1.5!"}`}
                      style={valueCellStyle}
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
  );
}

function TechnicalDetailsContent({
  isSingle,
  product,
  variants,
  cellStyle,
  onExpand,
}) {
  return (
    <>
      <div
        className="relative"
        style={{ marginBottom: "clamp(32px, 3.6vw, 70px)" }}
      >
        <div className="hidden max-[768px]:block absolute right-0 top-0 z-10">
          <button
            type="button"
            onClick={onExpand}
            aria-label="Expand technical details"
            style={{
              width: "20px",
              height: "20px",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={expandButton}
              alt=""
              style={{
                width: "20px",
                height: "20px",
                display: "block",
                objectFit: "contain",
              }}
            />
          </button>
        </div>
        <TechnicalDetailsTable
          isSingle={isSingle}
          product={product}
          variants={variants}
          cellStyle={cellStyle}
        />
      </div>

      <div
        className="max-[768px]:items-start max-[768px]:justify-between max-[768px]:gap-3"
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
          className="font-nexa capitalize max-[768px]:text-[10px]! max-[768px]:max-w-[150px]! max-[768px]:leading-[1.25]!"
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
          className="cta-asset"
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
            className="block max-[768px]:w-[166px]!"
            style={{ width: "clamp(180px, 16vw, 300px)", height: "auto" }}
          />
        </button>
      </div>
    </>
  );
}

export default function ProductDetailTechSection({ product }) {
  const [techOpen, setTechOpen] = useState(true);
  const [techExpanded, setTechExpanded] = useState(false);
  const [appOpen, setAppOpen] = useState(true);
  const [motorOpen, setMotorOpen] = useState(true);

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
      <div>
        <div style={{ height: "1px", background: "#d9d9d9" }} />
        <button
          onClick={() => setTechOpen((open) => !open)}
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
          type="button"
          aria-expanded={techOpen}
          aria-label="Toggle technical details"
        >
          <h2
            className="font-nexa"
            style={{
              fontSize: "clamp(16px, 1.46vw, 28px)",
              lineHeight: "1.43",
              margin: 0,
              textAlign: "left",
              fontWeight: techOpen ? 700 : 400,
            }}
          >
            <span style={{ color: techOpen ? "#1863da" : "#515151" }}>Technical </span>
            <span style={{ color: techOpen ? "#000" : "#515151" }}>Details</span>
          </h2>
          <span
            style={{
              fontSize: "clamp(20px, 1.15vw, 22px)",
              color: techOpen ? "#515151" : "#1863da",
              fontWeight: 300,
              lineHeight: 1,
              display: "inline-block",
            }}
          >
            {techOpen ? "×" : "+"}
          </span>
        </button>

        {techOpen && (
          <TechnicalDetailsContent
            isSingle={isSingle}
            product={product}
            variants={variants}
            cellStyle={cellStyle}
            onExpand={() => setTechExpanded(true)}
          />
        )}
      </div>

      {techExpanded && (
        <div
          className="hidden max-[768px]:block fixed inset-0 z-[120] bg-[rgba(0,0,0,0.35)]"
          onClick={() => setTechExpanded(false)}
        >
          <div
            style={{
              position: "absolute",
              left: "12px",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#fff",
              borderRadius: "10px",
              padding: "16px 12px 14px",
              maxHeight: "78vh",
              overflow: "hidden",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <p
                className="font-nexa"
                style={{
                  margin: 0,
                  fontSize: "20px",
                  lineHeight: "1.2",
                }}
              >
                <span style={{ color: "#1863da" }}>Technical </span>
                <span style={{ color: "#000" }}>Details</span>
              </p>
              <button
                type="button"
                onClick={() => setTechExpanded(false)}
                aria-label="Close expanded technical details"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "#515151",
                  fontSize: "20px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <div style={{ maxHeight: "calc(78vh - 48px)", overflow: "auto" }}>
              <TechnicalDetailsTable
                isSingle={isSingle}
                product={product}
                variants={variants}
                cellStyle={cellStyle}
                expanded
              />
            </div>
          </div>
        </div>
      )}

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
