import logo from "../../assets/images/logo.png";
import footerEllipse from "../../assets/images/footer-ellipse.svg";
import footerSocial from "../../assets/images/footer-social.svg";
import footerCardBg from "../../assets/images/footer-card-bg.svg";
import footerGrid from "../../assets/images/footer-grid.svg";

const quickLinks = [
  "Products",
  "Technology",
  "Case Studies",
  "Insights & Blogs",
  "Media Kit",
  "Careers",
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#000", height: "763px" }}
      id="contact"
    >
      {/* Main content area */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "687px",
          overflow: "hidden",
        }}
      >
        {/* Ellipse glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-98px",
            left: "-56px",
            width: "826px",
            height: "826px",
            opacity: 0.5,
          }}
        >
          <img
            src={footerEllipse}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left dark cut-corner card */}
        <div
          className="absolute"
          style={{
            top: "81px",
            left: "146px",
            width: "601px",
            height: "468px",
          }}
        >
          <img
            src={footerCardBg}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
          />
          <div className="relative z-10" style={{ padding: "39px 55px" }}>
            <img
              src={logo}
              alt="Naxatra Labs"
              style={{
                height: "24px",
                marginBottom: "20px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <h3
              className="font-nexa"
              style={{ fontSize: "68px", lineHeight: "78px", color: "#fff" }}
            >
              Engineering the{" "}
              <span style={{ color: "#4dd6c4" }}>Future of Mobility</span>
            </h3>
            <div style={{ marginTop: "32px" }}>
              <img
                src={footerSocial}
                alt="Social Links"
                style={{ height: "36px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Right grid background */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "12px",
            left: "703px",
            right: "243px",
            bottom: "107px",
            opacity: 0.3,
          }}
        >
          <img
            src={footerGrid}
            alt=""
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Quick Links */}
        <div className="absolute" style={{ left: "865px", top: "112px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "22px",
              lineHeight: "51.73px",
              marginBottom: "0",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-nexa"
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    lineHeight: "51.73px",
                    textDecoration: "none",
                    display: "block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="absolute" style={{ left: "1086px", top: "112px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "22px",
              lineHeight: "51.73px",
              marginBottom: "0",
            }}
          >
            Contact Us
          </h4>
          <div
            className="font-nexa"
            style={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "51.73px",
              whiteSpace: "nowrap",
            }}
          >
            <p style={{ margin: 0, textTransform: "uppercase" }}>
              +91 9266030266
            </p>
            <p style={{ margin: 0 }}>enquiry@naxatralabs.com</p>
            <p style={{ margin: 0 }}>careers@naxatralabs.com</p>
          </div>
        </div>

        {/* Locate Us */}
        <div className="absolute" style={{ left: "1418px", top: "112px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "22px",
              lineHeight: "51.73px",
              marginBottom: "0",
            }}
          >
            Locate Us
          </h4>
          <div
            className="font-nexa"
            style={{
              color: "#fff",
              fontSize: "18px",
              lineHeight: "32px",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              marginTop: "7px",
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>Corporate Office</p>
              <p style={{ margin: 0 }}>Sector 44, Gurugram,</p>
              <p style={{ margin: 0 }}>Haryana 122003</p>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>
                Manufacturing Facility
              </p>
              <p style={{ margin: 0 }}>Paldi-Kankaj, Dakroi Ahemdabad,</p>
              <p style={{ margin: 0 }}>Gujarat 382425</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
