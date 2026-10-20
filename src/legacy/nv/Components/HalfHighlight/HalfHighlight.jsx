import classes from './HalfHighlight.module.css';

const HalfHighlight = ({ children, color, className = '' }) => {
  return (
    <span
      className={`${classes.highlight} ${className}`.trim()}
      style={{ '--highlight-color': color }}
    >
      <span className={classes.bg} aria-hidden="true" />
      <span className={classes.text}>{children}</span>
    </span>
  );
};

export default HalfHighlight;
