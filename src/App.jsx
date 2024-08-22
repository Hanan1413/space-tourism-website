import "./App.css";
import Destination from "./pages/destination/Destination";
import HomePage from "./pages/homepage/HomePage";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import DesktopNav from "./components/desktop-nav/DesktopNav";
import Crew from "./pages/crew/Crew";
import { destinations } from "./mainData";
import {crew} from "./mainData"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layout Component
function AppLayout({ children }) {
  return (
    <div>
      <MobileMenu />
      <DesktopNav />
      <main>{children}</main> {/* Render the routed components here */}
    </div>
  );
}

function App() {
  //chatgpt.com/

  https: return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/destination"
            element={<Destination destinations={destinations} />}
          />
           <Route
            path="/crew"
            element={<Crew  crew={crew} />}
          />


          {/* <Route  path='/destination' element={  <Destination  destinations={destinations}/> }  /> */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
