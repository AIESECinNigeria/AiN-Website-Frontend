import { cld } from '@/lib/cloudinary';

const IYDFeyi = cld('ain/iyd/IYDFeyi');
const IYDMaroh = cld('ain/iyd/IYDMaroh');
const IYDNiel = cld('ain/iyd/IYDNiel');
const TESTIMONIALS = [
  {
    quote:
      "I had a phenomenal experience. I got to meet new people, gain new knowledge and receive real insight from professionals. If you're looking to partake in conversations that spark growth and change your perspective, IYD is definitely the event for you.",
    name: 'Feyi',
    role: 'Graphic Designer',
    avatar: IYDFeyi,
  },
  {
    quote:
      'I had a great time at IYD. The sessions were incredibly engaging and gave me insights about how I wanted to contribute to a more sustainable world. I also got to connect with other driven young people, which was a massive plus!!!',
    name: 'Maroh',
    role: 'Product Designer',
    avatar: IYDMaroh,
  },
  {
    quote:
      "One thing that really stuck with me was the idea that collaboration is the difference between a spark and a wildfire. We also talked about vertical networking, and it made me realize that networking isn't just about chasing people ahead of you. Sometimes, the best people to collaborate with you are already around you.",
    name: 'Niel',
    role: "Niel's Apparel",
    avatar: IYDNiel,
  },
];

const starPatternUrl = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 3 C13 9 15 11 21 12 C15 13 13 15 12 21 C11 15 9 13 3 12 C9 11 11 9 12 3 Z' fill='rgba(255,255,255,0.15)'/></svg>"
)}`;

const IYDTestimonials = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${starPatternUrl}")`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-[42px] lg:text-5xl text-white leading-[36px] md:leading-[72px] tracking-[-4%]">
          What past attendees{' '}
          <span className="italic font-bold text-[#B9FB02]">say</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 p-7 md:p-10 backdrop-blur-sm flex flex-col items-start justify-between gap-6 transition hover:cursor-pointer"
            >
              <p className="text-xl font-medium leading-[120%] tracking-[-2%] text-white italic">
                {t.quote}
              </p>
              <div className="flex gap-3 items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm md:text-lg text-white leading-[120%] tracking-[-2%]">
                    {t.name}
                  </p>
                  <p className="text-xs md:text-base italic text-white leading-[120%] tracking-[-2%]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IYDTestimonials;
