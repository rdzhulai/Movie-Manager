import { useContext } from "react";
import StateContext from "../state/StateContext";
import ActorSelectorList from "./ActorSelectorList";
import MovieSection from "./MovieSection";

const ActorSelector = () => {
  const { state } = useContext(StateContext);
  return (
    <MovieSection title="Actors">
      <div className="flex h-72">
        <ActorSelectorList title="Available">
          <select className="border border-green-500 w-full" size={10}>
            {state?.actors.map((actor, index) => (
              <option key={index}>{actor}</option>
            ))}
          </select>
        </ActorSelectorList>
        <ActorSelectorList title="Selected">
          <select className="border border-green-500 w-full" size={10}>
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
