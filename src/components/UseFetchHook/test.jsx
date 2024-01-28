import useFetch from ".";

export default function UseFetchHookTest() {
    function fetchdata(){
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
    }
    function handelclick(){
        fetchdata();
    }


  return (
    <>
      <div>
        {loading ? <h1>Loading ho raha h</h1> : null}
        {data
          ? data.products.map((item) => <p key={item.key}>{item.title}</p>)
          : null}
      </div>
      <button onClick={handelclick}>Fetch data</button>
    </>
  );
}
