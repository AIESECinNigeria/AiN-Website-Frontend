"use client";
import { useState } from "react";
import toast from "@/legacy/gmw/lib/toast";

interface GmwFormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  school: string;
  closest_school: string;
  faculty: string;
  level: string;
  knowledge: string;
  hear_about_gmw: string;
  questions: string;
}

interface ApiError extends Error {
  response?: { data: unknown };
}

const GmwWaitlistForm = () => {
  const [formData, setFormData] = useState<GmwFormData>({
    name: "",
    email: "",
    phone: "",
    state: "",
    school: "",
    closest_school: "",
    faculty: "",
    level: "",
    knowledge: "",
    hear_about_gmw: "",
    questions: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const states: string[] = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory",
  ];

  const referralSources: string[] = [
    "Friends/Colleagues",
    "Email/Newsletter",
    "AIESEC Event",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "X (formerly Twitter)",
    "WhatsApp",
    "TikTok",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields: (keyof GmwFormData)[] = [
      "name",
      "email",
      "phone",
      "state",
    ];
    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        toast.error(`Please fill in the ${field}`);
        setLoading(false);
        return;
      }
    }

    console.log("Submitting Data:", formData);
    const payload = { ...formData, email: String(formData.email) };
    fetch("https://ain-backend.fly.dev/api/gmw2026/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          const error: ApiError = new Error("Request failed");
          error.response = { data };
          throw error;
        }
        return { data };
      })
      .then((res) => {
        toast.success(res.data.detail);
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          school: "",
          closest_school: "",
          faculty: "",
          level: "",
          knowledge: "",
          hear_about_gmw: "",
          questions: "",
        });
        setIsSubmitted(true);
      })
      .catch((err) => {
        toast.error(err.response?.data?.detail || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClosePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col items-center">
      {!isSubmitted ? (
        <form
          className="flex flex-col gap-8 w-full md:w-[60%] pr-2"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="italic">What should we call you at GMW?</label>
            <input
              type="text"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292]  italic shadow-[4px_4px_0px_0px_#000]`}
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="italic">Your Email Address</label>
            <input
              type="email"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292]  italic shadow-[4px_4px_0px_0px_#000]`}
              placeholder="emailaddress@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="italic">What's your phone number?</label>
            <input
              type="number"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000] appearance-none`}
              placeholder="0801234567"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="italic">What state is your school in?</label>
            <select
              className={`bg-[#FFF0B7] mt-3  px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option value={state} key={index}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="italic">What school do you attend?</label>
            <input
              type="text"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              placeholder="Your school"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </div>

          {/* {formData.state === 'Others' && (
            <div>
              <label className="italic">Please specify your school</label>
              <input
                type="text"
                className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
                placeholder="Your school"
                name="school"
                value={formData.school}
                onChange={handleChange}
              />
            </div>
          )} */}

          <div>
            <label className="italic">What faculty are you in School?</label>
            <input
              type="text"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              placeholder="Your faculty"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="italic">What level are you in?</label>
            <select
              className={`bg-[#FFF0B7] mt-3  px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Level
              </option>
              <option value="100l">100</option>
              <option value="200l">200</option>
              <option value="300l">300</option>
              <option value="400l">400</option>
              <option value="500l">500</option>
              <option value="600l">600</option>
              <option value="PG">Post Graduate</option>
              <option value="N/A">Not a Student</option>
            </select>
          </div>

          <div>
            <label className="italic">
              Select your institution or the nearest university where you want
              to participate in Global Money Week.
            </label>
            <select
              className={`bg-[#FFF0B7] mt-3  px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              name="closest_school"
              value={formData.closest_school}
              onChange={handleChange}
            >
              <option value="">Select a school</option>
              <option value="Federal University of Technology, Abeokuta">
                Federal University of Technology, Abeokuta
              </option>
              <option value="University of Abuja">University of Abuja</option>
              <option value="Federal University of Technology, Akure">
                Federal University of Technology, Akure
              </option>
              <option value="University of Benin">University of Benin</option>
              <option value="University of Calabar">
                University of Calabar
              </option>
              <option value="University of Ilorin">University of Ilorin</option>
              <option value="University of Lagos">University of Lagos</option>
              <option value="Obafemi Awolowo University, Ile-Ife">
                Obafemi Awolowo University, Ile-Ife
              </option>
              <option value="University of Ibadan">University of Ibadan</option>
              <option value="University of Nigeria, Nsukka">
                University of Nigeria, Nsukka
              </option>
              <option value="University of PortHarchourt">
                University of PortHarchourt
              </option>
              <option value="University of Jos">University of Jos</option>
              <option value="Benue State University">
                Benue State University
              </option>
            </select>
          </div>

          <div>
            <label className="italic">
              How would you describe your financial knowledge?
            </label>
            <select
              className={`bg-[#FFF0B7] mt-3  px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              name="knowledge"
              value={formData.knowledge}
              onChange={handleChange}
            >
              <option value="">Select financial knowledge</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="italic">How did you hear about GMW 2026?</label>
            <select
              className={`bg-[#FFF0B7] mt-3  px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              name="hear_about_gmw"
              value={formData.hear_about_gmw}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {referralSources.map((source, index) => (
                <option value={source} key={index}>
                  {source}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="italic">
              Do you have any specific questions or topics you'd like addressed
              during the event?
            </label>
            <input
              type="text"
              className={`bg-[#FFF0B7] mt-3 px-6 py-2 border border-[#20252F] text-base text-[#929292] italic shadow-[4px_4px_0px_0px_#000]`}
              placeholder="Any questions?"
              name="questions"
              value={formData.questions}
              onChange={handleChange}
            />
          </div>
          <button
            className="mt-10 bg-[#008F4F] text-white px-10 py-3 rounded-lg cursor-pointer hover:opacity-55 w-[55%] md:w-[30%] self-center flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Finish"
            )}
          </button>
        </form>
      ) : (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90"
          onClick={handleClosePopup}
        >
          <div
            className="flex flex-col gap-4 bg-white items-center justify-center p-8 rounded-lg shadow-lg w-[95%] sm:w-[70%] lg:w-[50%] h-[240px] sm:h-[200px] md:h-[300px] lg:h-[240px] xl:h-[200px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl md:text-5xl font-bold leading-8 md:leading-9">
              Thank you for your interest in attending Global Money Week!
            </h2>
            <p className="italic text-sm md:text-xl leading-6 md:leading-8 text-[#20252F]">
              Please check your email for a confirmation message with further
              information. We look forward to hosting you!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GmwWaitlistForm;
