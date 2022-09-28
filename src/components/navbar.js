import { useCallback, useEffect, useState } from "react";

const NavBar = () => {
    const [headerClass, setHeaderClass] = useState('');
    const handleNavigation = useCallback((e) => {
            const window = e.currentTarget;
            if (window.scrollY > 100) {
                console.log("fixed-top header-scrolled");
                setHeaderClass('fixed-top header-scrolled')
            } else {
                console.log("fixed-top");
                setHeaderClass('fixed-top')
            }
        }
    );

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
        window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return(
        <header id="header" className={headerClass}>
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href="index.html">DEMO</a></h1>
                <nav id="navbar" className="navbar">
                <ul>
                    <li><a className="nav-link active" href="#hero">Home</a></li>
                    <li><a className="nav-link" href="#services">Services</a></li>
                    <li><a className="nav-link" href="#pricing">Pricing</a></li>
                    <li><a className="nav-link" href="#about">About Us</a></li>
                    <li><a className="nav-link" href="#portfolio">Book</a></li>
                    <li><a className="nav-link" href="#team">Team</a></li>
            
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                    </li>
                    <li><a className="nav-link" href="#contact">Contact</a></li> */}
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
    </header>

    )
}

export default NavBar;