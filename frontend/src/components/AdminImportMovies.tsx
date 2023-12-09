import { useState } from "react";

const AdminImportMovies = () => {

    const [importStatus, setImportStatus] = useState("");

    const onImportMovies = async () => {
        const responce = await fetch(`${process.env.REACT_APP_BACKEND}/movies`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const data = await responce.json();

        if (responce.ok) {
            const count = data.length;
            setImportStatus(
                count === 0 ? "No movies were available for import" : `Imported ${count} movie files`);
        } else { setImportStatus("Failed to import movie files"); }
    };
    return (
        <>
            <div className="mt-3 mx-auto w-max">
                <button className="p-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold" type="button" onClick={onImportMovies}> Import Movies </button>
            </div>
            {importStatus && <div className="text-center pt-3 font-mono">{importStatus}</div>}
        </>
    );
}

export default AdminImportMovies;

