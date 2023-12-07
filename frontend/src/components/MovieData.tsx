import { useContext } from "react";
import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";
import { MovieSectionProps } from "../types/form";
import { Field } from "formik";

const MovieData = ({ formik }: MovieSectionProps) => {
  const { state } = useContext(StateContext);
  return (
    <MovieSection title="Movie Data">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <div className="flex flex-col h-64">
              <div>
                <MovieDataFormRow title="Name">
                  <Field
                    className="movie-data-input"
                    type="text"
                    name="movieName"
                  />
                </MovieDataFormRow>
                <MovieDataFormRow title="Studio">
                  <select
                    className="w-full p-1 rounded-lg"
                    {...formik.getFieldProps("movieStudioId")}
                  >
                    <option value="">None</option>
                    {state?.movieStudios.map((studio, index) => (
                      <option key={index} value={index}>
                        {studio}
                      </option>
                    ))}
                  </select>
                </MovieDataFormRow>
                <MovieDataFormRow title="Series">
                  <select
                    className="w-full p-1 rounded-lg"
                    {...formik.getFieldProps("movieSeriesId")}
                  >
                    <option value="">None</option>
                    {state?.movieSeries.map((series, index) => (
                      <option key={index} value={index}>
                        {series}
                      </option>
                    ))}
                  </select>
                </MovieDataFormRow>
                <MovieDataFormRow title="Series #">
                  <Field
                    className="movie-data-input"
                    type="text"
                    name="movieSeriesNumber"
                  />
                </MovieDataFormRow>
              </div>
              <div className="h-full flex flex-col justify-center">
                <div className="flex">
                  <button
                    className="bg-green-700 hover:bg-green-600 movie-data-button"
                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-700 hover:bg-red-600 movie-data-button"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MovieSection>
  );
};
export default MovieData;
