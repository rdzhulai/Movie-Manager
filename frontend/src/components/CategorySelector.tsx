import { useContext } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";
import { MovieSectionProps } from "../types/form";
import { Field } from "formik";

const CategorySelector = ({ formik }: MovieSectionProps) => {
  const { state } = useContext(StateContext);

  return (
    <MovieSection title="Categories">
      <div className="grid grid-cols-3 gap-1 h-72 overflow-y-scroll">
        {state?.categories.map((category, index) => (
          <label key={index}>
            <Field
              type="checkbox"
              name="movieCategories"
              value={index.toString()}
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>
    </MovieSection>
  );
};

export default CategorySelector;
