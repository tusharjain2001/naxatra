import logo from "../../assets/images/logo.png";
import footerEllipse from "../../assets/images/footer-ellipse.svg";
import footerSocial from "../../assets/images/footer-social.svg";
import footerCardBg from "../../assets/images/footer-card-bg.svg";
import footerLeftGrid from "../../assets/images/footer-left-grid-green.png";
import footerRightGrid from "../../assets/images/footer-right-bg-grid.png";

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
      style={{ background: "#000", height: "540px" }}
      id="contact"
    >
      {/* Ellipse glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-190px",
          left: "-118px",
          width: "826px",
          height: "826px",
          opacity: 0.45,
        }}
      >
        <img src={footerEllipse} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Left grid background */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "23px",
          left: "140px",
          width: "610px",
          height: "380px",
          opacity: 0.65,
        }}
      >
        <img src={footerLeftGrid} alt="" className="w-full h-full" style={{ objectFit: "cover" }} />
      </div>

      {/* Right grid background */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "23px",
          left: "700px",
          width: "980px",
          height: "380px",
          opacity: 0.42,
        }}
      >
        <img src={footerRightGrid} alt="" className="w-full h-full" style={{ objectFit: "cover" }} />
      </div>

      {/* Main content area */}
      <div className="relative z-10" style={{ maxWidth: "1640px", margin: "0 auto", paddingTop: "72px" }}>
        {/* Left dark cut-corner card */}
        <div
          className="absolute"
          style={{
            top: "72px",
            left: "0",
            width: "600px",
            height: "370px",
          }}
        >
          <img
            src={footerCardBg}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
          />
          <div className="relative z-10" style={{ padding: "42px 56px" }}>
            <h3
              className="font-nexa"
              style={{ fontSize: "52px", lineHeight: "58px", color: "#fff", fontWeight: 400 }}
            >
              Engineering
              <br />
              The <span style={{ color: "#4dd6c4" }}>Future Of</span>
              <br />
              <span style={{ color: "#4dd6c4" }}>Mobility</span>
            </h3>
            <div style={{ marginTop: "62px" }}>
              <img
                src={footerSocial}
                alt="Social Links"
                style={{ width: "78px", height: "40px", objectFit: "contain", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="absolute" style={{ left: "720px", top: "94px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "18px",
              lineHeight: "22px",
              marginBottom: "24px",
              letterSpacing: "0.5px",
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
                    fontSize: "16px",
                    lineHeight: "34px",
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
        <div className="absolute" style={{ left: "940px", top: "94px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "18px",
              lineHeight: "22px",
              marginBottom: "24px",
              letterSpacing: "0.5px",
            }}
          >
            Contact Us
          </h4>
          <div
            className="font-nexa"
            style={{
              color: "#fff",
              fontSize: "16px",
              lineHeight: "52px",
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
        <div className="absolute" style={{ left: "1240px", top: "94px" }}>
          <h4
            className="font-nexa uppercase"
            style={{
              color: "#1863da",
              fontSize: "18px",
              lineHeight: "22px",
              marginBottom: "24px",
              letterSpacing: "0.5px",
            }}
          >
            Locate Us
          </h4>
          <div
            className="font-nexa"
            style={{
              color: "#fff",
              fontSize: "16px",
              lineHeight: "26px",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
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
