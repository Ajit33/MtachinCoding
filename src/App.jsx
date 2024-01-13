import { useState } from "react";

import Accoridian from "./components/accodium";

import ImageSlider from "./components/accodium/img-slider";
import LoadMoreButton from "./components/loadMoreButton";
import Treeview from "./components/Treeview";
import menus from "./components/Treeview/data";
import ThemeSwitcher from "./components/Theme-switcher";



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
      {/* Treeview */}
      {/* <Treeview menu={menus} /> */}
      <ThemeSwitcher />
    </>
  );
}

export default App;
