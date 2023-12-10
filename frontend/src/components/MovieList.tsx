import { useContext, useEffect, useState } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";
import { MovieSectionProps } from "../types/form";
import { Actions } from "../types/state";

const MovieList = ({ formik }: MovieSectionProps) => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/movies`);
      const data = await response.json();
      dispatch({ type: Actions.SetMovies, payload: data });
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (formik.values.movieId) {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/movies/${formik.values.movieId}`
        );
        const data = await response.json();
        if (response.ok) {
          formik.setFieldValue("movieName", data.name);
          formik.setFieldValue("movieCategories", data.category);
        }
      }
    })();
  }, [formik.values.movieId]);

  return (
    <MovieSection title="Movie List">
      {loading ? (
        <div className="m-4">
          <h2>Loading...</h2>
        </div>
      ) : (
        <select
          className="w-full h-64"
          size={10}
          {...formik.getFieldProps("movieId")}
        >
          {state?.movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.filename}
            </option>
          ))}
        </select>
      )}
    </MovieSection>
  );
};

export default MovieList;
