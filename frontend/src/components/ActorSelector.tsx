import ActorSelectorList from './ActorSelectorList'
import MovieSection from './MovieSection'

const ActorSelector = () => {
  return (
    <MovieSection title="Actors">
      <div className='flex h-72'>
        <ActorSelectorList title='Available'>
          <select className="border border-green-500 w-full" size={10}>
            <option>Actor 1</option>
            <option>Actor 2</option>
            <option>Actor 3</option>
            <option>Actor 4</option>
            <option>Actor 5</option>
            <option>Actor 6</option>
            <option>Actor 7</option>
            <option>Actor 8</option>
            <option>Actor 9</option>
            <option>Actor 10</option>
            <option>Actor 11</option>
            <option>Actor 12</option>
            <option>Actor 13</option>
            <option>Actor 1</option>
            <option>Actor 2</option>
            <option>Actor 3</option>
            <option>Actor 4</option>
            <option>Actor 5</option>
            <option>Actor 6</option>
            <option>Actor 7</option>
            <option>Actor 8</option>
            <option>Actor 9</option>
            <option>Actor 10</option>
            <option>Actor 11</option>
            <option>Actor 12</option>
            <option>Actor 13</option>
          </select>
        </ActorSelectorList>
        <ActorSelectorList title='Selected'>
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
  )
}

export default ActorSelector