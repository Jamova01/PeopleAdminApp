import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PersonForm } from "../../components/home/PersonForm";
import { useState } from "react";
import { Modal } from "../../components/shared/Modal";
import UsePeople from "../../hooks/UsePeople";
import { Table } from "../../components/shared/Table";
import { Person } from "../../types";
import { ModalAlert } from "../../components/shared/ModalAlert/ModalAlert";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});

  const {
    state,
    setSelectedPerson,
    resetSelectedPerson,
    updatePerson,
    deletePerson,
  } = UsePeople();

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const showAlertModal = (message: string, onConfirm: () => void) => {
    setAlertMessage(message);
    setConfirmAction(() => () => {
      onConfirm();
      setShowAlert(false);
    });
    setShowAlert(true);
  };

  const handleEditPerson = (person: Person) => {
    setSelectedPerson(person);
    setShowModal(false);
  };

  return (
    <div className="container flex flex-col mx-auto my-8">
      <header className="mb-4">
        <h2 className="text-3xl">Administrador de personas</h2>
      </header>
      <section className="flex flex-col gap-4 w-full mx-auto mb-8">
        <div className="px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full shadow-sm">
          <h3 className="text-xl font-medium">Información</h3>
        </div>
        <form className="flex gap-8">
          <div>
            <label
              htmlFor="document_type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tipo de documento *
            </label>
            <select
              id="document_type"
              value=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Seleccione el tipo de documento</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PS">Pasaporte</option>
              <option value="NIT">NIT</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="document"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Número de documento *
            </label>
            <input
              type="text"
              id="document"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="flex items-center shrink-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Buscar
              <MagnifyingGlassIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              className="flex items-center shrink-0 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={toggleModal}
            >
              Búsqueda avanzada
              <MagnifyingGlassIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col gap-4 w-full mx-auto">
        <div className="px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full shadow-sm">
          <h3 className="text-xl font-medium">Información</h3>
        </div>
        <PersonForm
          selectedPerson={state?.selectedPerson || undefined}
          resetSelectedPerson={resetSelectedPerson}
          updatePerson={updatePerson}
          showAlert={showAlertModal}
        />
      </section>
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Table
            people={state.people}
            onEdit={handleEditPerson}
            onDelete={deletePerson}
            showAlert={showAlertModal}
          />
        </Modal>
      )}

      {showAlert && (
        <ModalAlert
          setShowModal={setShowAlert}
          showModal={showAlert}
          message={alertMessage}
          onConfirm={confirmAction}
        />
      )}
    </div>
  );
}

export default Home;
