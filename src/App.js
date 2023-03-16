
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BottomBar from './Components/BottomBar';
import TrackRecord from './Pages/TrackRecord';
import Advisory from './Pages/Advisory';
import Transaction from './Pages/Transaction';
import Valuation from './Pages/Valuation';
import Sold from './Pages/Sold';
import OurStory from './Pages/OurStory';
import Communities from './Pages/Communities';
import Team from './Pages/Team';
import JoinOurTeam from './Pages/JoinOurTeam';
import Contact from './Pages/Contact';
import News from './Pages/News';
import PropertyPage from './Pages/PropertyPage';
function App() {

  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/SearchPage' element={<SearchPage />} />
  <Route path='/trackRecord' element={<TrackRecord />} />
  <Route path='/Advisory' element={<Advisory />} />
  <Route path='/Transaction' element={<Transaction />} />
  <Route path='/Valuation' element={<Valuation />} />
  <Route path='/Sold' element={<Sold />} />
  <Route path='/OurStory' element={<OurStory />} />
  <Route path='/Communities' element={<Communities />} />
  <Route path='/Team' element={<Team />} />
  <Route path='/JoinOurTeam' element={<JoinOurTeam />} />
  <Route path='/Contact' element={<Contact />} />
  <Route path='/News' element={<News />} />
  <Route path='/PropertyPage' element={<PropertyPage />} />
</Routes>
<Footer/>
<BottomBar/>
</BrowserRouter>


    </>
  );
}

export default App;
