import MovieDataFormRow from './MovieDataFormRow';
import MovieSection from './MovieSection';

const MovieData = () => {
  return <MovieSection title="Movie Data">
    <div>
      <form>
        <fieldset>
          <div className='flex flex-col h-64'>
            <div>
              <MovieDataFormRow title='Name'>
                <input className='movie-data-input' type='text' />
              </MovieDataFormRow>
              <MovieDataFormRow title='Studio'>
                <select className='w-full p-1 rounded-lg'>
                  <option>Studio 1</option>
                  <option>Studio 2</option>
                  <option>Studio 3</option>
                  <option>Studio 4</option>
                  <option>Studio 5</option>
                  <option>Studio 6</option>
                  <option>Studio 7</option>
                  <option>Studio 8</option>
                  <option>Studio 9</option>
                </select>
              </MovieDataFormRow>
              <MovieDataFormRow title='Series'>
                <select className='w-full p-1 rounded-lg'>
                  <option>Series 1</option>
                  <option>Series 2</option>
                  <option>Series 3</option>
                  <option>Series 4</option>
                  <option>Series 5</option>
                  <option>Series 6</option>
                  <option>Series 7</option>
                  <option>Series 8</option>
                  <option>Series 9</option>
                </select>
              </MovieDataFormRow>
              <MovieDataFormRow title='Series #'>
                <input className='movie-data-input' type='text' />
              </MovieDataFormRow>
            </div>
            <div className='h-full flex flex-col justify-center'>
              <div className='flex'>
                <button className='bg-green-700 hover:bg-green-600 movie-data-button' type='submit'>Update</button>
                <button className='bg-red-700 hover:bg-red-600 movie-data-button' type='button'>Remove</button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </MovieSection >;
}
export default MovieData