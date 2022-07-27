import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeSection from "./components/pages/home-page/home-page";
import ExploreSection from "./components/pages/explore-page/explore-page"
import ShortsSection from "./components/pages/shorts/shorts-page"
import SubscriptionsSection from "./components/pages/subscriptions/subscriptions-page"
import LibrarySection from "./components/pages/library/library-page"

function App() {
  return (
    <div className="App w-full h-screen ">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeSection />}/>
      <Route path="/explore" element={<ExploreSection />} />
      <Route path="/shorts" element={<ShortsSection />} />
      <Route path="/subscriptions" element={<SubscriptionsSection />} />
      <Route path="/library" element={<LibrarySection />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
