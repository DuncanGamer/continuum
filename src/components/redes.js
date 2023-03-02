import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ShareButtons = ({ url }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${url}`;

  return (
    <div className="flex container mx-auto h-screen space-x-4">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center space-x-2"
      >
        <FaTwitter />
        <span>Twitter</span>
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center space-x-2"
      >
        <FaFacebookF />
        <span>Facebook</span>
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center space-x-2"
      >
        <FaLinkedinIn />
        <span>LinkedIn</span>
      </a>
    </div>
  );
};

export default ShareButtons;
