import { API_URL } from "./constants";

export const getAllCards = async () => {
  const url = API_URL;
  const response = await fetch(url);

  const data = await response.json();
  return data;
};
