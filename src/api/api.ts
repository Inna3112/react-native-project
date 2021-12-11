import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const starWarsAPI = {
  getHeroes(search?: string) {
    return instance.get<GetHeroesResponse>('people', {
      params: {search},
    });
  },
};

//types
type GetHeroesResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: HeroType[];
};
export type HeroType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
