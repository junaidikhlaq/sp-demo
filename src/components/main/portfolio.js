const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio">
                <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <h3>Check our <span>Portfolio</span></h3>
                    <p>
                    Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                    adipisci expedita at voluptas atque vitae autem.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src={require('../../img/portfolio/portfolio-1.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src={require('../../img/portfolio/portfolio-2.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src={require('../../img/portfolio/portfolio-3.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src={require('../../img/portfolio/portfolio-4.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src={require('../../img/portfolio/portfolio-5.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src={require('../../img/portfolio/portfolio-6.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src={require('../../img/portfolio/portfolio-7.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src={require('../../img/portfolio/portfolio-8.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src={require('../../img/portfolio/portfolio-9.jpg')} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="#" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        // <section id="cta" className="cta">
        //     <div className="container">
        //         <div className="text-center">
        //             <h3>Call To Action</h3>
        //             <p>
        //             Duis aute irure dolor in reprehenderit in voluptate velit esse
        //             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        //             cupidatat non proident, sunt in culpa qui officia deserunt mollit
        //             anim id est laborum.
        //             </p>
        //             <a className="cta-btn" href="#">Call To Action</a>
        //         </div>
        //     </div>
        // </section>
    )
}
export default Portfolio