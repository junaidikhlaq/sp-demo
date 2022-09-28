import About from "./about";
import Contact from "./contact";
import Feature from "./features";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import Services from "./services";
import Team from "./team";

const Main = () => {
    return (
        <main id="main">
            <Services/>
            <Pricing/>
            <About/>
            {/* <Feature/> */}
            <Portfolio/>
            <Team/>
            <Contact/>
        </main>
    )
}
export default Main;