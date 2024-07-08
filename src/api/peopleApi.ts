import axiosInstance from "./axiosInstance";
import { Person } from "../types";
import { ENDPOINTS } from "./endpoints";

export const fetchPeople = async (): Promise<Person[]> => {
  const { data } = await axiosInstance.get<Person[]>(ENDPOINTS.PEOPLE);
  return data;
};

export const createPerson = async (
  person: Omit<Person, "id">
): Promise<Person> => {
  const { data } = await axiosInstance.post<Person>(ENDPOINTS.PEOPLE, person);
  return data;
};

export const updatePerson = async (id: number, personData: Partial<Person>) => {
  const response = await axiosInstance.patch(
    `${ENDPOINTS.PEOPLE}/${id}`,
    personData
  );
  return response.data;
};

export const deletePerson = async (id: number) => {
  const response = await axiosInstance.delete(`${ENDPOINTS.PEOPLE}/${id}`);
  return response.data;
};
