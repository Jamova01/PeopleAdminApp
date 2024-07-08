import { Field, Form, Formik, FormikHelpers } from "formik";
import { personFormSchema } from "../../../schemas/personFormSchema";
import { Person } from "../../../types";
import { formatDateToISO } from "../../../utils/dateUtils";

interface Values {
  first_name: string | "";
  first_lastname: string | "";
  birthday: string | "";
  gender: string | "";
  second_name: string | "";
  second_lastname: string | "";
  birth_country: string | "";
  marital_status: string | "";
}

interface PersonFormProps {
  selectedPerson: Person | undefined;
  resetSelectedPerson: () => void;
  updatePerson: (id: number, personData: Partial<Person>) => void;
  showAlert: (message: string, onConfirm: () => void) => void;
}

export const PersonForm = ({
  selectedPerson,
  resetSelectedPerson,
  updatePerson,
  showAlert,
}: PersonFormProps) => {
  const initialValues: Values = {
    first_name: selectedPerson?.first_name || "",
    first_lastname: selectedPerson?.first_lastname || "",
    birthday: formatDateToISO(selectedPerson?.birthday) || "",
    gender: selectedPerson?.gender || "",
    second_name: selectedPerson?.second_name || "",
    second_lastname: selectedPerson?.second_lastname || "",
    birth_country: selectedPerson?.birth_country || "",
    marital_status: selectedPerson?.marital_status || "",
  };

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    if (selectedPerson) {
      try {
        showAlert("¿Estás seguro de guardar estos cambios?", () => {
          updatePerson(selectedPerson.id, values);
          setSubmitting(false);
          resetSelectedPerson();
        });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    }
  };

  const onReset = (resetForm: () => void) => {
    resetSelectedPerson();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={personFormSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ errors, touched, resetForm }) => (
        <Form className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="first_name">Primer nombre *</label>
              <Field
                id="first_name"
                type="text"
                name="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.first_name && errors.first_name ? (
                <p className="text-red-500 text-sm">{errors.first_name}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="first_lastname">Primer apellido *</label>
              <Field
                id="first_lastname"
                type="text"
                name="first_lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.first_lastname && errors.first_lastname ? (
                <p className="text-red-500 text-sm">{errors.first_lastname}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="birthday">Fecha de nacimiento *</label>
              <Field
                id="birthday"
                type="date"
                name="birthday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.birthday && errors.birthday ? (
                <p className="text-red-500 text-sm">{errors.birthday}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="gender">Género *</label>
              <Field
                id="gender"
                type="text"
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.gender && errors.gender ? (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="second_name">Segundo nombre *</label>
              <Field
                id="second_name"
                type="text"
                name="second_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.second_name && errors.second_name ? (
                <p className="text-red-500 text-sm">{errors.second_name}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="second_lastname">Segundo apellido *</label>
              <Field
                id="second_lastname"
                type="text"
                name="second_lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.second_lastname && errors.second_lastname ? (
                <p className="text-red-500 text-sm">{errors.second_lastname}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="birth_country">País de nacimiento *</label>
              <Field
                id="birth_country"
                type="text"
                name="birth_country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.birth_country && errors.birth_country ? (
                <p className="text-red-500 text-sm">{errors.birth_country}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="marital_status">Estado civil *</label>
              <Field
                id="marital_status"
                type="text"
                name="marital_status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {touched.marital_status && errors.marital_status ? (
                <p className="text-red-500 text-sm">{errors.marital_status}</p>
              ) : null}
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => onReset(resetForm)}
                className="flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Limpiar
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Guardar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
