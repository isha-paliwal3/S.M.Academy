import React,{useState} from "react";
import X from '../images/x.svg'
import "../styles/NavModel.css";

function Modal({setOpenModal}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      setIsActive(current => !current);
    };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={X} alt="" />
          </button>
        </div>
        <div className="body">
        <ul className="mobile-options">
          <li className={isActive ? 'optionM active' : 'optionM'} onClick={handleClick} >
          <hr />
            <a href="#home" className="active" onClick={() => {
              setOpenModal(false); 
            }}>Home</a>
            <hr />
          </li>
          <li className={isActive ? 'optionM active' : 'optionM'} onClick={handleClick}>
            <a href="#about" onClick={() => {
              setOpenModal(false);
            }}>About</a>
            <hr />
          </li>
          <li className={isActive ? 'optionM active' : 'optionM'} onClick={handleClick}>
            <a href="#academics" onClick={() => {
              setOpenModal(false);
            }}>Academics</a>
            <hr />
          </li>
          <li className={isActive ? 'optionM active' : 'optionM'} onClick={handleClick}>
            <a href="#gallery" onClick={() => {
              setOpenModal(false);
            }}>Gallery</a>
            <hr />
          </li>
          <li className={isActive ? 'optionM active' : 'optionM'}  onClick={handleClick}>
            <a href="#contact" onClick={() => {
              setOpenModal(false);
            }}>Contact</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;