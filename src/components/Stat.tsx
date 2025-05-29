import React from 'react';

interface StatProps {
  label: string;
  value: number;
  color?: string;
};

export default function Stat ({ 
  label,
  value, 
  color = 'bg-gradient-to-r from-[#3f5efb] to-[#fc466b]' 
}: StatProps) {
  const percentage = Math.min(Math.max(value, 0), 100);

  return (
    <div className="w-8/12 my-2">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{label}</span>
        <span className="text-sm font-medium text-white">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
