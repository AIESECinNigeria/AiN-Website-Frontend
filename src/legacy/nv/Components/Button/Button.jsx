"use client";
import classes from './Button.module.css';

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  noRadius,
  subClass,
}) => {
  return (
    <button
      className={`${!subClass ? classes.button : undefined} ${
        type === 'secondary'
          ? classes.secondary
          : type === 'tertiary'
          ? classes.tertiary
          : type === 'nv'
          ? classes.nv
          : classes.primary
      } ${subClass === 'nv' ? classes.nv : undefined}`}
      onClick={onClick}
      disabled={loading || disabled}
      style={noRadius ? { borderRadius: '0px' } : undefined}
    >
      {loading ? <svg className="animate-spin" style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" /><path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg> : children}
    </button>
  );
};

export default Button;
