export interface Person {
  id: number;
  first_name: string;
  second_name?: string;
  first_lastname: string;
  second_lastname?: string;
  birthday: string;
  gender: string;
  birth_country: string;
  marital_status: string;
  document_type: string;
  document_number: string;
}

export interface State {
  people: Person[];
  selectedPerson: Person | null;
  loading: boolean;
  error: string | null;
}

export interface Action {
  type: string;
  payload?: any;
}

export const actionTypes = {
  SET_PEOPLE: "SET_PEOPLE",
  SET_SELECTED_PERSON: "SET_SELECTED_PERSON",
  ADD_PERSON: "ADD_PERSON",
  UPDATE_PERSON: "UPDATE_PERSON",
  DELETE_PERSON: "DELETE_PERSON",
  ERROR: "ERROR",
  RESET_SELECTED_PERSON: "RESET_SELECTED_PERSON",
};
