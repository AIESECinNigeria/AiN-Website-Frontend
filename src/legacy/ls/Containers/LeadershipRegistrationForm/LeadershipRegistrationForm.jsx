"use client";
import { useState } from 'react';
import './LeadershipFormStyles.css'
import SuccessView from '../../Components/LSSuccess/SuccessView';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    occupation: '',
    state_residence: '',
    school: '',
    expectations: '',
    sdg_knowledge: '',
    join_event: '',
    hear_about_event: '',
    gender: '',
    age: '',
    aiesecer: '',
    join_aiesec: '',
    attendance: '',
  });

  const states = [
    'Abia',
    'Abuja',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Submit');
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  // const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      if (formData[field] === '') {
        newErrors[field] = 'This field is required';
        isValid = false;
      } else {
        newErrors[field] = '';
      }
    });

    if (formData.email !== '' && !isValidEmail(formData.email)) {
      newErrors.email = 'This email is not valid.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      submitForm();
      setButtonText('Loading');
    } else {
      notification('error', 'Error', 'There was an error, please check your fields');
    }
  };

  const submitForm = () => {
    fetch('https://ain-backend.fly.dev/api/register_delegate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          setButtonText('Submit');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.detail === 'registration success') {
          setMessage(`
            <div class="my-5 text-center">
              <h3 class="lg:text-4xl text-xl font-semibold" id="modal-title">
                You've registered to attend Leadership Summit 2023
              </h3>
              <div class="flex justify-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M7.29289 19.7071C7.68342 20.0976 8.31658 20.0976 8.70711 19.7071L15.0711 13.3431C15.4616 12.9526 15.4616 12.3195 15.0711 11.9289C14.6805 11.5384 14.0474 11.5384 13.6569 11.9289L8 17.5858L2.34315 11.9289C1.95262 11.5384 1.31946 11.5384 0.928932 11.9289C0.538407 12.3195 0.538407 12.9526 0.928932 13.3431L7.29289 19.7071ZM7 0L7 19L9 19L9 0L7 0Z" fill="white"/>
                </svg>
              </div>
              <div class="my-2">
                <p class="text-base lg:text-xl mx-auto max-w-sm">Check your registered email for event details.</p>
              </div>
              <h3 class="lg:text-2xl text-xl font-semibold my-10">See you there!</h3>
              <a href="/" class="underline text-prime">Home</a>
            </div>
          `);
          setModal(true);
          setFormData({
            email: '',
            name: '',
            phone: '',
            occupation: '',
            state_residence: '',
            school: '',
            expectations: '',
            sdg_knowledge: '',
            join_event: '',
            hear_about_event: '',
            gender: '',
            age: '',
            aiesecer: '',
            join_aiesec: '',
            attendance: '',
          });
          setButtonText('Submit');
        } else if (data && data.detail === 'already registered') {
          notification('error', 'Error', 'This email already exists with us');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        notification('error', 'Error', 'There was a problem with the fetch operation.');
        setButtonText('Submit');
      });
  };

  const notification = (type, title, message) => {
    new window.Notify({
      status: type,
      title: title,
      text: message,
      effect: 'slide',
      speed: 2000,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 5000,
      gap: 100,
      distance: 20,
      type: 1,
      position: 'right top',
    });
  };

  return (
    <div>
      <section className="text-white overflow-x-hidden relative" id="registerbanner">
        <div className="container mx-auto max-w-7xl px-6 xl:px-0 relative">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validateForm();
            }}
            id="registerForm"
          >
            <p className="text-base lg:text-xl text-center my-10 font-normal">
              The registration form takes less than <span className="text-prime font-medium">3 minutes</span> to fill.
              Let's get to it.
            </p>

            <div className="lg:px-60">
              {[
                { name: 'name', placeholder: 'Full name' },
                { name: 'email', placeholder: 'Email address', type: 'email' },
                { name: 'phone', placeholder: 'Phone number' },
              ].map((field, index) => (
                <div key={index} className="form-inputs my-10 lg:my-20">
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                  />
                  <div className="text-danger">{errors[field.name]}</div>
                </div>
              ))}

              <div className="form-inputs my-10 lg:my-20">
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <div className="text-danger">{errors.gender}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="age" value={formData.age} onChange={handleInputChange}>
                  <option value="">Age</option>
                  <option value="Below 18">Below 18</option>
                  <option value="18 - 21">18 - 21</option>
                  <option value="22 - 25">22 - 25</option>
                  <option value="26 - 29">22 - 29</option>
                  <option value="30+">30+</option>
                </select>
                <div className="text-danger">{errors.age}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="occupation" value={formData.occupation} onChange={handleInputChange}>
                  <option value="">Occupation</option>
                  <option value="Student">Student</option>
                  <option value="Corps Member">Corps Member</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Employed">Employed</option>
                </select>
                <div className="text-danger">{errors.occupation}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="state_residence" value={formData.state_residence} onChange={handleInputChange}>
                  <option value="">State of Residence</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="text-danger">{errors.state_residence}</div>
              </div>

              {[
                { name: 'school', placeholder: "If you're a student, please specify your school" },
                // { name: 'state_residence', placeholder: 'State of Residence' },
                { name: 'expectations', placeholder: 'What are your expectations from this event?' },
                { name: 'sdg_knowledge', placeholder: 'What do you know about SDGs 3, 8, 11, and 17?' },
              ].map((field, index) => (
                <div key={index} className="form-inputs my-10 lg:my-20">
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                  />
                  <div className="text-danger">{errors[field.name]}</div>
                </div>
              ))}

              <div className="form-inputs my-10 lg:my-20">
                <select name="attendance" value={formData.attendance} onChange={handleInputChange}>
                  <option value="">How sure are you of attending Leadership Summit?</option>
                  <option value="Very sure">Very sure</option>
                  <option value="Maybe">Maybe</option>
                  <option value="Not sure">Not at all</option>
                </select>
                <div className="text-danger">{errors.attendance}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="aiesecer" value={formData.aiesecer} onChange={handleInputChange}>
                  <option value="">Are you an AIESECer?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Alumni">Alumni</option>
                </select>
                <div className="text-danger">{errors.aiesecer}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="hear_about_event" value={formData.hear_about_event} onChange={handleInputChange}>
                  <option value="">How did you hear about this event?</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Facebook">Facebook</option>
                  <option value="TikTok">TikTok</option>
                  <option value="IG">IG</option>
                  <option value="X">X</option>
                  <option value="Word of mouth">Word of mouth</option>
                </select>
                <div className="text-danger">{errors.hear_about_event}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="join_event" value={formData.join_event} onChange={handleInputChange}>
                  <option value="">How will you join the event?</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Online">Online</option>
                </select>
                <div className="text-danger">{errors.join_event}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20">
                <select name="join_aiesec" value={formData.join_event} onChange={handleInputChange}>
                  <option value="">Would you like to join AIESEC?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="text-danger">{errors.join_event}</div>
              </div>

              <div className="form-inputs my-10 lg:my-20 mx-auto fcd max-w-sm">
                <button
                  type="submit"
                  className="flex justify-center items-center primary-btn border border-white text-black font-semibold text-3xl w-full"
                  disabled={buttonText !== 'Submit'}
                >
                  {buttonText === 'Submit' ? (
                    <div>{buttonText}</div>
                  ) : (
                    <>
                      Loading
                      <svg className="spinner animate-spin ms-2" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {modal && <SuccessView message={message} />}
    </div>
  );
};

export default RegisterForm;
