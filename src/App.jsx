
import './App.css'
import Destination from './pages/destination/Destination';
import HomePage from './pages/homepage/HomePage';
import MobileMenu from './components/mobileMenu/MobileMenu';
import DesktopNav from './components/desktop-nav/DesktopNav';
import {destinations} from './mainData'
import mymonn from './assets/destination/image-titan.webp'
function App() {
  https://chatgpt.com/

  return (
      <div>
           <MobileMenu />
           <DesktopNav />
        {/* <HomePage /> */}
        <Destination  destinations={destinations}/>
      </div>
  )
}

export default App;
