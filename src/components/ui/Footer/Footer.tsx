import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Correct import

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-gray-800 w-full mt-24 py-6 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              E-Commerce
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="text-gray-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 dark:text-slate-200 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        <p>Designed and developed with ❤️ by FakeStore</p>
      </div>
    </footer>
  );
};

export default Footer;
