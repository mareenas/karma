import {BrowserRouter, Link} from "react-router-dom";
import React from 'react';

const Header = () => {
    return (
        <BrowserRouter>
            <div className="MainHeader row">
                <ul className="Header mx-auto">
                    <li className="mr-2 mr-sm-4 mr-md-4 mr-lg-5 mr-xl-5">
                        <Link to="/" >Проекты</Link>
                    </li>
                    <li className="mr-2 mr-sm-4 mr-md-4 mr-lg-5 mr-xl-5">
                        <Link to="/" >Команда</Link>
                    </li>
                    <li className="mr-2 mr-sm-4 mr-md-4 mr-lg-5  mr-xl-5">
                        <Link to="/" >БЛОГ</Link>
                    </li>
                    <li className="mr-2 mr-sm-4 mr-md-4 mr-lg-5 mr-xl-5">
                        <Link to="/" >Контакты</Link>
                    </li>
                </ul>
            </div>
        </BrowserRouter>
    )
};

export default Header;