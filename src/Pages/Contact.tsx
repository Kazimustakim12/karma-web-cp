import { useEffect, useState } from "react";
import SmoothScrolling from "../components/ui/SmoothScroll";
import BannerIntro from "../components/ui/BannerIntro";
import FullWidthImage from "../components/ui/FullWidthImage";
import AnimationUtils from "../utils/animations";

const Contact = () => {
  useEffect(() => {
    AnimationUtils.initializeScrollTrigger();
  }, []);
  return (
    <SmoothScrolling>
      <BannerIntro
        introBannerHeadline="CONTACT"
        introBannerSubHeadline={
          <>
            <p>
              We eagerly anticipate your message. Please leave us a message, and
              we'll promptly reach out to you. Alternatively, feel free to
              contact us directly at:
            </p>
            <p>
              Phone: +356 2033 4455 <br />
              Email: info@karmaluxuryrentals.com
            </p>
            <p>
              We're here to assist you with any inquiries or assistance you may
              need.
            </p>
          </>
        }
      />
      <FullWidthImage imgUrl="/assets/images/contact.png" />
    </SmoothScrolling>
  );
};

export default Contact;
