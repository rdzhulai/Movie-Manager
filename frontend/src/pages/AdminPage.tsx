
const AdminPage = () => {
    return <>
        <div className="border border-black w-max mx-auto p-4">
            <form>
                <div className="mb-2">
                    <label><input className="mx-1" type="radio" name="selection" />Actor</label>
                    <label><input className="mx-1" type="radio" name="selection" />Category</label>
                    <label><input className="mx-1" type="radio" name="selection" />Series</label>
                    <label><input className="mx-1" type="radio" name="selection" />Studio</label>
                </div>
                <div className="my-4">
                    <input className="px-1 border border-black rounded-xl focus:bg-gray-100 w-full" type="text" required={true} />
                </div>
                <div className="my-2">
                    <button className="text-center bg-green-700 hover:bg-green-600 uppercase tracking-wider font-semibold text-lg text-white rounded p-2 w-full" type="submit" >Add Something</button>
                </div>
            </form>
        </div>
    </>
};

export default AdminPage