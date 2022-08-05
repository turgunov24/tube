import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./components/pages/home-page/home-page";
import ExploreSection from "./components/pages/explore-page/explore-page";
import ShortsSection from "./components/pages/shorts/shorts-page";
import SubscriptionsSection from "./components/pages/subscriptions/subscriptions-page";
import LibrarySection from "./components/pages/library/library-page";
import SignIn from "./components/pages/login-page/sign-in";
import SignUp from "./components/pages/login-page/sign-up";
import VideoSection from "./components/pages/video-page/video-page"
//aditional
import { AnimatePresence } from "framer-motion";
import SearchSection from "./components/pages/search-page/search-page";
import HistorySection from "./components/pages/history-page/history-page";


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
    <div className="App w-full h-screen">
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/home" exact element={<HomeSection />} />
            <Route path="/explore" element={<ExploreSection />} />
            <Route path="/shorts" element={<ShortsSection />} />
            <Route path="/subscriptions" element={<SubscriptionsSection />} />
            <Route path="/library" element={<LibrarySection />} />
            <Route path="/video" element={<VideoSection />} />
            <Route path="/search" element={<SearchSection />} />
            <Route path="/history" element={<HistorySection />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
