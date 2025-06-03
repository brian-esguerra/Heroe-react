import { Link } from 'react-router-dom';

interface HeroCardProps {
  id: string | number;
  image: string;
  logo: string;
  title: string;
  race: string | null;
  background?: 'primary' | 'secondary';
}

export default function HeroCard({
  id,
  image,
  logo,
  title,
  race,
  background = 'primary',
}: HeroCardProps) {
  const backgroundGradient =
    background === 'secondary'
      ? 'bg-gradient-to-tr from-[#bb7413] to-[#e7d25c]'
      : 'bg-gradient-to-t from-[#3f5efb] to-[#fc466b]';

  return (
    <div className="relative w-[245px] h-[345px] min-w-[245px] rounded-[30px] overflow-hidden shadow-[5px_5px_30px_rgba(0,0,0,0.3)] m-2 mx-auto inline-block group">
      <img
        src={image}
        alt="Hero profile"
        className="h-[82%] w-full object-cover"
      />
      <div
        className={`absolute top-[65%] left-[-5px] h-[65%] w-[108%] skew-y-[-9deg] skew-x-[19deg] rounded-[30px] ${backgroundGradient} z-10`}
      />
      <div className="absolute bottom-[25%] left-[30px] h-[50px] w-[50px] rounded-[20px] overflow-hidden shadow-[5px_5px_30px_rgba(0,0,0,0.7)] z-20">
        <img src={logo} alt="Hero logo" className="h-full w-full object-cover" />
      </div>
      <div className="absolute left-[150px] bottom-[28%] text-white z-20">
        <p>{race}</p>
      </div>
      <div className="absolute left-[20px] text-center bottom-[16%] w-[80%] text-white font-black uppercase z-20">
        <p>{title}</p>
      </div>
      <Link to={`/hero/${id}`} className="btn absolute outline right-[30px] bottom-[4%] z-20">
        Detail
      </Link>
    </div>
  );
}
