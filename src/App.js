import React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import "./App.css";
// import Desktop from './Components/Desktop/Desktop'
import Navbar from "./Components/Navbar/Navbar";
// import Desktop from "./Components/Desktop/Desktop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Distinct from "./pages/Distinct";
import Home from "./pages/Home";
import ExploreAbia from "./pages/ExploreAbia";
// import Hotels from "./pages/Hotels";
// import LBC from "./pages/LBC";
// import Resturants from "./pages/Resturants";
import Tourism from "./pages/Tourism";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore-abia" element={<ExploreAbia />}/>
          <Route path="/distinct" element={<Distinct/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tourism" element={<Tourism/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
        {/* <Route path="/" exact component={Home}></Route>
        <Route path="/Destinations" component={Destinations}></Route>
        <Route path="/aboutUs" component={aboutUs}></Route>
        <Route path="/tourismEstablishment" component={tourismEstablishments}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Blog" component={Blog}></Route>
        <Route path="/Hotels" component={Hotels}></Route>
        <Route path="/Resturants" component={Resturants}></Route>
        <Route path="/LBC" component={LBC}></Route> */}
        </Routes>
  
      </BrowserRouter>
    </div>
  );
};

export default App;
