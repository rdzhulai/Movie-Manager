import { useContext } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../state/StateContext";

const CategorySelector = () => {
  const { state } = useContext(StateContext);

  return (
    <MovieSection title="Categories">
      <div className="grid grid-cols-3 gap-1 h-72 overflow-y-scroll">
        {state?.categories.map((category, index) => (
          <label>
            <input type="checkbox" key={index} />
            {category}
          </label>
        ))}
      </div>
    </MovieSection>
  );
};

export default CategorySelector;
