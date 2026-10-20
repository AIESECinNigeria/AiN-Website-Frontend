"use client";
import { cld } from '@/lib/cloudinary';
const search = cld('ain/nv/searchIcon');
const downCaret = cld('ain/nv/downCaret');

const NvProjectsSearchBar = ({
  showFilter,
  selectedState,
  lcData,
  onToggleFilter,
  onSelectState,
  className = '',
}) => {
  return (
    <div className={className}>
      <div
        className="flex items-center justify-between border border-[#08841B] bg-white py-5 pl-[11px] pr-[26px] rounded-[50px] cursor-pointer"
        onClick={onToggleFilter}
      >
        <div className="bg-[#08841B] rounded-full flex items-center justify-center p-3">
          <img src={search} alt="search icon" className="w-[18px] h-[18px]" />
        </div>
        <p
          className="text-[#A8A8A8] text-[18px]"
          style={{ fontFamily: 'Kind Sans Regular, Kind Sans, sans-serif' }}
        >
          Search According to Location
        </p>
        <div>
          <img
            src={downCaret}
            alt="down arrow"
            className={`w-6 transition-transform ${showFilter ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {showFilter && (
        <div className="absolute left-0 w-full bg-white border mt-2 rounded-lg shadow-lg z-10 border-[#08841B] p-4">
          {lcData.map((lc, index) => (
            <div
              key={index}
              className={`px-4 py-2 mb-3 bg-[#F1FFF3] hover:bg-[#08841B] focus:bg-[#08841B] cursor-pointer text-center rounded-[15px] ${
                selectedState === lc.state ? 'bg-[#08841B]' : 'bg-[#F1FFF3]'
              }`}
              onClick={() => onSelectState(lc.state)}
            >
              {lc.lc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NvProjectsSearchBar;
