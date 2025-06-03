import type { ReactNode } from 'react';

interface ViewProps {
  title: string;
  children: ReactNode;
  breadcrumb?: ReactNode;
}

export default function View({ title, children, breadcrumb }: ViewProps) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/src/assets/wallpaper.jpg"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="main relative z-10 flex flex-col px-10 py-8">
        <h1 className="text-5xl font-bold leading-tight mt-2">{title}</h1>
        {breadcrumb && (
          <nav className="text-sm text-white/80">
            {breadcrumb}
          </nav>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
