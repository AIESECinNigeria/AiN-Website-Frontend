import type { ReactNode } from "react";

interface TimelineItem {
  title: string;
  date: string;
  content: ReactNode[];
}

const timelineData: TimelineItem[] = [
  {
    title: "Day 1: Pitchathon",
    date: "26th June, 2026",

    content: [
     <>
  Prior to the event, a call for participation will be announced,
  inviting individuals to form teams and develop innovative
  solutions addressing the forum's central theme:{" "}

  <strong>
    Unemployment and Poverty
  </strong>.
</>,

      `The first day of the two day Youth Speak Forum will feature a dynamic Pitchathon session.`,

      `During this session, each team will present their proposed solution, showcasing its relevance, feasibility, and potential impact in tackling these pressing socio-economic challenges.`,
    ],
  },

  {
    title: "Day 2: Youth Speak",
    date: "27th June, 2026",

    content: [
      `The second day will feature the main Youth Speak Forum, bringing together young people to engage in meaningful conversations, share insights, and exchange knowledge on issues that matter to them.`,

      `The session will host experienced professionals and wealth builders who will provide practical guidance on navigating unemployment and creating sustainable pathways to wealth.`,

      `The day will include a mix of keynote speaking sessions, interactive roundtables, and breakout sessions designed to foster collaboration, critical thinking, and actionable outcomes.`,
    ],
  },
];

const YSFTimeline = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADING UNTOUCHED */}

        <h2
          className="
          text-[40px]
          md:text-[56px]
          leading-[120%]
          font-semibold
          font-body
         mb-5 md:mb-20
          "
        >
          YSF 2026{" "}

          <span
            className="
            font-playfair
            italic
            bg-gradient-to-r
            from-[#7552CC]
            via-[#0CB9C1]
            to-[#00C16E]
            text-transparent
            bg-clip-text
            "
          >
            Timeline
          </span>

        </h2>

        {/* BODY */}

        <div className="flex flex-col gap-16 md:gap-20">

          {timelineData.map(
            (item, index) => (

            <div
              key={index}
              className="
              md:grid
              md:grid-cols-[30%_70%]
              md:gap-20
              "
            >

              {/* MOBILE TITLE */}

              <h3
                className="
                md:hidden
                text-2xl
                font-semibold
                font-body
                leading-[120%]
                mb-5
                "
              >
                {item.title}
              </h3>

              {/* DESKTOP LEFT */}

              <div
                className="
                hidden
                md:flex
                flex-col
                items-start
                "
              >

                <h3
                  className="
                  text-[32px]
                  font-semibold
                  font-body
                  leading-[120%]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                  mt-3
                  ml-4
                  flex
                  flex-col
                  flex-1
                  "
                >

                  <p
                    className="
                    text-xl font-semibold leading-[120%] tracking-[-2%]
                    font-body
                    "
                  >
                    {item.date}
                  </p>

                  <div
className="
mt-3
w-[1px]
bg-black
flex-1
self-stretch
"
/>

                </div>

              </div>

              {/* CONTENT */}

              <div
                className="
                flex
                md:block
                "
              >

                {/* MOBILE LINE */}

                <div
                  className="
                  md:hidden
                  flex
                  flex-col
                  items-center mr-5
                  "
                >

                  <div
                    className="
                    w-[1px]
                    bg-black
                    h-full
                    "
                  />

                </div>

                {/* DATE + TEXT */}

                <div
                  className="
                  flex-1
                  flex
                  flex-col
                  gap-6
                  md:gap-10
                  md:w-[80%]
                  "
                >

                  <p
                    className=" mt-3
                    text-xl font-semibold
                    font-body leading-[120%] tracking-[-2%] text-black md:hidden
                    "
                  >
                    {item.date}
                  </p>

                  {item.content.map(
                    (
                      paragraph,
                      i
                    ) => (

                    <p
                      key={i}
                      className="
                      text-lg
                      md:text-[24px]
                      leading-[150%]
                      tracking-[-2%]
                      font-body
                      text-black
                      "
                    >
                      {paragraph}
                    </p>

                  ))}
                  {/* {item.title == "Day 1: Pitchathon" &&
                     <a href="https://bit.ly/PitchYSF26" target="_blank" rel="noopener noreferrer" className="w-[60%] md:w-[40%] block self-start">
  <button className="w-full py-4 md:py-5 rounded-full text-white bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E] text-lg md:text-[28px]">
    Pitch Your Idea
  </button>
</a>
} */}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default YSFTimeline;
