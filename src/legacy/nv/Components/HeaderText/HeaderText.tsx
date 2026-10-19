import type { CSSProperties, ReactNode } from 'react';

interface HeaderTextProps {
  title?: ReactNode;
  caption?: ReactNode;
  isCentered?: boolean;
  captionFirst?: boolean;
  titleStyle?: CSSProperties;
}

const H4 =
  "font-['Kunire_Grotesk',sans-serif] text-[56px] max-[1023px]:text-[32px] font-semibold leading-[1.02] text-[#2d2d2d] mt-0 uppercase";
const P_BASE =
  "font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] max-[1023px]:text-[16px] font-light max-[1023px]:font-[275] leading-[23.04px] max-[1023px]:leading-[140%] text-[#808080]";

const HeaderText = ({
  title,
  caption,
  isCentered,
  captionFirst = false,
  titleStyle,
}: HeaderTextProps) => {
  const pClass = `${P_BASE} ${captionFirst ? 'mb-6 max-[1023px]:mb-3' : 'mb-4'}`;
  return (
    <div style={isCentered ? { textAlign: 'center' } : { textAlign: 'left' }}>
      {captionFirst ? (
        <>
          <p className={pClass}>{caption}</p>
          <h4 className={H4} style={titleStyle}>
            {title}
          </h4>
        </>
      ) : (
        <>
          <h4 className={H4} style={titleStyle}>
            {title}
          </h4>
          <p className={pClass}>{caption}</p>
        </>
      )}
    </div>
  );
};

export default HeaderText;
