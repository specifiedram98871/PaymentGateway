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
    <footer className="bg-slate-200 dark:bg-gray-800 w-full text-center py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              E-Commerce
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
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
          <div className="flex space-x-4 mt-4 md:mt-0 p-4 rounded-full">
            <a
              href="https://facebook.com"
              className="dark:text-slate-200 hover:text-sky-800"
            >
              <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              className="dark:text-slate-200 hover:text-sky-800"
            >
              <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              className="dark:text-slate-200  hover:text-sky-800"
            >
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
