import React from 'react';
import Image from 'next/image';

const tools = [
  { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'Node.js', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
  { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
  { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
  { name: 'MySQL', logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
  { name: 'Angular', logo: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg' },
];

const Herramientas: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Nuestras Herramientas y Tecnologías</h2>
        <p className="text-center text-gray-500 mb-12">Utilizamos las mejores herramientas del mercado para ofrecer resultados excepcionales.</p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => (
            <div key={tool.name} className="col-span-1 flex justify-center items-center">
              <Image
                src={tool.logo}
                alt={tool.name}
                width={100}
                height={100}
                className="max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herramientas;