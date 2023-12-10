import { Formik, FormikHelpers } from "formik";
import CategorySelector from "../components/CategorySelector";
import MovieList from "../components/MovieList";
import { MainPageFormValuesType } from "../types/form";
import ActorSelector from "../components/ActorSelector";
import MovieData from "../components/MovieData";

const initialValues: MainPageFormValuesType = {
  movieId: undefined,
  movieStudioId: "",
  movieSeriesId: "",
  movieActorAvailableId: undefined,
  movieActorSelectedId: undefined,
  movieCategories: undefined,
  movieName: "",
  movieSeriesNumber: "",
};

const onSubmit = async (
  values: MainPageFormValuesType,
  helpers: FormikHelpers<MainPageFormValuesType>
) => {
  if (values.movieId) {
    const body = {
      name: values.movieName ? values.movieName : null,
      seriesId: values.movieSeriesId ? +values.movieSeriesId : null,
      seriesNumber: values.movieSeriesNumber ? +values.movieSeriesNumber : null,
      studioId: values.movieStudioId ? +values.movieStudioId : null,
    };
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/movies/${values.movieId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
  }
};

const MainPage = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <>
          <div className="lg:flex">
            <div className="m-2 lg:w-3/5">
              <MovieList formik={formik} />
            </div>
            <div className="m-2 lg:w-2/5">
              <MovieData formik={formik} />
            </div>
          </div>
          <div className="lg:flex">
            <div className="m-2 lg:w-1/2">
              <ActorSelector formik={formik} />
            </div>
            <div className="m-2 lg:w-1/2">
              <CategorySelector />
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default MainPage;
