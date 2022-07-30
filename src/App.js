import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./components/pages/home-page/home-page";
import ExploreSection from "./components/pages/explore-page/explore-page";
import ShortsSection from "./components/pages/shorts/shorts-page";
import SubscriptionsSection from "./components/pages/subscriptions/subscriptions-page";
import LibrarySection from "./components/pages/library/library-page";
//aditional
import { AnimatePresence } from "framer-motion";
import LoginSection from "./components/pages/login-page/login/login";


export const customAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function App() {
  return (
    <div className="App w-full h-screen ">
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LoginSection />} /> */}
            <Route path="/" element={<HomeSection />} />
            <Route path="/explore" element={<ExploreSection />} />
            <Route path="/shorts" element={<ShortsSection />} />
            <Route path="/subscriptions" element={<SubscriptionsSection />} />
            <Route path="/library" element={<LibrarySection />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
