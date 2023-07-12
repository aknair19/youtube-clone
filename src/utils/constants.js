import {
  MdHome,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineVideoSettings,
  MdOutlineHistoryToggleOff,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

export const HAMBURGER_URL =
  "https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_closed-512.png";

export const YOUTUBE_ICON_URL =
  "https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png";

export const USER_ICON_URL =
  "https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg";

export const GOOGLE_API_KEY = "AIzaSyBfhQuVJBeSm6iVyl247S5s-GXnmyZfJlc";

export const YOUTUBE_POPULAR_VIDEOS =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";

export const YOUTUBE_GET_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const sidebarData = [
  {
    name: "Home",
    icon: <MdHome />,
    to: "/",
  },
  {
    name: "Subscriptions",
    icon: <MdSubscriptions />,
    to: "/",
  },
  {
    name: "MdVideoLibrary",
    icon: <MdOutlineVideoLibrary />,
    to: "/",
  },
  {
    name: "History",
    icon: <MdOutlineHistory />,
    to: "/",
  },
  {
    name: "Your Videos",
    icon: <MdOutlineVideoSettings />,
    to: "/",
  },
  {
    name: "Watch Later",
    icon: <MdOutlineHistoryToggleOff />,
    to: "/",
  },
  {
    name: "Liked Videos",
    icon: <AiFillLike />,
    to: "/",
  },
];
