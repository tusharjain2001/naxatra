import ctaBg from "../../../assets/images/product-cta-bg.png";
import learnMore from "../../../assets/images/learn-more.png";
import motorHero from "../../../assets/images/product-cta.png";

export default function ProductCTASection() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(24px, 3.6vw, 68px) clamp(16px, 6.5vw, 124px)" }}
    >
      <div
        className="relative overflow-hidden max-[560px]:!min-h-[386px] max-[560px]:!rounded-[10px]"
        style={{
          maxWidth: "1610px",
          minHeight: "clamp(165px, 14.2vw, 272px)",
          margin: "0 auto",
          background: "#02050a",
          borderRadius: "0",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 26px), calc(100% - 22px) 100%, 0 100%)",
        }}
      >
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.16 }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,5,10,0.98) 0%, rgba(2,5,10,0.92) 54%, rgba(2,5,10,0.42) 77%, rgba(2,5,10,0.06) 100%)",
          }}
        />

        <div
          className="absolute pointer-events-none max-[560px]:!right-[-30px] max-[560px]:!bottom-[-6px] max-[560px]:!w-[235px] max-[560px]:!h-[190px]"
          style={{
            right: "clamp(-8px, -0.35vw, 0px)",
            bottom: "clamp(-10px, -0.7vw, 0px)",
            width: "clamp(180px, 24vw, 460px)",
            height: "clamp(145px, 19vw, 365px)",

            zIndex: 1,
          }}
        >
          <img
            src={motorHero}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className="relative max-[560px]:!mx-auto max-[560px]:!max-w-[340px] max-[560px]:!px-3 max-[560px]:!pt-10 max-[560px]:!pb-[220px] max-[560px]:text-center"
          style={{
            zIndex: 2,
            maxWidth: "clamp(340px, 39vw, 740px)",
            padding: "clamp(28px, 3vw, 58px) clamp(20px, 3.1vw, 60px)",
          }}
        >
          <h2
            className="font-nexa max-[560px]:!text-[14px] max-[560px]:!leading-[1.4] max-[560px]:!mb-6 max-[560px]:!max-w-none"
            style={{
              fontSize: "clamp(17px, 1.7vw, 33px)",
              lineHeight: "1.42",
              color: "#fff",
              marginBottom: "clamp(18px, 1.5vw, 28px)",
              maxWidth: "24ch",
              fontWeight: 400,
            }}
          >
            <span className="max-[560px]:block">
              Explore <span style={{ color: "#4dd6c4" }}>Detailed Specifications,</span>
            </span>{" "}
            <span className="max-[560px]:block">
              <span style={{ color: "#4dd6c4" }}>Performance Insights, And Applications</span> For
            </span>{" "}
            <span className="max-[560px]:block">Our Range Of Motors And Controllers.</span>
          </h2>

          <a
            href="/contact"
            className="max-[560px]:!inline-flex"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
            aria-label="Learn more about our tailored solutions"
          >
            <img
              src={learnMore}
              alt="Learn More About Our Tailored Solutions"
              className="block max-[560px]:!w-[280px]"
              style={{ width: "clamp(150px, 17vw, 325px)", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
