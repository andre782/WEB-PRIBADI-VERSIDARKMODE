import React, { useState } from 'react';
import "./header.css";
import { HomeOutlined, UserOutlined, FileExclamationOutlined, CloseCircleTwoTone, FileDoneOutlined, ShoppingOutlined, ContactsOutlined } from '@ant-design/icons';
import { AiOutlineAppstore } from "react-icons/ai";
import "../../modedark.css"; // Pastikan file CSS diimpor

const Heeader = ({ isDarkMode }) => {
    // toggle menu
    const [Toggle, showMenu] = useState(false);

    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>ANDRE</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <i className='uil uil-home '><HomeOutlined className='nav__icon'/> Home</i>
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <i className='uil uil-user '><UserOutlined className='nav__icon'/> About</i>
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skill' className='nav__link'>
                                <i className='uil uil-skill '><FileExclamationOutlined className='nav__icon'/> Skill</i>
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <i className='uil uil-home '><ShoppingOutlined className='nav__icon'/> Service</i>
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <i className='uil uil-home '><FileDoneOutlined className='nav__icon'/> Portfolio</i>
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#home' className='nav__link'>
                                <i className='uil uil-home '><ContactsOutlined className='nav__icon'/> Contact</i>
                            </a>
                        </li>
                    </ul>

                    <CloseCircleTwoTone className='nav__close' onClick={() => showMenu(!Toggle)}/>
                </div>

                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <AiOutlineAppstore/>
                </div>
            </nav>
        </header>
    );
}

export default Heeader;
