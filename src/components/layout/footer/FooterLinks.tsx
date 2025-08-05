import Link from "next/link";
import React from "react";

const FooterLinks = () => (
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Liên kết</h3>
      <ul className="space-y-3">
        <li>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Về chúng tôi
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Liên hệ
          </Link>
        </li>
        <li>
          <Link href="/help" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Trợ giúp
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Pháp lý</h3>
      <ul className="space-y-3">
        <li>
          <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Chính sách bảo mật
          </Link>
        </li>
        <li>
          <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Điều khoản sử dụng
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default FooterLinks;
