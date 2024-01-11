import { useEffect, useState } from "react";
import "./style.css";
const LoadMoreButton = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
   const[disablebutton,setdisablebutton]=useState(false);
  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products]);
      }
    } catch (e) {
      console.error(e);
      setErrMsg("Error loading products. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = () => {
    setCount(count + 1);
  };
  useEffect(()=>{
    if(products && products.length===100) setdisablebutton(true);
  },[products])
  useEffect(() => {
    fetchProduct();
  }, [count]); // Ensure useEffect runs only when count changes

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length ? (
          products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <div>No products available.</div>
        )}
      </div>
      <div className="button-container">
        <button disabled={disablebutton} onClick={handleLoadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more items"}
        </button>
        {
           disablebutton ?<p>You have reached max</p> :null
        }
      </div>
      {errMsg && <div>{errMsg}</div>}
    </div>
  );
};

export default LoadMoreButton;

