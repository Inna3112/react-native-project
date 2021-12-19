import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.swapi.tech/api/',
});

export const starWarsAPI = {
  getHeroes() {
    return instance.get<GetSwapiResponse>('people');
  },
  getStarships() {
    return instance.get<GetSwapiResponse>('starships');
  },
};

//types
type GetSwapiResponse = {
  message: string;
  total_records: number;
  total_pages: number;
  next: string;
  previous: string | null;
  results: ItemType[];
};
export type ItemType = {
  uid: string;
  name: string;
  url: string;
};
