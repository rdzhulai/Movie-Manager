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
        count === 0
          ? "No movies were available for import"
          : `Imported ${count} movie files`
      );
    } else {
      setImportStatus("Failed to import movie files");
    }
  };
  return (
    <>
      <div className="border border-black mx-auto w-[319.1px] mt-3 p-4">
        <button
          className="text-center bg-blue-700 hover:bg-blue-600 uppercase tracking-wider font-semibold text-lg text-white rounded p-2 w-full"
          type="button"
          onClick={onImportMovies}
        >
          {" "}
          Import Movies{" "}
        </button>

        {importStatus && <h2 className="text-center pt-3">{importStatus}</h2>}
      </div>
    </>
  );
};

export default AdminImportMovies;
