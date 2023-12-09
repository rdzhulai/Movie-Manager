import { useContext, useEffect, useState } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";
import { Field } from "formik";
import { Actions } from "../types/state";

const CategorySelector = () => {
  const { state, dispatch } = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/categories`
      );
      const data = await response.json();
      dispatch({ type: Actions.SetCategories, payload: data });
      setLoading(false);
    })();
  }, []);

  return (
    <MovieSection title="Categories">
      {loading ? (
        <h2 className="text-center">Loading...</h2>
      ) : (
        <div className="grid grid-cols-3 gap-1 h-72 overflow-y-scroll">
          {state?.categories.map((category) => (
            <label key={category.id}>
              <Field
                type="checkbox"
                name="movieCategories"
                value={category.id.toString()}
              />
              <span className="ml-1">{category.name}</span>
            </label>
          ))}
        </div>
      )}
    </MovieSection>
  );
};

export default CategorySelector;
