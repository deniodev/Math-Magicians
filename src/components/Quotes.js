import { useState, useEffect } from 'react';

const Fetchquote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setRespose] = useState([]);

  useEffect(() => {
    const category = 'computers';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const key = 'kOW2I3YJQk5K17BGAZZvwg==0n8UV7xtCTw9WH9u';

    const getQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(url,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': key,
            },
          });
        const data = await response.json();
        setRespose(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getQuotes();
  }, [setLoading, setError]);

  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <div className="quotes">
      {response.map((quotes) => (
        <div key={quotes.id}>
          {quotes.quote}
          <p className="author">{quotes.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetchquote;
