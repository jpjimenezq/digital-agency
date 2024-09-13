import React from 'react';
import { Check, X } from 'lucide-react';

const services = [
  {
    name: 'Básico',
    price: '€499/mes',
    features: [
      { name: 'Gestión de redes sociales', included: true },
      { name: 'SEO básico', included: true },
      { name: 'Análisis mensual', included: true },
      { name: 'Publicidad en redes sociales', included: false },
      { name: 'Desarrollo web', included: false },
    ],
  },
  {
    name: 'Profesional',
    price: '€999/mes',
    features: [
      { name: 'Gestión de redes sociales', included: true },
      { name: 'SEO avanzado', included: true },
      { name: 'Análisis semanal', included: true },
      { name: 'Publicidad en redes sociales', included: true },
      { name: 'Desarrollo web', included: false },
    ],
  },
  {
    name: 'Empresarial',
    price: '€1999/mes',
    features: [
      { name: 'Gestión de redes sociales', included: true },
      { name: 'SEO avanzado', included: true },
      { name: 'Análisis diario', included: true },
      { name: 'Publicidad en redes sociales', included: true },
      { name: 'Desarrollo web', included: true },
    ],
  },
];

const ServiceComparison: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Comparativa de Servicios</h2>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{service.price}</p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature.name} className="flex space-x-3">
                      {feature.included ? (
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <X className="flex-shrink-0 h-5 w-5 text-red-500" />
                      )}
                      <span className="text-sm text-gray-500">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;