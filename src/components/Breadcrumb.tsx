import { Link } from 'react-router-dom';

type BreadcrumbProps = {
  current?: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-white/80 mt-2">
      <Link to="/?page=1" className="hover:underline text-white">Home</Link>
      {current && <span className="mx-2">/</span>}
      {current && <span>{current}</span>}
    </nav>
  );
}
