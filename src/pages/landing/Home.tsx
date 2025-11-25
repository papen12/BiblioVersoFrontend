import './Home.css';
import type { FC } from 'react'; 
import { NavBar } from '../../components/navBar/navBar';
import Hero from '../../components/hero/Hero';
import { FaHome, FaBook, FaUser, FaInfoCircle } from 'react-icons/fa';
import logo from '../../assets/logazo.png'; 
import LibroCarousel from '../../components/carrouselLibros/LibroCarousel';
import AutorCarousel from '../../components/carrouselAutores/AutorCarousel';
import Footer from '../../components/footer/footer';

export const Home: FC = () => {
  const navItems = [
    { id: '1', label: 'Inicio', href: '/', icon: FaHome },
    { id: '2', label: 'Catálogo', href: '/catalogo', icon: FaBook },
    { id: '4', label: 'Registrarse', href: '/signUp', icon: FaUser },
    { id: '5', label: 'Iniciar Sesion', href: '/login', icon: FaInfoCircle },
  ];

  return (
    <div className="home-container">
      <NavBar
        items={navItems}
        logo={logo}
        logoAlt="Logo de la aplicación"
        className="home-navbar"
      />
      <Hero />
      <LibroCarousel />
      <AutorCarousel />
      <Footer />
    </div>
  );
};
