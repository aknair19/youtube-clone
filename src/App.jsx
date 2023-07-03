import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Body />
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
