import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function Homepage() {
    return ( 
        <>
           <Hero />
           <Award />
           <Stats />
           <Pricing />
           <Education />
           <OpenAccount />
           <Footer />
        </>
    );
}

export default Homepage;