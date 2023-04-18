import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D1726] lg:h-[10vh] lg:w-full mx-auto text-white px-10 w-3/4">
      <ul className="w-full flex flex-col lg:flex-row items-center text-center h-full justify-between gap-4">
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & Conditions</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
};

export default Footer;
