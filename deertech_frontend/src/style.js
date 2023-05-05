const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-poppins font-semibold ss:text-[85px] text-[70px] text-white ss:leading-[100.8px] leading-[70px]",
  heading2:
    "font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[55px] leading-[40px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[17px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexRight: "flex justify-center items-end",
  flexWrap: "flex flex-col items-start justify-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-16",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionCenter: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
