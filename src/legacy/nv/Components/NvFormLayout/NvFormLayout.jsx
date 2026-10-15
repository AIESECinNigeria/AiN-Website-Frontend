import { cld } from '@/lib/cloudinary';
import classes from './NvFormLayout.module.css';

const vector10 = cld('ain/nv/vector10');
const vector11 = cld('ain/nv/vector11');

const NvFormLayout = ({ children, notShowFooter }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.upperSection}>
          <div className={classes.headerContent}>
            <h4>
              SIGN UP TO BE A <br className={classes.mobileBreak} />
              <span>NATIONAL VOLUNTEER</span>
            </h4>
            <img src={vector10} alt="" className={classes.headerVector} />
          </div>
        </div>
        <img src={vector11} alt="" className={classes.vector11} />
        <div className={classes.lowerSection}>
          <div>
            <p>
              Thank you for indicating interest to be a part of the National
              Volunteer Program.
            </p>
            <p>
              Please provide us with the necessary information required to
              curate an amazing experience for you. We can't wait to have you!
            </p>

            <i>
              Disclaimer: You cannot apply for a project in your city! Only
              apply for projects in other states
            </i>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default NvFormLayout;
