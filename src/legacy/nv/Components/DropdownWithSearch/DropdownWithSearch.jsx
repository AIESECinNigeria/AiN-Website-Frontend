"use client";
import React, { useState, useRef, useEffect } from 'react';
import classes from './DropdownWithSearch.module.css';

const DropdownWithSearch = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [keyPressedValue, setKEyPressedValue] = useState('');
  const [optionsState, setOptionsState] = useState(props.options);
  const [invalid, setInvalid] = useState(false);

  // ref
  const dropdownRef = useRef(null);
  const dropdownItem = useRef(null);
  const searchInput = useRef(null);

  useEffect(() => {
    setOptionsState(props.options);
  }, [props.options]);

  useEffect(() => {
    if (searchInput && isActive) {
      searchInput.current?.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target)) {
        setIsActive(false);
        setKEyPressedValue('');
      } else {
      }
    };
    document.addEventListener('mousedown', removeDropdownHandler);

    return () => {
      document.removeEventListener('mousedown', removeDropdownHandler);
    };
  }, []);

  useEffect(() => {
    const removeDropdownHandler = (e) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target)) {
        setIsActive(false);
        setKEyPressedValue('');
      } else {
      }
    };
    document.addEventListener('mousedown', removeDropdownHandler);

    return () => {
      document.removeEventListener('mousedown', removeDropdownHandler);
    };
  }, [props.selected, props.isRequired]);

  return (
    <div className={classes.container}>
      {props?.label && (
        <label htmlFor={props.label} className={classes.label}>
          {props.label} {props.isRequired && <span>*</span>}
        </label>
      )}

      <div
        className={`${classes.dropdown} ${
          invalid ? classes.invalid : classes.valid
        } ${isActive ? classes.active : classes.inActive}`}
        ref={dropdownRef}
      >
        <div
          // tabIndex={0}
          className={classes.dropdownButton}
          onClick={() => {
            setIsActive(!isActive);
          }}
          onBlur={() => {
            if (props.isRequired && !props?.selected && !isActive) {
              setInvalid(true);
            } else {
              setInvalid(false);
            }
          }}
          tabIndex={0}
          onKeyDown={(event) => {
            // setKEyPressedValue(event.key);
            const optionsCopy =
              props.options &&
              props.options.filter((data) => {
                return data?.toString().toLowerCase().charAt(0) === event.key;
              });
            setOptionsState(optionsCopy);
            if (event.key === 'Backspace') {
              setOptionsState(props.options);
            }
          }}
        >
          <span>{props?.selected || props?.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            style={
              isActive
                ? { transform: 'rotate(-90deg)' }
                : { transform: 'rotate(0deg)' }
            }
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#737373"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {isActive && (
          <div
            className={classes.dropdownContent}
            // onClick={props.onClick}
          >
            {props.options && props.options?.length > 8 && (
              <div className={classes.inputSection}>
                <input
                  type="text"
                  placeholder="Search"
                  value={keyPressedValue}
                  onChange={(e) => {
                    setKEyPressedValue(e.target.value);
                  }}
                  ref={searchInput}
                  className="text-black"
                />
              </div>
            )}
            {optionsState && optionsState.length > 0 ? (
              optionsState
                ?.filter((option) => {
                  return keyPressedValue.toLowerCase() === ''
                    ? option
                    : option
                        ?.toLowerCase()
                        ?.includes(keyPressedValue?.toLowerCase());
                })
                ?.map((option, i) => {
                  return (
                    <div
                      key={i}
                      className={classes.dropdownItem}
                      onClick={() => {
                        if (props.setSelected) props?.setSelected(option);
                        setIsActive(false);
                        setKEyPressedValue('');
                      }}
                      ref={dropdownItem}
                    >
                      {option}
                    </div>
                  );
                })
            ) : !props.isLoading &&
              props.options &&
              props.options.length === 0 ? (
              <p className={`${classes.dropdownItem2}`}>No matching Items</p>
            ) : (
              <div className={classes.loadingContainer}>
                <svg className="animate-spin" style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" /><path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
              </div>
            )}
          </div>
        )}
      </div>
      {invalid && (
        <div className={classes.errorMessage}>
          {props.errorMessage || 'Please choose an option to continue'}
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
