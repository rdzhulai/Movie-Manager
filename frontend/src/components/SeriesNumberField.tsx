import { Field } from "formik";
import MovieDataFormRow from "./MovieDataFormRow";

const SeriesNumberField = () => {
  return (
    <MovieDataFormRow title="Series #">
      <Field
        className="movie-data-input"
        type="text"
        name="movieSeriesNumber"
      />
    </MovieDataFormRow>
  );
};

export default SeriesNumberField;
