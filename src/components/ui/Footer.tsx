const Footer = () => {
  const currentYear = new Date().toDateString();
  return (
    <div>
      <h4>{`COPYRIGHT ${currentYear}- KARMA`}</h4>
    </div>
  );
};

export default Footer;
