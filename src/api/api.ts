import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.swapi.tech/api/',
});

export const starWarsAPI = {
  getHeroes() {
    return instance.get<GetHeroesResponse>('people', {
      // params: {name},
    });
  },
};

//types
type GetHeroesResponse = {
  message: string;
  total_records: number;
  total_pages: number;
  next: string;
  previous: string | null;
  results: HeroType[];
};
export type HeroType = {
  uid: string;
  name: string;
  url: string;
};
// export type HeroType = {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
//   eye_color: string;
//   birth_year: string;
//   gender: string;
//   homeworld: string;
//   films: string[];
//   species: [];
//   vehicles: string[];
//   starships: string[];
//   created: string;
//   edited: string;
//   url: string;
// };
