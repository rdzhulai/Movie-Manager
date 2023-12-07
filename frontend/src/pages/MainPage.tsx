import { Formik, FormikHelpers } from "formik";
import ActorSelector from "../components/ActorSelector";
import CategorySelector from "../components/CategorySelector";
import MovieData from "../components/MovieData";
import MovieList from "../components/MovieList";
import { MainPageFormValuesType } from "../types/form";

const initialValues: MainPageFormValuesType = {
  movieId: undefined,
  movieStudioId: undefined,
  movieSeriesId: undefined,
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
  console.log(values);
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
              <CategorySelector formik={formik} />
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default MainPage;
