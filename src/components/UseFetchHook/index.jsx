import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  async function fetchdata() {
    setloading(true);
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      console.log(`${result} ye h array`);
      setdata(result);
      seterror(null);
      setloading(false);
    } catch (e) {
      <div>`${e} Error occured`</div>;
      setloading(false);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [url]);
  return { data, error, loading };
  return (
    <div>
      <h1>Use Fetch Hooks</h1>
    </div>
  );
}
