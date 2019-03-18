import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const Footer = () => {
    return (
        <BrowserRouter>
            <div className="MainFooter row">
                <div className="col-lg-12">
                    <h1 className="mx-auto">Себе и людям!</h1>
                </div>
                <div className="col-lg-12">
                    <ul className="Footer mx-auto">
                        <span className="col-lg-4 col-md-4">
                            <li className="mr-2 mr-sm-3 mr-md-3 mr-lg-4 mr-xl-4">
                            <Link to="/">inst</Link>
                            </li>
                            <li className="mr-2 mr-sm-3 mr-md-3 mr-lg-4 mr-xl-4">
                                <Link to="/">fb</Link>
                            </li>
                            <li className="mr-2 mr-sm-3 mr-md-3 mr-lg-4 mr-xl-4">
                                <Link to="/">vk</Link>
                            </li>
                        </span>
                        <span className="col-lg-4 col-md-4">
                            <li className="mr-2 mr-sm-3 mr-md-3 mr-lg-4 mr-xl-4">
                            +375&#160;29&#160;1800295
                        </li>
                        </span>
                        <span className="col-lg-4 col-md-4">
                            <li className="mr-2 mr-sm-3 mr-md-3 mr-lg-4 mr-xl-4">
                            <Link to="/">karma.cultureagency@gmail.com</Link>
                        </li>
                        </span>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default Footer;