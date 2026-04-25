import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import bg1 from '../../assets/images/blog-bg-1.svg';
import bg2 from '../../assets/images/blog-bg-2.svg';

const blogs = [
  {
    img: blog1,
    bg: bg1,
    title: 'National Technology Week',
    date: 'May 11.2023',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    img: blog2,
    bg: bg2,
    title: 'National Technology Week',
    date: 'May 11.2023',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
  {
    img: blog3,
    bg: bg1,
    title: 'National Technology Week',
    date: 'May 11.2023',
    desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  },
];

export default function BlogsSection() {
  return (
    <section
      className="w-full bg-[#f5fafa]"
      style={{ paddingTop: 'clamp(58px, 5vw, 94px)', paddingBottom: 'clamp(54px, 4.8vw, 90px)' }}
      id="blogs"
    >
      <div style={{ maxWidth: '1840px', margin: '0 auto', padding: '0 clamp(20px, 4.2vw, 80px)' }}>
        <h2
          className="font-nexa text-center capitalize"
          style={{ fontSize: 'clamp(34px, 3.6vw, 68px)', lineHeight: '1.05', marginBottom: 'clamp(34px, 3.9vw, 72px)' }}
        >
          <span style={{ color: '#000' }}>Our </span>
          <span style={{ color: '#1863da' }}>Blogs</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(16px, 1.4vw, 26px)' }}>
          {blogs.map((blog, i) => (
            <div key={i} className="relative" style={{ minHeight: 'clamp(390px, 30vw, 528px)' }}>
              <img
                src={blog.bg}
                alt=""
                className="absolute inset-0 h-full w-full"
                style={{ display: 'block' }}
              />

              <div className="relative z-10" style={{ padding: 'clamp(20px, 1.7vw, 34px) clamp(18px, 1.45vw, 28px) clamp(20px, 1.6vw, 30px)' }}>
                <div className="relative" style={{ borderRadius: '5.28px', overflow: 'hidden', height: 'clamp(180px, 16vw, 247px)' }}>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="h-full w-full"
                    style={{ objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: 'clamp(70px, 7vw, 112px)',
                      background: 'linear-gradient(to top, rgba(77,214,196,0.8) 0.443%, rgba(77,214,196,0) 100%)',
                    }}
                  />
                </div>

                <div style={{ marginTop: 'clamp(16px, 1.25vw, 23px)' }}>
                  <h3
                    className="font-nexa capitalize"
                    style={{ color: '#1863da', fontSize: 'clamp(20px, 1.5vw, 28.15px)', lineHeight: '1.25' }}
                  >
                    {blog.title}
                  </h3>
                  <p
                    className="font-metro"
                    style={{ color: '#929292', fontSize: 'clamp(12px, 0.86vw, 16.2px)', lineHeight: '1.55', marginTop: 'clamp(6px, 0.45vw, 8px)' }}
                  >
                    {blog.date}
                  </p>
                  <p
                    className="font-metro"
                    style={{ color: '#000', fontSize: 'clamp(12px, 0.86vw, 16.2px)', lineHeight: '1.55', marginTop: 'clamp(4px, 0.3vw, 6px)' }}
                  >
                    {blog.desc}
                  </p>
                  <a
                    href="#"
                    className="font-metro"
                    style={{
                      display: 'block',
                      color: '#1863da',
                      fontSize: 'clamp(12px, 0.86vw, 16.2px)',
                      lineHeight: '1.55',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      marginTop: 'clamp(12px, 0.9vw, 16px)',
                      textAlign: 'right',
                    }}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
