import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark pt-3">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/home" className="nav-link active text-light" >Maruf's Resturant</Link>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="text-light">Useful Link</h4>
                                    <ul className="text-light">
                                        <li>Home</li>
                                        <li>Menu</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="text-light">Useful Link</h4>
                                    <ul className="text-light">
                                        <li>Terms and Condition</li>
                                        <li>Feedback</li>
                                        <li>Privacy</li>
                                        <li>Help</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <p className="text-center text-">
                    &copy; Copyright <a href="www.facebook.com/maruf7856" className="nav-link text-light">Marufur Rahman</a> Allright Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;