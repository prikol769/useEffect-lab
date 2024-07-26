import { useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  return (
    <>
      <h1>React Movie App</h1>
      <Form movieSearch={getMovie} />
      <MovieDisplay />
    </>
  );
}

export default App;
