import React from "react";
import Logo from "./footer/Logo";
import FooterLinks from "./footer/FooterLinks";
import FooterSocials from "./footer/FooterSocials";
import FooterCopyright from "./footer/FooterCopyright";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <Logo />/
            <p className="text-gray-600 mb-4 max-w-md">
              Nền tảng kết nối những người yêu thích cầu lông, tạo đội nhóm và tổ chức các trận đấu thú vị.
            </p>
            <FooterSocials />
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
            <FooterLinks />
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
