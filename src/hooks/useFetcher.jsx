import { useState, useEffect } from "react";

export default function useFetcher() {

   // const [variable, setter] = useState(initial_Value)
  const [dataCategory, setDataCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Running the useEffect Function");
    // Lets reset all our variables! 
    // We are loading, Currently no errors, No data visible.
    setLoading(true)
    setError(null)
    setDataCategory(null)
    
    async function fetchData() {
     
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

        // If the response does not come back ok...
        if (!response.ok) {
          // Tell the componenent we are not loading
          setLoading(false)
          // and set the Response Status to the error variable
          setError(response.status)
        }

        // Otherwise, let's get the data from the Response
        const json = await response.json()
        console.log(json)

         // save it in the data
        setDataCategory(json)
        
         // And tell the component that it is no longer loading.
        setLoading(false)
      
      
    }
     
    fetchData();

  }, []);

  console.log(dataCategory);
  console.log(loading);
  console.log(error);
  

  return {dataCategory, 
          loading, 
          error
  };
}
