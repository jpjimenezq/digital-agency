import {BoltIcon, BrushIcon, MegaphoneIcon, PieChartIcon, RocketIcon, SearchIcon} from "./Icons";

export const servicios = [
  {
    id: "seo",
    icon: <SearchIcon className="h-8 w-8 text-primary" />,
    titulo: "SEO",
    descripcion:
      "Optimizamos tu sitio web para mejorar su posicionamiento en los motores de búsqueda.",
    detalles: [
      "Análisis de palabras clave",
      "Optimización on-page",
      "Construcción de enlaces de calidad",
    ],
  },
  {
    id: "analisis-datos",
    icon: <PieChartIcon className="h-8 w-8 text-primary" />,
    titulo: "Análisis de Datos",
    descripcion:
      "Analizamos tus datos para tomar decisiones informadas y mejorar tus estrategias.",
    detalles: [
      "Seguimiento de KPIs",
      "Informes personalizados",
      "Interpretación de tendencias",
    ],
  },
  {
    id: "marketing-digital",
    icon: <MegaphoneIcon className="h-8 w-8 text-primary" />,
    titulo: "Marketing Digital",
    descripcion:
      "Diseñamos y ejecutamos campañas de marketing digital efectivas para impulsar tu negocio.",
    detalles: [
      "Publicidad en redes sociales",
      "Email marketing",
      "Marketing de contenidos",
    ],
  },
  {
    id: "diseno-web",
    icon: <BrushIcon className="h-8 w-8 text-primary" />,
    titulo: "Diseño Web",
    descripcion:
      "Creamos sitios web atractivos y funcionales que reflejen la imagen de tu marca.",
    detalles: [
      "Diseño responsivo",
      "UX/UI optimizado",
      "Identidad visual coherente",
    ],
  },
  {
    id: "desarrollo-web",
    icon: <BoltIcon className="h-8 w-8 text-primary" />,
    titulo: "Desarrollo Web",
    descripcion:
      "Desarrollamos soluciones web a medida que se adaptan a tus necesidades.",
    detalles: [
      "Desarrollo frontend y backend",
      "Integración de APIs",
      "Optimización de rendimiento",
    ],
  },
  {
    id: "estrategia-digital",
    icon: <RocketIcon className="h-8 w-8 text-primary" />,
    titulo: "Estrategia Digital",
    descripcion:
      "Diseñamos estrategias digitales personalizadas para maximizar el impacto de tu negocio.",
    detalles: [
      "Análisis de mercado",
      "Planificación de campañas",
      "Optimización de conversiones",
    ],
  },
];
