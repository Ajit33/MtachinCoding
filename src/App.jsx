import { useState } from "react";

import Accoridian from "./components/accodium";

import ImageSlider from "./components/img-slider";
import LoadMoreButton from "./components/loadMoreButton";
import Treeview from "./components/Treeview";
import menus from "./components/Treeview/data";
import ThemeSwitcher from "./components/Theme-switcher";
import ScrollIndicator from "./components/scrollIndicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/CustomModalPopup/modal-test";
import GitHubProfileFinder from "./components/gitHubFinder";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Accoridian /> */}

      {/* <Practice /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} */}

      {/* /> */}
      {/* <LoadMoreButton /> */}

 
      {/* <Treeview menu={menus} /> */}

      {/* <ThemeSwitcher /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* <TabTest /> */}

      {/* <ModalTest /> */}

      <GitHubProfileFinder />
    </>
  );
}

export default App;
