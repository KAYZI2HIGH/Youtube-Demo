import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feeds from "./components/pages/Feeds/Feeds";
import VideoDetails from './components/pages/VideoDetails/VideoDetails';
import ChannelDetails from './components/pages/ChannelDetails/ChannelDetails';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="sm:space-y-5 bg-white text-black">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="sm:flex">
                <NavBar />
                <Feeds />
              </div>
            }
          />
          <Route
            path="/channel/:id"
            element={
              <div className="sm:flex">
                <NavBar />
                <ChannelDetails />
              </div>
            }
          />
          <Route
            path="/video/:id"
            element={<VideoDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
