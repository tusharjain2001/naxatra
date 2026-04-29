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
      className="w-full bg-[#f5fafa] pt-[clamp(58px,5vw,94px)] pb-[clamp(54px,4.8vw,90px)] max-[720px]:pt-0 max-[720px]:pb-10"
      id="blogs"
    >
      <div className="mx-auto max-w-[1840px] px-[clamp(20px,4.2vw,80px)] max-[720px]:px-4">
        <h2 className="mb-[clamp(34px,3.9vw,72px)] text-center font-nexa text-[clamp(34px,3.6vw,68px)] capitalize leading-[1.05] max-[720px]:mb-7 max-[720px]:text-[26px]">
          <span className="text-black">Our </span>
          <span className="text-[#1863da]">Blogs</span>
        </h2>

        <div className="grid grid-cols-3 gap-[clamp(16px,1.4vw,26px)] max-[980px]:grid-cols-1 max-[720px]:mx-auto max-[720px]:max-w-[297.289px] max-[720px]:gap-5">
          {blogs.map((blog, i) => (
            <div key={i} className="relative min-h-[clamp(390px,30vw,528px)] max-[720px]:h-[345.193px] max-[720px]:min-h-0 max-[720px]:w-[297.289px]">
              <img
                src={blog.bg}
                alt=""
                className="absolute inset-0 h-full w-full"
                style={{ display: 'block' }}
              />

              <div className="relative z-10 px-[clamp(18px,1.45vw,28px)] pt-[clamp(20px,1.7vw,34px)] pb-[clamp(20px,1.6vw,30px)] max-[720px]:px-[16.5px] max-[720px]:pt-[15px] max-[720px]:pb-[18px]">
                <div className="relative h-[clamp(180px,16vw,247px)] overflow-hidden rounded-[5.28px] max-[720px]:mx-auto max-[720px]:h-[148.826px] max-[720px]:w-[263.756px] max-[720px]:rounded-[4px]">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    style={{ display: 'block' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: 'clamp(70px, 7vw, 112px)',
                      background: 'linear-gradient(to top, rgba(77,214,196,0.8) 0.443%, rgba(77,214,196,0) 100%)',
                    }}
                  />
                </div>

                <div className="mt-[clamp(16px,1.25vw,23px)] max-[720px]:mt-4">
                  <h3 className="font-nexa text-[28.15px] capitalize leading-[1.25] text-[#1863da] max-[720px]:text-[16px]">
                    {blog.title}
                  </h3>
                  <p className="mt-[clamp(6px,0.45vw,8px)] font-metro text-[16.2px] leading-[1.55] text-[#929292] max-[720px]:text-[10px]">
                    {blog.date}
                  </p>
                  <p className="mt-[clamp(4px,0.3vw,6px)] font-metro text-[16.2px] leading-[1.55] text-black max-[720px]:text-[10px]">
                    {blog.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-[clamp(12px,0.9vw,16px)] block text-right font-metro text-[16.2px] leading-[1.55] text-[#1863da] no-underline max-[720px]:text-[10px]"
                  >
                    Read More <span aria-hidden="true">-&gt;</span>
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
