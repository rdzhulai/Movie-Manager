import MovieSection from './MovieSection'

const ActorSelector = () => {
  return (
    <MovieSection title="Actors">
      <div className='flex h-96'>
        <div className='w-1/2 m-2'>
          <div className='text-lg text-center font-bold'>Available</div>
          <div>
            <select className="border border-green-500 w-full" size={14}>
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
          </div>
        </div>
        <div className='w-1/2 m-2'>
          <div className='text-lg text-center font-bold'>Selected</div>
          <div>
            <select className="border border-green-500 w-full" size={14}>
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
          </div>
        </div>
      </div>
    </MovieSection>
  )
}

export default ActorSelector