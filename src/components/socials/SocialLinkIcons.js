import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import "./SocialLinkIcons.scss";

const SocialLinkIcons = () => {
  return (
    <div className="social-link-icons-wrapper">
      <a href="https://facebook.com" className="social-link" rel="noopener noreferrer" target="_blank">
        <FaFacebook className="social-link-icon" />
      </a>
      <a href="https://twitter.com" className="social-link" rel="noopener noreferrer" target="_blank">
        <FaTwitter className="social-link-icon" />
      </a>
      <a href="https://linkedin.com" className="social-link" rel="noopener noreferrer" target="_blank">
        <FaLinkedin className="social-link-icon" />
      </a>
    </div>
  );
};

export default SocialLinkIcons;
