import useFetch from ".";

async function fetchData(url, options, setData, setError, setLoading) {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      console.error(`Error occurred: ${error.message}`);
      setError(`Error occurred: ${error.message}`);
      setLoading(false);
    }
  }
  
  // Separate function for rendering data
  function renderData(data) {
    return data.products.map((item) => <p key={item.key}>{item.title}</p>);
  }
  
  export default function UseFetchHookTest() {
    const { data, error, loading, fetchData: fetch } = useFetch("https://dummyjson.com/products", {});
  
    // Separate function for handling click
    function handleClick() {
      fetchData("https://dummyjson.com/other", {}, fetch.setData, fetch.setError, fetch.setLoading);
    }
  
    return (
      <>
        <div>
          {loading ? <h1>Loading ho raha h</h1> : null}
          {data ? renderData(data) : null}
        </div>
        <button onClick={handleClick}>Fetch data</button>
      </>
    );
  }