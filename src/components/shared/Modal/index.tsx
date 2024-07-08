import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-60"></div>

      <div className="relative bg-white rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full shadow-sm">
            <h3 className="text-lg font-semibold">Busqueda avanzada</h3>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">{children}</div>

        <div className="flex items-center justify-end p-4 border-t">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
