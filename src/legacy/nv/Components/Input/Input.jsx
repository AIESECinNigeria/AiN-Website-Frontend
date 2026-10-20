"use client";
import { useState } from 'react';
import classes from './Input.module.css';

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
}) => {
  // States
  const [invalid, setInvalid] = useState(false);

  return (
    <div className={classes.container} style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {'  '}
          {isRequired && <span>*</span>}
        </>
      )}

      {tip && <span className={classes.tip}>{tip}</span>}
      <span className={classes.input}>
        <input
          type={type || 'text'}
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === '') {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className={invalid ? classes.invalid : classes.valid}
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className={classes.errorMessage}>
          {errorMessage || '*invalid'}{' '}
        </span>
      )}
    </div>
  );
};

export default Input;
