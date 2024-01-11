import { useState } from "react";
import "./App.css";
import Accoridian from "./components/accodium";

import ImageSlider from "./components/accodium/img-slider";
import LoadMoreButton from "./components/loadMoreButton";


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
      <LoadMoreButton />
    </>
  );
}

export default App;
