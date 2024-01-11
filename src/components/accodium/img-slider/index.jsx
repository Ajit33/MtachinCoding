import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./style.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [image, setimage] = useState([]);
  const [currentslide, setcurrentslide] = useState(0);
  const [errormsg, seterrormsg] = useState(null);
  const [loading, setloding] = useState(false);

  async function fetchimage(getUrl) {
    try {
      setloding(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setimage(data);
        setloding(false);
      }
    } catch (e) {
      seterrormsg(e.message);
      setloding(false);
    }
  }

  function handelprevious() {
    setcurrentslide(currentslide === 0 ? image.length - 1 : currentslide - 1);
  }

  function handelNext() {
    setcurrentslide(currentslide == image.length - 1 ? 0 : currentslide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchimage(url);
  }, [url]);

  console.log(image);

  if (loading) {
    return <div>Loading the Data ! please wait</div>;
  }
  if (errormsg !== null) {
    return <div>Error occured {errormsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handelprevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imgitem, index) => (
            <img
              key={imgitem.id}
              alt={imgitem.download_url}
              src={imgitem.download_url}
              className={
                currentslide === index ? "current-image" : "current-image hide"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handelNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current-indicator"
                    : "current-indicator inactive"
                }
                onClick={()=>setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
