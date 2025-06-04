import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchHeroes } from '../api/heroesApi';
import type { Hero } from '../types/hero';
import HeroCard from '../components/HeroCard';
import Breadcrumb from '../components/Breadcrumb';
import View from '../components/View';

const PAGE_SIZE = 8;

function HomePage() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const [page, setPage] = useState(pageParam);

  useEffect(() => {
    setLoading(true);
    fetchHeroes(page, PAGE_SIZE)
      .then(setHeroes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  // actualizar la URL
  useEffect(() => {
    setSearchParams({ page: String(page) });
  }, [page, setSearchParams]);

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));

  return (
    <View 
      title="Search Hero"
      breadcrumb={<Breadcrumb current="list" />}
    >
      {loading ? (
        <p className="text-white">Cargando héroes...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {heroes.map(hero => (
              <HeroCard
                key={hero.id}
                id={hero.id}
                image={hero.images.lg}
                logo="/icon-heroe.png"
                title={hero.name}
                race={hero.appearance.race}
                background="primary"
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 bg-gradient-to-t from-[#3f5efb] to-[#fc466b] text-white rounded"
            >
              Siguiente
            </button>
          </div>

          <h1 className="text-1xl font-bold leading-tight text-center mt-10 mb-10">
            Copyright 2025
          </h1>
        </>
      )}
    </View>
  );
}

export default HomePage;
