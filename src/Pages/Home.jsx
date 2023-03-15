
import FeaturedSec from '../Components/FeaturedSec';
import HeroSection from '../Components/HeroSection';
import News from '../Components/News';
import Services from '../Components/Services';
import TrackRecord from '../Components/TrackRecord';

function Home() {
  
 
  return (
   <>
   <HeroSection/>
   <FeaturedSec title='Featured listings'/>
   <Services/>
   <TrackRecord/>
   <News/>
   </>
 
  )
}

export default Home
