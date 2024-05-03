const FullWidthImage = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="w-full h-[260px] md:h-[580px] sm:h-[480px] ">
      <img
        className="w-full h-full object-cover"
        src={imgUrl}
        loading="lazy"
        alt="fullScreen"
      />
    </div>
  );
};

export default FullWidthImage;
