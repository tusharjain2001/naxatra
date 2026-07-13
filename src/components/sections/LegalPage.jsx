import Navbar from './Navbar';
import Footer from './Footer';

function Paragraph({ item }) {
  if (typeof item === 'object' && item !== null) {
    return (
      <p className="mt-2 font-semibold text-[#0f1b2d]">{item.text}</p>
    );
  }
  return (
    <p className="text-[15px] leading-[1.75] text-[#3a4453] md:text-[16px]">{item}</p>
  );
}

export default function LegalPage({ title, lastUpdated, sections }) {
  return (
    <div className="w-full overflow-x-hidden bg-white font-nexa">
      <Navbar />

      <main className="pt-[55px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black">
          <div className="mx-auto max-w-[1000px] px-6 py-[clamp(48px,7vw,88px)] md:px-10">
            <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#4dd6c4]">
              Naxatra Labs Pvt. Ltd.
            </p>
            <h1 className="text-[clamp(30px,5vw,56px)] font-bold leading-[1.08] text-white">
              {title}
            </h1>
            <p className="mt-4 text-[14px] text-white/60">{lastUpdated}</p>
          </div>
          <div
            className="h-[3px] w-full"
            style={{ background: 'linear-gradient(90deg, #1863da 0%, #4dd6c4 100%)' }}
          />
        </section>

        {/* Content */}
        <section className="mx-auto max-w-[900px] px-6 py-[clamp(40px,6vw,72px)] md:px-10">
          <div className="flex flex-col gap-[clamp(28px,3vw,40px)]">
            {sections.map((section, index) => (
              <article key={section.heading} className="scroll-mt-24">
                <h2 className="mb-3 flex items-baseline gap-3 text-[clamp(18px,2.2vw,24px)] font-bold text-[#0f1b2d]">
                  <span className="text-[#1863da]">{index + 1}.</span>
                  <span>{section.heading}</span>
                </h2>
                <div className="space-y-3 border-l-2 border-[#e6ebf2] pl-4 md:pl-6">
                  {section.paragraphs.map((item, i) => (
                    <Paragraph key={i} item={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
