import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHeroById } from '../api/heroesApi';
import type { Hero } from '../types/hero';
import View from '../components/View';
import Breadcrumb from '../components/Breadcrumb';
import Stat from '../components/Stat';

function HeroPage() {
  const { id } = useParams<{ id: string }>();
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchHeroById(id)
        .then(data => {
          if (!data || Object.keys(data).length === 0) {
            setHero(null);
          } else {
            setHero(data);
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);
  
  return (
    <View 
      title="Detail Hero"
      breadcrumb={<Breadcrumb current={hero ? hero.name : ''} />}
    >
      {loading ? (
        <p className="text-white">Cargando héroes...</p>
      ) : (
        <>
          {hero == null ? (
            <p className="text-red-500">Héroe no encontrado</p>
          ) : (
            <div className="items-center flex flex-wrap mt-4">
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." className="max-w-full rounded-lg shadow-lg" src={hero.images.lg} />
  </div>
  <div className="w-full md:w-6/12 ml-auto mr-auto px-4 bg-gray-00 bg-opacity-50 rounded">
    <div className="md:pr-10">
      <h3 className="text-3xl font-semibold">{hero.biography.fullName}</h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-200">
        {hero.work.occupation}
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                {hero.appearance.gender}
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">{hero.appearance.race}</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">{hero.biography.publisher}</h4>
            </div>
          </div>
        </li>
      </ul>
      <h3 className="text-2xl mt-4 font-semibold">Powerstats</h3>
        <Stat label="Combat" value={hero.powerstats.combat} />
        <Stat label="Power" value={hero.powerstats.power} />
        <Stat label="Speed" value={hero.powerstats.speed} />
        <Stat label="Strength" value={hero.powerstats.strength} />
    </div>
  </div>
</div>
          )}
        </>
      )}
    </View>
  );
};

export default HeroPage;