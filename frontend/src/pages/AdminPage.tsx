import { Field, Formik, FormikHelpers } from "formik";
import { useContext, useState } from "react";
import StateContext from "../state/StateContext";
import { Actions } from "../types/state";

interface AdminFormValuesType {
  name: string;
  selection: "actor" | "category" | "series" | "studio";
}

const initialValues: AdminFormValuesType = {
  selection: "actor",
  name: "",
};

const AdminPage = () => {
  const [importStatus, setImportStatus] = useState("");

  const onImportMovies = async () => {
    const responce = await fetch(`${process.env.REACT_APP_BACKEND}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await responce.json();

    if (responce.ok) {
      setImportStatus("Successfully imported movie files");
    } else {
      setImportStatus("Failed to import movie files");
    }
  };

  const { dispatch } = useContext(StateContext);

  const onSubmit = async (
    values: AdminFormValuesType,
    helpers: FormikHelpers<AdminFormValuesType>
  ) => {
    switch (values.selection) {
      case "actor":
        dispatch({ type: Actions.AddActor, payload: values.name });
        break;
      case "category":
        dispatch({ type: Actions.AddCategory, payload: values.name });
        break;
      case "series":
        dispatch({ type: Actions.AddSeries, payload: values.name });
        break;
      case "studio":
        dispatch({ type: Actions.AddStudio, payload: values.name });
        break;

      default:
        throw new Error("Invalid selection");
    }
    helpers.setFieldValue("name", "");
  };
  return (
    <>
      <div className="border border-black w-max mx-auto p-4">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-2">
                <label>
                  <Field
                    className="mx-1"
                    type="radio"
                    name="selection"
                    value="actor"
                  />
                  Actor
                </label>
                <label>
                  <Field
                    className="mx-1"
                    type="radio"
                    name="selection"
                    value="category"
                  />
                  Category
                </label>
                <label>
                  <Field
                    className="mx-1"
                    type="radio"
                    name="selection"
                    value="series"
                  />
                  Series
                </label>
                <label>
                  <Field
                    className="mx-1"
                    type="radio"
                    name="selection"
                    value="studio"
                  />
                  Studio
                </label>
              </div>
              <div className="my-4">
                <Field
                  className="px-1 border border-black rounded-xl focus:bg-gray-100 w-full"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="my-2">
                <button
                  className="text-center bg-green-700 hover:bg-green-600 uppercase tracking-wider font-semibold text-lg text-white rounded p-2 w-full"
                  type="submit"
                >
                  Add {formik.values.selection}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className="mt-3 mx-auto w-max">
        <button
          className="p-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold"
          type="button"
          onClick={onImportMovies}
        >
          Import Movies
        </button>
      </div>
      {importStatus && (
        <div className="text-center pt-3 font-mono">{importStatus}</div>
      )}
    </>
  );
};

export default AdminPage;
