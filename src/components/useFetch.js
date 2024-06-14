import { useEffect, useState } from "react";

// Custom hook to fetch data from a given URL
const useFetch = (url) => {
  // State variables to store fetched data, any error encountered, and loading status
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // useEffect hook to fetch data when the component mounts or when the URL changes
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        // Parse the JSON response
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]); // Dependency array ensures this effect runs when the URL changes

  return { data, error, isPending };
};

export default useFetch;
