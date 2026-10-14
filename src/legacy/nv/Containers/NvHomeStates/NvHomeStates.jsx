import HeaderText from '../../Components/HeaderText/HeaderText';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import classes from './NvHomeStates.module.css';

export const states = [
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

export const cities = [
  'Abuja',
  'Benue',
  'Cross-River',
  'Edo',
  'Enugu',
  'Kwara',
  'Lagos',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
];

const NvHomeStates = () => {
  const citiesInfinite = [...cities];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {/* <HeaderText
          title={
            <>
              Live a
              <br /> different reality.
            </>
          }
          caption="Choose a location"
        /> */}
        <div className={classes.chooseLocation}>
          <p>Choose a location</p>
          <h4>
            A different
            <br /> <HalfHighlight color="#F15A29">Reality</HalfHighlight>
          </h4>
        </div>

        <p>
          A multicultural experience is one of the ways AIESEC build leaders all
          around the world. Volunteer in a completely new region, away from your
          residence, in Nigeria and experience life from their eyes. Experience
          a new culture and a new life with AIESEC.
        </p>
      </div>

      <div className={classes.citySection}>
        {citiesInfinite.map((data, i) => {
          return (
            <div key={i} className={classes.city}>
              <div>{data}</div>
            </div>
          );
        })}
      </div>

      <div className={classes.citySection}>
        {citiesInfinite.reverse().map((data, i) => {
          return (
            <div key={i} className={classes.city}>
              <div>{data}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvHomeStates;
