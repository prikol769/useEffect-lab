import { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = async (searchTerm) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie("shrek");
  }, []);

  return (
    <>
      <h1>React Movie App</h1>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} isLoading={isLoading} />
    </>
  );
}

export default App;
