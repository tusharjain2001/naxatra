import aboutSection from '../../assets/images/about-section.svg';

export default function AboutSection() {
  return (
    <section id="about" className="w-full overflow-hidden bg-[#f5fafa]">
      <img
        src={aboutSection}
        alt="Efficient Motors, Better Performance, Greener Future"
        className="block w-full"
      />
    </section>
  );
}
