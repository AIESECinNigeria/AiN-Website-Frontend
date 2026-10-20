import classes from './HeaderText.module.css';

const HeaderText = ({
  title,
  caption,
  isCentered,
  captionFirst = false,
  titleStyle,
}) => {
  return (
    <div
      className={`${classes.container} ${
        captionFirst ? classes.captionFirst : ''
      }`}
      style={isCentered ? { textAlign: 'center' } : { textAlign: 'left' }}
    >
      {captionFirst ? (
        <>
          <p>{caption}</p>
          <h4 style={titleStyle}>{title}</h4>
        </>
      ) : (
        <>
          <h4 style={titleStyle}>{title}</h4>
          <p>{caption}</p>
        </>
      )}
    </div>
  );
};

export default HeaderText;
