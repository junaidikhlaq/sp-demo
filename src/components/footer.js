const Footer = () =>{
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>DEMO</h3>
                    <p>
                        P122 Adam Street <br />
                        <strong>Phone:</strong> +12 1234 1234 55<br />
                        <strong>Email:</strong> info@example.com<br />
                    </p>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Pricing</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action method="post">
                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                
                </div>
            </div> */}
    </footer>

    );
}
export default Footer;