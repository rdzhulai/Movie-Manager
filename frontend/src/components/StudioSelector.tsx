import React, { useContext, useEffect, useState } from "react";
import MovieDataFormRow from "./MovieDataFormRow";
import StateContext from "../state/StateContext";
import { MovieSectionProps } from "../types/form";
import { Actions } from "../types/state";

const StudioSelector = ({ formik }: MovieSectionProps) => {
  const { state, dispatch } = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/studios`);
      const data = await response.json();
      dispatch({ type: Actions.SetStudios, payload: data });
      setLoading(false);
    })();
  }, []);

  return (
    <MovieDataFormRow title="Studio">
      {loading ? (
        <h2 className="w-full p-1 rounded-lg">Loading...</h2>
      ) : (
        <select
          className="w-full p-1 rounded-lg"
          {...formik.getFieldProps("movieStudioId")}
        >
          <option value="">None</option>
          {state?.movieStudios.map((studio) => (
            <option key={studio.id} value={studio.id}>
              {studio.name}
            </option>
          ))}
        </select>
      )}
    </MovieDataFormRow>
  );
};

export default StudioSelector;
