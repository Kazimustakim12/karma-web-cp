const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="gs_reveal w-full h-[191px] flex items-center justify-center text-center text-primary-500 text-[14px] font-bold font-['Inter'] uppercase leading-3 tracking-widest">
      Copyright {currentYear} - karma
    </div>
  );
};

export default Footer;
