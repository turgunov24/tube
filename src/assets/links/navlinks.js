//assets
import ytHomeIcon from "../images/youtTubeHomeIcon.png";
import ytExploreIcon from "../images/youtTubeExploreIcon.png";
import ytShortsIcon from "../images/youtTubeShortsIcon.png";
import ytSubscriptionsIcon from "../images/youtTubeSubscriptionsIcon.png";
import ytLibraryIcon from "../images/youtTubeLibraryIcon.png";
// icons
import { VscHome } from "react-icons/vsc";
import {
  MdOutlineExplore,
  MdSlowMotionVideo,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";

export const navlinks = [
  { name: "Home", url: { ytHomeIcon }, icon: <VscHome /> ,to:"/home" },
  { name: "Explore", url: { ytExploreIcon }, icon: <MdOutlineExplore />,to:"/explore" },
  { name: "Shorts", url: { ytShortsIcon }, icon: <MdSlowMotionVideo />,to:"/shorts" },
  {
    name: "Subscriptions",
    url: { ytSubscriptionsIcon },
    icon: <MdSubscriptions />,
    to:"/subscriptions"
  },
  { name: "Library", url: { ytLibraryIcon }, icon: <MdVideoLibrary />,to:"/library" },
];
