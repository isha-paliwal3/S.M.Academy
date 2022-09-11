import React, { useState } from "react";
import Modal from "./NavModel";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#home">
            <Logo className="logo" />
          </a>
        </div>
        <ul className="nav-options">
          <li className="option">
            <a href="#home">Home</a>
          </li>
          <li className="option">
            <a href="#about">About</a>
          </li>
          <li className="option">
            <a href="#academics">Academics</a>
          </li>
          <li className="option">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="option">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}>
        <MenuIcon className="menu-icon" />
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default Navbar;
