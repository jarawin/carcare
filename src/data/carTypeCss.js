import {
  FaMotorcycle,
  FaCarSide,
  FaShuttleVan,
  FaTruckPickup,
} from 'react-icons/fa';
import { GiCityCar } from 'react-icons/gi';

export default [
  {
    name: 'MC',
    icon: <FaMotorcycle size={30} />,
  },
  {
    name: 'SUV',
    icon: <GiCityCar size={30} />,
  },
  {
    name: 'SEDAN',
    icon: <FaCarSide size={30} />,
  },
  {
    name: 'VAN',
    icon: <FaShuttleVan size={30} />,
  },
  {
    name: 'PICKUP',
    icon: <FaTruckPickup size={30} />,
  },
];
