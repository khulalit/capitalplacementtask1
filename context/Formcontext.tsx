import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext<any>({});

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState([]);
  const [metadata, setMetaData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make your API request here
      const response = await fetch('http://127.0.0.1:4010/api/935.0866882449415/programs/consequuntur/application-form');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result)
      setData(result.data.attributes);
      setMetaData({
        id: result.data.id,
        type: result.data.type,
      })
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, error, setData, metadata}}>
      {children}
    </DataContext.Provider>
  );
};
