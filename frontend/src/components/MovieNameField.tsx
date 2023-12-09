import { Field } from "formik";
import MovieDataFormRow from "./MovieDataFormRow";

const MovieNameField = () => {
  return (
    <MovieDataFormRow title="Name">
      <Field className="movie-data-input" type="text" name="movieName" />
    </MovieDataFormRow>
  );
};

export default MovieNameField;
