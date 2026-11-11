import { useState, useEffect } from "react";

export default function useFetcher(url) {

  // const [variable, setter] = useState(initial_Value)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    async function fetchData() {

      try {
        // We are loading, Currently no errors, No data visible.
        setLoading(true)
        setError(null)
        // const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

        // simulate 1 seconds of loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
        const response = await fetch(url)

        // If the response does not come back ok...
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Otherwise, let's get the data from the Response
        const json = await response.json()
        console.log('json ===> ', json)

        // save it in the data
        setData(json)

      } catch (err) {
        // set to the error variable
        setError(err.message);

      } finally {
        // Tell the componenent we are not loading
        setLoading(false)

      }

    }

    fetchData();

  }, [url]);

  console.log('data ===>: ' + data);
  console.log('loading ===>: ' + loading);
  console.log('error ===>: ' + error);

  return {
    data,
    loading,
    error
  };
}
