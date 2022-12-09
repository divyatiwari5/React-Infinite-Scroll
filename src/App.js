import { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [result, setResult] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  /**
   * Fetch and set results
   */
  const getResults = useCallback(async() => {
    const apiURL = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;
    try {
      setLoading(true);
      const response = await fetch(apiURL);
      const data = await response.json();
      if (data.length === 0) setHasMore(false);
      if (page > 1 ) {
        setResult((prevData) => [...prevData, ...data]);
      } else {
        setResult(data);
      }
      setLoading(false);
    } catch(error) {
      setLoading(false);
      setError(error);
    }
  }, [page, limit]);

  useEffect(() => {
    getResults();
  }, [getResults, page])

  /**
   * Check scroll, if reaches bottom, update page number.
   */
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    
    if (scrollTop + clientHeight >= scrollHeight & hasMore) {
      setPage(page + 1)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    }, [result])

  return (
    <div className="App">
      <header className="App-header">
        {
          result && result.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignSelf: 'flex-start', alignItems: 'center', padding: '20px'}}>
              {item.id}. <img src={item.thumbnailUrl} style={{ borderRadius: '100px', padding: '20px'}}/>
              <p>{item.title}</p>
            </div>
          ))
        }
        {isLoading && <p>Loading....</p>}
      </header>
    </div>
  );
}

export default App;
