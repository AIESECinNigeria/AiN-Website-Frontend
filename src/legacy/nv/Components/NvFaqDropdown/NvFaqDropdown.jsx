"use client";
import React, { useState, useRef, useEffect } from 'react';
import classes from './NvFaqDropdown.module.css';

const NvFaqDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);

  // ref
  const dropdownRef = useRef(null);
  const dropdownItem = useRef(null);
  const searchInput = useRef(null);

  useEffect(() => {
    if (isActive) {
      searchInput.current?.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target)) {
        setIsActive(false);
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
      } else {
      }
    };
    document.addEventListener('mousedown', removeDropdownHandler);

    return () => {
      document.removeEventListener('mousedown', removeDropdownHandler);
    };
  }, [props.selected]);

  return (
    <div className={classes.container} ref={dropdownRef}>
      <div
        className={classes.dropdownButton}
        onClick={() => {
          setIsActive(!isActive);
        }}
        tabIndex={0}
      >
        <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="13.3" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7568 4.75C16.8609 4.75076 15.0531 5.12803 13.404 5.81108L18.4785 17.3347L18.7568 4.75ZM13.3935 5.81542C11.6848 6.52481 10.1467 7.56263 8.85822 8.85011L17.9537 17.5521L13.3935 5.81542ZM8.85011 8.85822C7.56263 10.1467 6.52481 11.6848 5.81542 13.3935L17.5521 17.9537L8.85011 8.85822ZM5.81108 13.404C5.12803 15.0531 4.75076 16.8609 4.75 18.7568L17.3347 18.4785L5.81108 13.404ZM4.75 18.7682C4.75076 20.6641 5.12803 22.4719 5.81108 24.121L17.3347 19.0465L4.75 18.7682ZM5.81542 24.1315C6.52481 25.8402 7.56263 27.3782 8.85011 28.6668L17.5521 19.5713L5.81542 24.1315ZM8.85822 28.6749C10.1467 29.9624 11.6848 31.0002 13.3935 31.7096L17.9537 19.9729L8.85822 28.6749ZM13.404 31.7139C15.0531 32.397 16.8609 32.7742 18.7568 32.775L18.4785 20.1903L13.404 31.7139ZM18.7682 32.775C20.6641 32.7742 22.4719 32.397 24.121 31.7139L19.0465 20.1903L18.7682 32.775ZM24.1315 31.7096C25.8402 31.0002 27.3782 29.9624 28.6668 28.6749L19.5713 19.9729L24.1315 31.7096ZM28.6749 28.6668C29.9624 27.3782 31.0002 25.8402 31.7096 24.1315L19.9729 19.5713L28.6749 28.6668ZM31.7139 24.121C32.397 22.4719 32.7742 20.6641 32.775 18.7682L20.1903 19.0465L31.7139 24.121ZM32.775 18.7568C32.7742 16.8609 32.397 15.0531 31.7139 13.404L20.1903 18.4785L32.775 18.7568ZM31.7096 13.3935C31.0002 11.6848 29.9624 10.1467 28.6749 8.85822L19.9729 17.9537L31.7096 13.3935ZM28.6668 8.85011C27.3782 7.56263 25.8402 6.52481 24.1315 5.81542L19.5713 17.5521L28.6668 8.85011ZM24.121 5.81108C22.4719 5.12803 20.6641 4.75076 18.7682 4.75L19.0465 17.3347L24.121 5.81108Z"
            fill="#FFFFFE"
          />
        </svg>

        <span>{props?.selected || props?.title}</span>
        <svg
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={
            isActive
              ? { transform: 'rotate(-90deg)' }
              : { transform: 'rotate(0deg)' }
          }
        >
          <path
            d="M18 2.3335L11.5185 9.89523C10.7203 10.8265 9.27968 10.8265 8.48149 9.89523L2 2.3335"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        className={classes.dropdownItem}
        ref={dropdownItem}
        style={isActive ? { maxHeight: '1000px' } : { maxHeight: '0px' }}
      >
        {props.answer}
      </div>
    </div>
  );
};

export default NvFaqDropdown;
