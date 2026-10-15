"use client";
import classes from './NvProjectsPageProjects.module.css';
import { useState } from 'react';
import { cld } from '@/lib/cloudinary';
import ProjectModal from './ProjectModal';
const project1 = cld('ain/nv/project1');
const project2 = cld('ain/nv/project2');
const project3 = cld('ain/nv/project3');
const project4 = cld('ain/nv/project4');
const project5 = cld('ain/nv/project5');
const project6 = cld('ain/nv/project6');
const project7 = cld('ain/nv/project7');
const project8 = cld('ain/nv/project8');
const project9 = cld('ain/nv/project9');
const project10 = cld('ain/nv/project10');
const project12 = cld('ain/nv/project12');
const project13 = cld('ain/nv/project13');
const project14 = cld('ain/nv/project14');
const project15 = cld('ain/nv/project15');
const project16 = cld('ain/nv/project16');
const project17 = cld('ain/nv/project17');
const project18 = cld('ain/nv/project2');
const project19 = cld('ain/nv/project19');
const project20 = cld('ain/nv/project20');
const project21 = cld('ain/nv/project21');
const project22 = cld('ain/nv/project22');
const project23 = cld('ain/nv/project23');
const project24 = cld('ain/nv/project24');
const project25 = cld('ain/nv/project25');
const project26 = cld('ain/nv/project26');
const project27 = cld('ain/nv/project27');
const project28 = cld('ain/nv/project28');
const rightArrow = cld('ain/nv/rightArrow');
const arrow = cld('ain/nv/arrow');
import ApplyModal from './ApplyModal';
import Modal from './Modal';

const NvProjectsPageProjects = ({ selectedState, lcData }) => {
  const projects = [
    {
      title: 'Project Rural Child Education',
      image: project1,
      location: 'Abeokuta',
      desc: 'This project aims to help to educate the kids in low-income communities with basic numearcy and literacy knowledge who have never been to schools.\nVolunteers wil assist in teaching the kids. ',
      req: 'Basic knowledge of literacy and numeracy. Ability to communicate in local language (Yoruba). Volunteers will assist in teaching the kids. ',
      side: ' Meal on arrival, Send forth party, Visit to FUNAAB zoo',
      hours: '3 weekdays and Saturday',
      duration: '2 weeks',
    },
    {
      title: 'Educating a Child',
      image: project2,
      location: 'Ife',
      desc: 'The project is aimed at setting up extracurricular activities which includes sex education, career and leadership development and debate. Equipping school students with the knowledge of these things which are crucial but are not taught in schools.\nVolunteers will enlighten the students on basic academic education, career and leadership development and engage them in debating. ',
      req: 'Must have passion about child education, Must have basic knowledge of sex education, career and leadership development and debating.',
      side: ' Certificate of Participation, Exciting Tours, Movie Night',
      hours: 'Mon - Fri ; 8am - 4pm (8am - 1pm on Fridays)',
      duration: '2 weeks',
    },
    {
      title: 'Early Child Education',
      image: project24,
      location: 'Lagos',
      desc: 'An all-around project that includes providing good education  to children who do not have access to education in the Ilaje, Bariga community.\nVolunteers will help team young children at Ilaje, Bariga and help provide education for children that do not have access to it. ',
      req: 'Must be good with kids, Must have good communication skills.',
      side: 'Cross-cultural experience, Certificate of participation.',
      hours: 'Monday-Friday: 9am -4pm',
      duration: '2 weeks',
    },
    {
      title: 'HIV Hotline and Counseling',
      image: project10,
      location: 'Lagos',
      desc: 'A telephone hotline project that involves receiving calls from people all over the country who need information about HIV/AIDS. The goal is to provide factual, helpful information and possibly connect them to the help they need.  it also caters to people who need counselling on how to take tests, go for checkups and more.\nVolunteers will work at the Hope for HIV/AIDs office at Mushin to receive calls made by individuals that want to learn or make research about HIV/AIDs. ',
      req: 'Basic Knowledge of the English Language, Good communication skills. ',
      hours: ' Monday - Friday : 9am to 4pm',
      side: 'Certificate of participation, Movie night, Game night, Meal on arrival',
      duration: '2 weeks',
    },
    {
      title: 'Helping Hands',
      image: project22,
      location: 'Calabar',
      desc: 'The project aims to contribute to SDG 3 by contributing to the lives of disabled adults and children, catering for them and educate them further on their disabilities and things they can do to improve.\nVolunteers will take roles of Admin and project assistant and child tutor for the initiative and  also come up with different events that can be run for the initiative. ',
      req: '"Good communication skills, Adaptabilty, Patience',
      side: 'Meal on arrival, certificate of participation, cultural experience, hangout ',
      hours: 'Monday - Friday 8am - 4pm',
      duration: '2 weeks',
    },
    {
      title: 'Bloom',
      image: project18,
      location: 'Benin',
      desc: 'SDG 4. The project aims to ensure inclusive, equitable and improved  quality education and promote learning opportunities for members of the community aimed in urban areas.\nVolunteers are to equip students with critical life skills beyond the classroom  and engage students on activities essential for thriving in the modern urban society. ',
      req: 'Passion for child education, Good communication skills,  Adaptabilty and patience.',
      side: 'Cross-Cultural Experience, Accomodation,  Tour, Certificate of Participation, Hangouts',
      hours: '3 weekdays',
      duration: '2 weeks',
    },
    {
      title: 'Ignite',
      image: project27,
      location: 'Ibadan',
      desc: 'This project supports SDG 4 by providing children with creative and digital learning opportunities. It features interactive sessions in arts, ICT, and extracurriculars like chess to enhance creativity, confidence, and academic growth. The project also introduces basic sustainability concepts to foster environmental awareness and responsible behavior among students.\nVolunteers will support children’s learning and personal development by engaging them in fun, educational, and interactive activities. Teach in their area of expertise (e.g., digital skills, music, etc.) and assist with classroom tasks, extracurricular sessions, and day-to-day school engagements. Help raise awareness on basic sustainability practices, encouraging environmentally responsible behavior among students.',
      req: 'Passionate about impacting young learners, Value-driven and enthusiastic, Patient and able to work well with children, Preferably has a background or interest in the arts (e.g., music, visual arts, drama), Good communication and teamwork skills, Age: 18–30 years',
      side: ' Cross-cultural experience, Fun',
      hours: '3 weekdays',
      duration: '2 weeks',
    },
    {
      title: 'Light',
      image: project19,
      location: 'Calabar',
      desc: 'This project supports street children by providing counselling, emotional support, and fun educational activities. Volunteers will visit them twice a week with Street Priests to interact, learn about their lives, and engage them in activities that build confidence and life skills.\nAs a volunteer, you will engage street-connected children in fun and educational activities that boost their confidence, refine their behavior, and prepare them for reintegration into school and society. You will provide emotional support, help monitor their wellbeing, and assist in reuniting children with families where possible. Volunteers may also guide children in developing simple life skills and participate in occasional skill acquisition sessions to equip them for a brighter future.',
      req: 'Passion for helping children. Good communication and teamwork skills. Openness to learn (training provided). Respect for diversity, no discrimination of any kind.',
      side: ' Cross-cultural experience and Hangout.',
      hours: 'Mondays - Fridays 10am to 4pm',
      duration: '2 weeks',
    },
    {
      title: 'Bright Minds',
      image: project25,
      location: 'Ibadan',
      desc: 'This project aims to empower children in orphanages by teaching a mix of tech skills and creative skills. By blending digital literacy with artistic expression, the project helps participants develop well-rounded skills for education, self-expression, and future career paths.\nVolunteers will support children’s learning and personal development by engaging them in fun, educational, and interactive activities. ',
      req: 'Passion for child education, Good communication skills, Adaptability, Patience',
      side: ' Cross-cultural experience and Hangout.',
      hours: 'Mondays, Wednesdays, Fridays',
      duration: '2 weeks',
    },
    {
      title: 'Nurture',
      image: project14,
      location: 'Benin',
      desc: 'The project seeks to improve access to quality education for children in orphanages by blending academic tutoring with extracurricular and life skills training. The project also aims to create a safe space where children can learn, play, and imagine possibilities beyond their present circumstances.\nVolunteers will work with the children to strengthen their literacy, and communication skills while also promoting creativity, self-expression, and personal development.',
      req: 'Passion for child education, Good communication skills, Patience and adaptability, Enthusiasm and Empathy, Creativity.',
      side: ' Cross-cultural experience, Hangout, Certificate of Participation, Accommodation, Tour.',
      hours: '3 days a week',
      duration: '2 weeks',
    },
    {
      title: 'Techit Up!',
      image: project24,
      location: 'Enugu',
      desc: 'This project supports the mission of the Borderless Tech Club in UNN to develop people through skill-based learning while solving tech-based problems that exist around them. Exchange participants for this project are ones who have specific tech skills and look to improve by working on real-world hands-on projects.\nThe volunteer is to work on the available project embarked on by the Tech Club and will be fitted into a team based on their specialty and interest to grow. Any tech skill is encouraged.',
      req: 'Basic proficiency in any tech skill, Proficiency in English writing and communication, Ability to meet project deadlines and adaptability to achieve project goals',
      side: 'Cross cultural experience, Hangout, LCMs with AIESEC in Enugu, Certificate of Participation, Accomodation, Tour',
      hours: 'As aligned by the volunteer and OP. Minimum of 3 times in a week.',
      duration: '2 weeks',
    },
    {
      title: 'Unite & Build',
      image: project23,
      location: 'Abuja',
      desc: 'Unite & Build is a strategic volunteer partnership initiative that strengthens NGOs, non-profits, and foundations in their mission to drive community development. The project connects skilled volunteers with partner organizations to provide operational, administrative, and strategic support in roles such as Social Media Management, Administration, Operations and Coordination, Public Relations, and other specialized positions.\nVolunteers will support partner organizations in roles including, but not limited to:\nSocial Media Management: content creation, community engagement, platform analytics.\nAdministration: record-keeping, documentation, scheduling, and coordination.\nOperations & Coordination: project planning, logistics, and operational support.\nPublic Relations: media outreach, communication strategies, stakeholder engagement.\nSkilled Positions: any role aligned with the volunteer’s area of expertise. Volunteers will develop and present actionable solutions to address organizational challenges, and collaborate with team members and partner staff to implement improvement initiatives',
      req: 'Background in business marketing administration or related fields, Strong analytical and problem-solving skills, Experience in project management or NGO operations is a plus. Ability to communicate effectively and work collaboratively with stakeholders.',
      side: ' Access to performance based incentives/ stipends. Access to industry seminars and professional development programs. Sponsored professional certifications',
      hours:
        'Weekly schedule. Time: 9AM - 4PM. Monday, Tuesday, Friday (3 physical days). Flexible/Hybrid Days: Wednesday, Thursday, and Saturday (available for both remote tasks and scheduled physical activities as needed).',
      duration: '2 weeks',
    },
    {
      title: 'Tech for Impact',
      image: project24,
      location: 'Ibadan',
      desc: 'This project is focused on empowering young people with digital and tech skills. It aims to bridge the gap in technology knowledge by providing training in areas like graphic design, coding, HTML, and other programming languages.\nVolunteers will teach and guide participants, helping them gain practical skills that can improve their opportunities in education, employment, and entrepreneurship. The project also promotes digital literacy and prepares individuals for the modern tech-driven world.',
      req: 'Basic knowledge of tech skills, Good communication and teaching ability, Patience and willingness to help others learn, Teamwork and collaboration, Creativity and problem-solving skills, Commitment and responsibility',
      side: 'Cross cultural Experience, weekend hangouts. LCMs with AIESEC in Ibadan, Fun',
      hours: 'Monday, Wednesday and Friday',
      duration: '2 weeks',
    },
    {
      title: 'Build with HSKI',
      image: project4,
      location: 'Ilorin',
      desc: 'This project focuses on supporting children in a shelter in Ilorin through fun and engaging creative activities. Volunteers will facilitate sessions like art, dance, drama, and storytelling to help children build confidence, express themselves, and develop important life skills. The project also emphasizes creating a safe, inclusive space where children feel supported, valued, and inspired.\n Volunteers will plan and facilitate creative sessions such as drawing, painting, crafts, dance, drama, photography, and storytelling, encourage self-expression, creativity, and confidence among the children at the shelter, use engaging activities to develop children’s critical thinking, problem-solving, teamwork, and communication skills, actively participate in the facility’s scheduled activities and support ongoing programs, and build meaningful connections with the children through interaction, mentorship, and emotional support.',
      req: 'Interest in working with children and community development Good communication and interpersonal skills Creative and open to facilitating fun activities Patient, empathetic, and supportive attitude Ability to work in a team and adapt to new environments Basic understanding of child care or teaching (an added advantage) Available for the full duration of the project',
      side: 'Cultural immersion ,Networking with AIL members ,fun hangouts,accommodation ,Certificate of Participation.',
      hours: '3- 4 days in a week(anytime between Monday -Friday)',
      duration: '2 weeks',
    },
    {
      title: 'Bright Roots',
      image: project6,
      location: 'Abuja',
      desc: "Bright Roots is a National Volunteer project (SDG 4.5) that pairs local volunteers with children in orphanages and care homes across Abuja to strengthen literacy, numeracy, and confidence through structured lessons, creative learning activities, and one-on-one mentorship. Volunteers work alongside caregivers to co-build a Teaching Toolkit that keeps the learning going long after each volunteering cycle ends.\n Volunteers will: \nPlan and deliver literacy and numeracy sessions for children in care homes. \nDesign and facilitate creative learning activities (storytelling, art, group games). \nProvide one-on-one mentorship for children who need extra academic support. \nTrack each child's learning progress across the volunteering period Contribute to the Caregiver's Teaching alongside orphanage staff",
      req: "Passion for helping children. Good communication and teamwork skills. Mutual Respect (They are Christians and can accomodate other religions but won't tolerate any form of preaching to the children)",
      side: 'Cross-cultural experience, hangout',
      hours: 'Mondays - Fridays Flexible',
      duration: '2 weeks',
    },
    {
      title: 'Make A Difference ',
      image: project7,
      location: 'Ilorin',
      desc: 'This project aims to contribute to quality education and caregiving by engaging volunteers to support students at To Omo re Special School through classroom assistance, therapy support, vocational training, and creative activities. Volunteers will work alongside teachers and care staff to provide additional individualized attention, encourage skill development, and support the students’ learning, social, and daily care needs while working within the school’s existing structure.\nVolunteers will support teachers and caregivers with classroom, therapy, vocational, and daily care activities, providing one-on-one or small-group support based on students’ individual needs. They may assist with hygiene, toileting, and general caregiving under staff supervision, as well as participate in creative, music, sports, and recreational activities while following the guidance of school staff.',
      req: 'Volunteers should be patient, compassionate, responsible, and comfortable working with children and young adults with special needs. They should be willing to learn, follow staff instructions, participate actively in school activities, and be comfortable providing basic care and support where required. ',
      side: 'Cross cultural experience',
      hours: '3-4 times per week',
      duration: '2 weeks',
    },
  ];

  const [showPopup, setShowPopup] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const selectedLC = lcData.find((lc) => lc.state === selectedState)?.lc;
  const filteredProjects =
    selectedState && selectedLC && selectedState !== 'All'
      ? projects.filter(
          (project) =>
            project.location.trim().toLowerCase() ===
            selectedLC.trim().toLowerCase()
        )
      : projects;

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  // Function to close the modal
  const handleCloseModal = () => {
    setShowPopup(null);
  };

  return (
    <div className="pt-0 pb-12 bg-[#f4faf5]">
      <div className={classes.container}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((data, i) => (
            <div key={i} className={classes.detailsContainer}>
              <div className="flex flex-col text-black items-center justify-center border border-[#08841B] bg-[#F9F9F9] gap-8 pt-8 min-h-[400px]">
                {/* Title & Location */}
                <div className="text-black text-center">
                  <h3 className={`${classes.projectTitle} font-bold text-xl`}>
                    {data.title}
                  </h3>
                  <p className="font-light text-xl">{data.location}</p>
                </div>

                {/* Background Image Section */}
                <div
                  className="relative h-[280px] bg-cover bg-center flex items-center justify-center rounded-[20px] mt-3 mb-1 mx-auto w-[97%]"
                  style={{ backgroundImage: `url(${data.image})` }}
                >
                  {/* Clickable Details Text */}
                  <Modal>
                    <Modal.Open opens="projectNv">
                      <div className="flex gap-2 items-center justify-center bg-white px-4 py-2 bg-opacity-80 rounded-lg cursor-pointer">
                        <p
                          className="text-black text-base"
                          onClick={() => setShowPopup(data)}
                        >
                          Details
                        </p>
                        <img src={rightArrow} alt="right arrow" />
                      </div>
                    </Modal.Open>
                    <ApplyModal
                      isOpen={!!showPopup}
                      onClose={handleCloseModal}
                      project={showPopup}
                    />
                  </Modal>
                </div>
              </div>

              {/* {selected === data?.title && (
                <div className={classes.detailsBlock}>
                  <p>
                    <span className={classes.detailsText}>Location: </span>
                    {data?.location}
                  </p>
                  <p>
                    <span className={classes.detailsText}>
                      Project Description:
                    </span>
                    <br />
                    {data?.desc}
                  </p>
                  <p>
                    <span className={classes.detailsText}>
                      Project Requirements:
                    </span>
                    <br />
                    {data?.req}
                  </p>
                  <p>
                    <span className={classes.detailsText}>
                      Side Attractions:
                    </span>{' '}
                    <br />
                    {data?.side}
                  </p>
                  <p>
                    <span className={classes.detailsText}>Working Hours: </span>
                    {data?.hours}
                  </p>
                  <p>
                    <span className={classes.detailsText}>Duration: </span>
                    {data?.duration}
                  </p>
                </div>
              )} */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No projects found.</p>
        )}
      </div>

      {!showAllProjects && displayedProjects.length < projects.length && (
        <div
          className={`${classes.seeMoreButton} relative z-10 flex items-center justify-center bg-[#008F4F] text-white rounded-[56px] py-4 mx-auto cursor-pointer w-[80%] sm:w-[60%] md:w-[25%] lg:w-[18%] xl:w-[15%] gap-4`}
          onClick={() => setShowAllProjects((prev) => !prev)}
        >
          <p> See More</p>
          <img src={arrow} alt="slanted arrow" className="w-3 h-3" />
        </div>
      )}
      {/* Project Modal */}
      {/* {showPopup && (
        <ProjectModal
          isOpen={!!showPopup}
          onClose={handleCloseModal}
          project={showPopup}
        />
      )} */}
      {/* {showPopup && (
        <ApplyModal
          isOpen={!!showPopup}
          onClose={handleCloseModal}
          project={showPopup}
        />
      )} */}
    </div>
  );
};

export default NvProjectsPageProjects;
