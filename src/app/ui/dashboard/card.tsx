// ** React Imports
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  logo?: ReactNode;
}

export default function Card({ title, description, logo }: CardProps) {
  

  return (
    <div className="p-8 space-y-3 border-2 border-primary rounded-xl">
      <span className="inline-block text-blue-500">
      {logo}
      </span>
      <h1 className="text-xl font-semibold text-gray-800 capitalize ">{title}</h1>

      <p>{description}</p>
    </div>
  );
}