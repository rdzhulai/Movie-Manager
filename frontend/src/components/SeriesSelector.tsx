import { useContext, useEffect, useState } from "react";
import StateContext from "../state/StateContext";
import { MovieSectionProps } from "../types/form";
import MovieDataFormRow from "./MovieDataFormRow";
import { Actions } from "../types/state";

const SeriesSelector = ({ formik }: MovieSectionProps) => {
  const { state, dispatch } = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/series`);
      const data = await response.json();
      dispatch({ type: Actions.SetSeries, payload: data });
      setLoading(false);
    })();
  }, []);

  return (
    <MovieDataFormRow title="Series">
      {loading ? (
        <h2 className="w-full p-1 rounded-lg">Loading...</h2>
      ) : (
        <select
          className="w-full p-1 rounded-lg"
          {...formik.getFieldProps("movieSeriesId")}
        >
          <option value="">None</option>
          {state?.movieSeries.map((series) => (
            <option key={series.id} value={series.id}>
              {series.name}
            </option>
          ))}
        </select>
      )}
    </MovieDataFormRow>
  );
};

export default SeriesSelector;
