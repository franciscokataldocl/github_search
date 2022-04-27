import React, { useEffect, useState } from "react";

const useFetch = (url) => {

//estados del hook
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }

    }

    //traer datos
 useEffect(() => {
     getData();
 }, [url])


return { data, error, loading };

};

export default useFetch;
