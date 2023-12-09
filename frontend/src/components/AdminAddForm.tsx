import { useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";

interface AdminFormValuesType {
  name: string;
  selection: "actor" | "category" | "series" | "studio";
}

const initialValues: AdminFormValuesType = {
  selection: "actor",
  name: "",
};

const AdminAddForm = () => {
  const [addStatus, setAddStatus] = useState("");

  const AddMovieProperty = async (
    { name, selection }: AdminFormValuesType,
    helpers: FormikHelpers<AdminFormValuesType>
  ) => {
    let response, data;
    switch (selection) {
      case "actor":
        response = await fetch(`${process.env.REACT_APP_BACKEND}/actors`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        data = await response.json();
        if (response.ok) {
          setAddStatus(`Actor ${name} added`);
        } else {
          switch (response.status) {
            case 409:
              setAddStatus(`Actor ${name} already exists`);
              break;
            default:
              setAddStatus("Unknown response from backend");
          }
        }
        break;
      case "category":
        response = await fetch(`${process.env.REACT_APP_BACKEND}/categories`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        data = await response.json();
        if (response.ok) {
          setAddStatus(`Category ${name} added`);
        } else {
          switch (response.status) {
            case 409:
              setAddStatus(`Category ${name} already exists`);
              break;
            default:
              setAddStatus("Unknown response from backend");
          }
        }
        break;
      case "series":
        response = await fetch(`${process.env.REACT_APP_BACKEND}/series`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        data = await response.json();
        if (response.ok) {
          setAddStatus(`Series ${name} added`);
        } else {
          switch (response.status) {
            case 409:
              setAddStatus(`Series ${name} already exists`);
              break;
            default:
              setAddStatus("Unknown response from backend");
          }
        }
        break;
      case "studio":
        response = await fetch(`${process.env.REACT_APP_BACKEND}/studios`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        data = await response.json();
        if (response.ok) {
          setAddStatus(`Studio ${name} added`);
        } else {
          switch (response.status) {
            case 409:
              setAddStatus(`Studio ${name} already exists`);
              break;
            default:
              setAddStatus("Unknown response from backend");
          }
        }
        break;

      default:
        throw new Error("Invalid selection");
    }
    helpers.setFieldValue("name", "");
  };

  return (
    <div className="border border-black w-max mx-auto p-4">
      <Formik initialValues={initialValues} onSubmit={AddMovieProperty} t>
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
            {addStatus && <h2 className="text-center">{addStatus}</h2>}
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
  );
};

export default AdminAddForm;
