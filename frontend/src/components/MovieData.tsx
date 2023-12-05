import MovieSection from './MovieSection';

const MovieData = () => {
  return <MovieSection title="Movie Data">
    <div>
      <form>
        <fieldset>
          <div className='flex my-2'>
            <div className='w-1/4'>Name</div>
            <div className='w-3/4'><input className='border border-black focus:border-2 focus:border-blue-700 w-full outline-none rounded px-1' type='text' /></div>
          </div>
          <div className='flex my-2'>
            <div className='w-1/4'>Studio</div>
            <div className='w-3/4'>
              <select className='w-full py-1'>
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
            </div>
          </div>
          <div className='flex my-2'>
            <div className='w-1/4'>Series</div>
            <div className='w-3/4'>
              <select className='w-full py-1'>
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
            </div>
          </div>
          <div className='flex my-2'>
            <div className='w-1/4'>Series #</div>
            <div className='w-3/4'><input className='border border-black focus:border-2 focus:border-blue-700 w-full outline-none rounded px-1' type='text' /></div>
          </div>
          <div className='flex mt-6 mb-2'>
            <button className='w-1/2 bg-green-700 text-white mx-2 hover:bg-green-600 uppercase p-2 rounded' type='submit'>Update</button>
            <button className='w-1/2 bg-red-700 text-white mx-2  hover:bg-red-600 uppercase p-2 rounded' type='button'>Remove</button>
          </div>
        </fieldset>
      </form>
    </div>
  </MovieSection >;
}
export default MovieData