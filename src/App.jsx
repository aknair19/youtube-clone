import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatcPage from "./components/WatchPage";
import Demo from "./components/Demo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatcPage />,
        },
        {
          path: "demo",
          element: <Demo />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="w-full">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
 * header
 * body
 *  sidebar
 *    menuitems
 *  main container
 *   buttonList
 *   videocontainer
 *     videocard
 */
