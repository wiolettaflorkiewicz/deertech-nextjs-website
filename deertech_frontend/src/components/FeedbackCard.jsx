const FeedbackCard = ({ content, name, title, img }) => (
  <div className="transform transition duration-300 ease-in-out hover:-translate-y-2 flex justify-between flex-col px-10 py-12 max-w-[310px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={img} alt={name} className="w-[60px] h-[60px]" />
    <h4 className="font-poppins font-semibold text-[20px] leading-[30px] text-white my-4">
      {title}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[30px] text-white my-2">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
