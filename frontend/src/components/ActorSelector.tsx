import { useContext, useEffect, useState } from "react";
import StateContext from "../state/StateContext";
import ActorSelectorList from "./ActorSelectorList";
import MovieSection from "./MovieSection";
import { MovieSectionProps } from "../types/form";
import { Actions } from "../types/state";

const ActorSelector = ({ formik }: MovieSectionProps) => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/actors`);
      const data = await response.json();
      dispatch({ type: Actions.SetAvailableActors, payload: data });
      setLoading(false);
    })();
  }, []);

  return (
    <MovieSection title="Actors">
      <div className="flex h-72">
        <ActorSelectorList title="Available">
          {loading ? (
            <div className="m-4">Loading...</div>
          ) : (
            <select
              className="border border-green-500 w-full"
              size={10}
              {...formik.getFieldProps("movieActorAvailableId")}
            >
              {state?.actors.map((actor) => (
                <option key={actor.id} value={actor.id}>
                  {actor.name}
                </option>
              ))}
            </select>
          )}
        </ActorSelectorList>
        <ActorSelectorList title="Selected">
          <select
            className="border border-green-500 w-full"
            size={10}
            {...formik.getFieldProps("movieActorSelectedId")}
          >
            <option>Selected 1</option>
            <option>Selected 2</option>
            <option>Selected 3</option>
            <option>Selected 4</option>
            <option>Selected 5</option>
            <option>Selected 6</option>
            <option>Selected 7</option>
            <option>Selected 8</option>
            <option>Selected 9</option>
            <option>Selected 10</option>
            <option>Selected 11</option>
            <option>Selected 12</option>
            <option>Selected 13</option>
            <option>Selected 1</option>
            <option>Selected 2</option>
            <option>Selected 3</option>
            <option>Selected 4</option>
            <option>Selected 5</option>
            <option>Selected 6</option>
            <option>Selected 7</option>
            <option>Selected 8</option>
            <option>Selected 9</option>
            <option>Selected 10</option>
            <option>Selected 11</option>
            <option>Selected 12</option>
            <option>Selected 13</option>
          </select>
        </ActorSelectorList>
      </div>
    </MovieSection>
  );
};

export default ActorSelector;
