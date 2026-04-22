import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import bg1 from '../../assets/images/blog-bg-1.svg';
import bg2 from '../../assets/images/blog-bg-2.svg';

const blogs = [
  { img: blog1, bg: bg1, title: 'National Technology Week', date: 'May 11, 2023', desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.' },
  { img: blog2, bg: bg2, title: 'National Technology Week', date: 'May 11, 2023', desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.' },
  { img: blog3, bg: bg1, title: 'National Technology Week', date: 'May 11, 2023', desc: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.' },
];

export default function BlogsSection() {
  return (
    <section className="w-full" style={{ background: '#f5fafa', paddingTop: '94px', paddingBottom: '0' }} id="blogs">
      <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 200px' }}>
        <h2
          className="font-nexa text-center capitalize"
          style={{ fontSize: '68px', lineHeight: '64px', marginBottom: '102px' }}
        >
          <span style={{ color: '#000' }}>Our </span>
          <span style={{ color: '#1863da' }}>Blogs</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '19px' }}>
          {blogs.map((blog, i) => (
            <div key={i} className="relative" style={{ height: '573px' }}>
              {/* Cut-corner card background */}
              <img
                src={blog.bg}
                alt=""
                className="absolute inset-0 w-full h-full"
                style={{ display: 'block' }}
              />

              <div className="relative z-10" style={{ padding: '34px 28px 0 28px' }}>
                {/* Image with teal gradient overlay */}
                <div className="relative" style={{ borderRadius: '5.28px', overflow: 'hidden', height: '247px' }}>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full"
                    style={{ objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: '112px',
                      background: 'linear-gradient(to top, rgba(77,214,196,0.8) 0.443%, rgba(77,214,196,0) 100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ marginTop: '23px' }}>
                  <h3
                    className="font-nexa capitalize"
                    style={{ color: '#1863da', fontSize: '28.15px', lineHeight: '49.83px' }}
                  >
                    {blog.title}
                  </h3>
                  <p
                    className="font-metro"
                    style={{ color: '#929292', fontSize: '16.2px', lineHeight: '25.12px' }}
                  >
                    {blog.date}
                  </p>
                  <p
                    className="font-metro"
                    style={{ color: '#000', fontSize: '16.2px', lineHeight: '25.12px', marginTop: '2px' }}
                  >
                    {blog.desc}
                  </p>
                  <a
                    href="#"
                    className="font-metro"
                    style={{
                      display: 'block',
                      color: '#1863da',
                      fontSize: '16.2px',
                      lineHeight: '25.12px',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      marginTop: '8px',
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
