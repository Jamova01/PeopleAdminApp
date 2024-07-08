import { useReducer, useEffect } from "react";
import { State, Action, actionTypes, Person } from "../types";
import {
  fetchPeople as fetchPeopleApi,
  updatePerson as updatePersonApi,
  deletePerson as deletePersonApi,
} from "../api/peopleApi";

const initialState: State = {
  people: [],
  selectedPerson: null,
  loading: true,
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.SET_PEOPLE:
      return { ...state, people: action.payload, loading: false };
    case actionTypes.ADD_PERSON:
      return { ...state, people: [...state.people, action.payload] };
    case actionTypes.SET_SELECTED_PERSON:
      return { ...state, selectedPerson: action.payload };
    case actionTypes.UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map((person) =>
          person.id === action.payload.id ? action.payload : person
        ),
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
      };
    case actionTypes.ERROR:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.RESET_SELECTED_PERSON:
      return { ...state, selectedPerson: null };
    default:
      return state;
  }
};

const UsePeople = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPeople = async () => {
    try {
      const data = await fetchPeopleApi();
      dispatch({ type: actionTypes.SET_PEOPLE, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.ERROR, payload: error });
    }
  };

  const updatePerson = async (id: number, personData: Partial<Person>) => {
    try {
      const updatedPerson = await updatePersonApi(id, personData);
      dispatch({ type: actionTypes.UPDATE_PERSON, payload: updatedPerson });
    } catch (error) {
      dispatch({ type: actionTypes.ERROR, payload: error });
    }
  };

  const deletePerson = async (id: number) => {
    try {
      await deletePersonApi(id);
      dispatch({ type: actionTypes.DELETE_PERSON, payload: id });
    } catch (error) {
      dispatch({ type: actionTypes.ERROR, payload: error });
    }
  };

  const setSelectedPerson = (person: Person) => {
    dispatch({ type: actionTypes.SET_SELECTED_PERSON, payload: person });
  };

  const resetSelectedPerson = () => {
    dispatch({ type: actionTypes.RESET_SELECTED_PERSON });
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return {
    state,
    fetchPeople,
    setSelectedPerson,
    resetSelectedPerson,
    updatePerson,
    deletePerson,
  };
};

export default UsePeople;
