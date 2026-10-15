"use client";
import { useState, useRef, useEffect } from 'react';

interface DropdownWithSearchProps {
  options?: string[];
  selected?: string;
  title?: React.ReactNode;
  label?: string;
  isRequired?: boolean;
  setSelected?: (option: string) => void;
  isLoading?: boolean;
  errorMessage?: string;
}

const DropdownWithSearch = (props: DropdownWithSearchProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [keyPressedValue, setKEyPressedValue] = useState<string>('');
  const [optionsState, setOptionsState] = useState<string[] | undefined>(props.options);
  const [invalid, setInvalid] = useState<boolean>(false);

  // ref
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItem = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOptionsState(props.options);
  }, [props.options]);

  useEffect(() => {
    if (searchInput && isActive) {
      searchInput.current?.focus();
    }
  }, [isActive]);

  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target as Node)) {
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
    const removeDropdownHandler = (e: MouseEvent) => {
      if (dropdownRef && !dropdownRef?.current?.contains(e.target as Node)) {
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

  const borderClass =
    invalid && !isActive
      ? 'border border-[red]'
      : 'border border-black rounded-[12px]';

  return (
    <div className="mb-6">
      {props?.label && (
        <label
          htmlFor={props.label}
          className="text-black font-['Raleway'] text-[20px] not-italic font-medium leading-[normal] mb-7 block min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] max-[767px]:text-[14px] max-[767px]:leading-[23px]"
        >
          {props.label} {props.isRequired && <span>*</span>}
        </label>
      )}

      <div
        className={`relative select-none w-full h-[60px] py-4 px-8 box-border outline-none ${borderClass} min-[767px]:max-[1023px]:rounded-[5px] min-[767px]:max-[1023px]:w-full min-[767px]:max-[1023px]:h-[50px] min-[767px]:max-[1023px]:py-0 min-[767px]:max-[1023px]:px-[22px] max-[767px]:rounded-[5px] max-[767px]:w-full max-[767px]:h-[50px] max-[767px]:py-0 max-[767px]:px-[22px]`}
        ref={dropdownRef}
      >
        <div
          // tabIndex={0}
          className="h-full flex items-center justify-between text-black font-['Raleway'] text-[20px] not-italic font-normal leading-[normal] cursor-pointer animate-[appear_0.3s_ease-in-out] transition-all duration-300 ease-in-out focus:outline-none min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] max-[767px]:text-[14px] max-[767px]:leading-[23px]"
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
          <span className="line-clamp-1">{props?.selected || props?.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-[14px] cursor-pointer transition-all duration-200"
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
            className="absolute w-full top-[110%] left-0 box-border z-[1] bg-white rounded-[12px] min-h-full max-h-[250px] overflow-y-auto overflow-x-hidden text-left outline-none border border-[#e0e0e0] animate-[appear_0.3s_ease-in-out] transition-all duration-300 ease-in-out scrollbar-hide"
            // onClick={props.onClick}
          >
            {props.options && props.options?.length > 8 && (
              <div className="h-[60px] p-2 sticky top-0 bg-white z-[1]">
                <input
                  type="text"
                  placeholder="Search"
                  value={keyPressedValue}
                  onChange={(e) => {
                    setKEyPressedValue(e.target.value);
                  }}
                  ref={searchInput}
                  className="text-black w-full h-full rounded-none indent-[8px] font-['Raleway'] text-[20px] not-italic font-normal leading-[normal] bg-[#fcfcfc] border-[0.5px] border-solid border-[#d8dce9] outline-none box-border min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] max-[767px]:text-[14px] max-[767px]:leading-[23px]"
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
                      className="py-[18px] px-8 cursor-pointer transition-all duration-200 relative text-black font-['Raleway'] text-[20px] not-italic font-normal leading-[normal] w-full hover:bg-[#cafad2] min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] max-[767px]:text-[14px] max-[767px]:leading-[23px]"
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
              <p className="m-0 py-[0.7rem] px-4 cursor-pointer transition-all duration-200 relative font-['Archivo'] text-[18px] not-italic font-normal leading-[27px] w-full">No matching Items</p>
            ) : (
              <div className="h-full w-full flex items-center justify-center min-h-[200px]">
                <svg className="animate-spin" style={{ width: 20, height: 20 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" /><path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
              </div>
            )}
          </div>
        )}
      </div>
      {invalid && (
        <div className="text-[13px] not-italic font-normal leading-[20px] animate-[appear_0.3s_ease-in-out] transition-all duration-300 ease-in-out font-['Archivo'] min-[767px]:max-[1023px]:text-[10px] min-[767px]:max-[1023px]:leading-[18px] max-[767px]:text-[10px] max-[767px]:leading-[18px]">
          {props.errorMessage || 'Please choose an option to continue'}
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
