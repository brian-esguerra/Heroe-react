import type { Hero } from '../types/hero';

const BASE_URL = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api';

/* export const fetchHeroes = async (): Promise<Hero[]> => {
  const res = await fetch(`${BASE_URL}/heroes?size=20`);
  if (!res.ok) throw new Error('Error al obtener héroes');
  const data = await res.json();
  return data.items;
}; */

export async function fetchHeroes(page: number, size: number): Promise<Hero[]> {
  const response = await fetch(`${BASE_URL}/heroes?page=${page}&size=${size}`);
  const data = await response.json();
  return data.items; // <- Asegúrate de que el backend devuelve "items"
}

export const fetchHeroById = async (id: string): Promise<Hero> => {
  const res = await fetch(`${BASE_URL}/hero?id=${id}`);
  if (!res.ok) throw new Error('Error al obtener héroe por ID');
  return res.json();
};
