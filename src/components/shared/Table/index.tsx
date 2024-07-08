import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Person } from "../../../types";

interface TableProps {
  people: Person[];
  onEdit: (person: Person) => void;
  onDelete: (id: number) => void;
  showAlert: (message: string, onConfirm: () => void) => void;
}

export const Table: React.FC<TableProps> = ({
  people,
  onEdit,
  onDelete,
  showAlert,
}: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tipo de documento
            </th>
            <th scope="col" className="px-6 py-3">
              Número de documento
            </th>
            <th scope="col" className="px-6 py-3">
              Primer nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Primer apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr
              key={person.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{person.document_type}</td>
              <td className="px-6 py-4">{person.document_number}</td>
              <td className="px-6 py-4">{person.first_name}</td>
              <td className="px-6 py-4">{person.first_lastname}</td>
              <td className="px-6 py-4 flex gap-2">
                <button className="" onClick={() => onEdit(person)}>
                  <PencilIcon className="w-6 h-6" />
                </button>
                <button
                  className=""
                  onClick={() => {
                    showAlert("¿Estás seguro de eliminar esta persona?", () => {
                      onDelete(person.id);
                    });
                  }}
                >
                  <TrashIcon className="w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
