export const LogoSvg = ({ className, ...props }: { className: string }) => {
  return (
    <svg
      width="459"
      height="392"
      viewBox="0 0 459 392"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      {...props}
    >
      <path
        d="M274.502 26.6168C274.502 124.117 206 196.117 107.502 196.117C103.002 146.283 137.998 30.6171 256.5 21.6171C385.5 11.8197 432.669 120.95 437.002 188.117"
        strokeWidth="41"
        strokeLinecap="square"
        className="logo-animation-1"
      ></path>
      <path
        d="M184.5 365.117C184.5 267.617 253.002 195.617 351.5 195.617C356 245.45 321.004 361.117 202.502 370.117C73.502 379.914 26.3333 270.784 21.9999 203.617"
        strokeWidth="41"
        strokeLinecap="square"
        className="logo-animation-2"
      ></path>
    </svg>
  );
};
