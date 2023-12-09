import MovieSection from "./MovieSection";
import { MovieSectionProps } from "../types/form";
import StudioSelector from "./StudioSelector";
import MovieNameField from "./MovieNameField";
import SeriesSelector from "./SeriesSelector";
import SeriesNumberField from "./SeriesNumberField";
import UpdateButton from "./UpdateButton";
import RemoveButton from "./RemoveButton";

const MovieData = ({ formik }: MovieSectionProps) => {
  return (
    <MovieSection title="Movie Data">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <div className="flex flex-col h-64">
              <div>
                <MovieNameField />
                <StudioSelector formik={formik} />
                <SeriesSelector formik={formik} />
                <SeriesNumberField />
              </div>
              <div className="h-full flex flex-col justify-center">
                <div className="flex">
                  <UpdateButton />
                  <RemoveButton />
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
