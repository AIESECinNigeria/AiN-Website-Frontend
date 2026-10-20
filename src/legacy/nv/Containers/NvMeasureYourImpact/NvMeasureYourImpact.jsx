"use client";
import { useRouter } from 'next/navigation';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import classes from './NvMeasureYourImpact.module.css';
import { cld } from '@/lib/cloudinary';
const volunteer1 = cld('ain/nv/volunteer1');
const volunteer2 = cld('ain/nv/volunteer2');
const volunteer3 = cld('ain/nv/volunteer3');
const volunteer4 = cld('ain/nv/volunteer4');
const volunteer5 = cld('ain/nv/volunteer5');
const volunteer6 = cld('ain/nv/volunteer6');
const vector3 = cld('ain/nv/vector3');
const vector4 = cld('ain/nv/vector4');
const vector5 = cld('ain/nv/vector5');
const vector6 = cld('ain/nv/vector6');

// TODO: change images to cloudinary
// let volunteer1 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762347/AIESEC/volunteer1_y8tbrd.png';
// let volunteer2 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762345/AIESEC/volunteer2_zpfj6h.png';
// let volunteer3 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762348/AIESEC/volunteer3_rhc8bf.png';
// let volunteer4 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762346/AIESEC/volunteer4_dioynw.png';
// let volunteer5 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762348/AIESEC/volunteer5_wkssds.png';
// let volunteer6 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762346/AIESEC/volunteer6_mbaleu.png';

const NvMeasureYourImpact = () => {
  // Router
  const router = useRouter();

  // Utils
  const why = [
    {
      text: 'Share a smile',
      image: volunteer1,
    },
    {
      text: 'Try new foods',
      image: volunteer2,
    },
    {
      text: 'Change a life',
      image: volunteer3,
    },
    {
      text: 'Build new friendships',
      image: volunteer4,
    },
    {
      text: 'Immerse yourself in new cultures',
      image: volunteer5,
    },
    {
      text: 'Make a difference',
      image: volunteer6,
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.measureImpact}>
        <p>Measure your impact</p>
        <h4>
          Why should you <br />
          <HalfHighlight color="#F4BE60">volunteer?</HalfHighlight>
        </h4>
      </div>
      <div className={classes.whySection}>
        {why.map((data, i) => {
          const words = data.text.split(' ');
          const isFifthItem = i === 4;
          const wrapperClass =
            i === 0
              ? `${classes.cardShell} ${classes.firstShell}`
              : i === 1
              ? `${classes.cardShell} ${classes.secondShell}`
              : classes.cardShell;
          const cardClass =
            i === 0
              ? classes.firstCard
              : i === 1
              ? classes.secondCard
              : classes.standardCard;
          const vectorImage = i === 0 ? vector3 : i === 1 ? vector4 : null;
          const cardContent = (
            <div
              className={cardClass}
              style={{
                background: `url("${data.image}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              {i === 0 && vectorImage ? (
                <img
                  src={vectorImage}
                  alt=""
                  className={classes.cardVectorLeft}
                />
              ) : null}
              {i === 3 ? (
                <img src={vector5} alt="" className={classes.cardVectorBottom} />
              ) : null}
              {i === 4 ? (
                <img
                  src={vector5}
                  alt=""
                  className={classes.cardVectorBetweenRightMobile}
                />
              ) : null}
              {i === 4 ? (
                <img src={vector6} alt="" className={classes.cardVectorMiddleLeft} />
              ) : null}
              <span>
                {isFifthItem ? `${words[0]} ${words[1]}` : words[0]} <br />
                {isFifthItem
                  ? words.slice(2).join(' ')
                  : words.slice(1).join(' ')}
              </span>
            </div>
          );

          return (
            <div key={i} className={wrapperClass}>
              {i === 1 && vectorImage ? (
                <img
                  src={vectorImage}
                  alt=""
                  className={classes.cardVectorRight}
                />
              ) : null}
              {i === 2 ? (
                <img
                  src={vector4}
                  alt=""
                  className={classes.cardVectorBetweenMobile}
                />
              ) : null}
              {i === 5 ? (
                <img
                  src={vector6}
                  alt=""
                  className={classes.cardVectorMiddleLeftMobile}
                />
              ) : null}
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvMeasureYourImpact;
