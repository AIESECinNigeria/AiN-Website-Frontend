interface HeaderTextProps {
  title?: React.ReactNode;
  caption?: React.ReactNode;
  isCentered?: boolean;
  captionFirst?: boolean;
  titleStyle?: React.CSSProperties;
}

const h4Class =
  "font-['Kunire_Grotesk',sans-serif] text-[56px] font-semibold leading-[1.02] text-[#2d2d2d] mt-0 uppercase min-[767px]:max-[1023px]:text-[32px] max-[767px]:text-[32px]";

const HeaderText = ({
  title,
  caption,
  isCentered,
  captionFirst = false,
  titleStyle,
}: HeaderTextProps) => {
  const pClass = `font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] font-light leading-[23.04px] text-[#808080] ${
    captionFirst
      ? 'mb-6 min-[767px]:max-[1023px]:mb-3 max-[767px]:mb-3'
      : 'mb-4'
  } min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:font-[275] min-[767px]:max-[1023px]:leading-[140%] max-[767px]:text-[16px] max-[767px]:font-[275] max-[767px]:leading-[140%]`;

  return (
    <div style={isCentered ? { textAlign: 'center' } : { textAlign: 'left' }}>
      {captionFirst ? (
        <>
          <p className={pClass}>{caption}</p>
          <h4 className={h4Class} style={titleStyle}>
            {title}
          </h4>
        </>
      ) : (
        <>
          <h4 className={h4Class} style={titleStyle}>
            {title}
          </h4>
          <p className={pClass}>{caption}</p>
        </>
      )}
    </div>
  );
};

export default HeaderText;
