// import HeaderText from '../../Components/HeaderText/HeaderText';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import classes from './NvHomeVolunteers.module.css';
import { cld } from '@/lib/cloudinary';
const testimonial1 = cld('ain/nv/testimonial1');
const testimonial2 = cld('ain/nv/testimonial2');
const testimonial3 = cld('ain/nv/testimonial3');
const vector7 = cld('ain/nv/vector7');
const vector8 = cld('ain/nv/vector8');

const NvHomeVolunteers = () => {
  // States
  const testimonials = [
    {
      name: 'Bright Uzosike',
      caption:
        'There is more happiness in giving than there is in receiving. No matter how small you give to those in need, it goes a long way to put a smile on their faces.',
      image: testimonial1,
    },

    {
      name: 'Deborah',
      caption:
        'Working and relating to the children. It was always exciting to see them work on projects independently and come out with excellent results.',
      image: testimonial2,
    },

    {
      name: 'Kashimana',
      caption:
        'My experience was one of the best I have ever had. From 100% support from the team to learning about a whole new diverse culture. ',
      image: testimonial3,
    },
  ];

  return (
    <div className={classes.container}>
      {/* <HeaderText
        title={
          <>
            What they had
            <br />
            to say!
          </>
        }
        caption="The Volunteers"
        isCentered
      /> */}
      <div className={classes.volunteers}>
        <p>The Volunteers</p>
        <h4>
          What they had
          <br /> to <HalfHighlight color="#F4BE60">say!</HalfHighlight>
        </h4>
      </div>

      <div className={classes.testimonoalSection}>
        {testimonials.map((data, i) => {
          const cardBackground =
            i === 0 ? vector7 : i === 1 ? vector8 : i === 2 ? vector7 : null;

          return (
            <div
              className={classes.testmonial}
              key={i}
              style={
                cardBackground
                  ? {
                      backgroundImage: `url("${cardBackground}")`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }
                  : undefined
              }
            >
              <img src={data.image} alt={data.name} />
              <div>{data.name}</div>
              <div>{data.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvHomeVolunteers;
