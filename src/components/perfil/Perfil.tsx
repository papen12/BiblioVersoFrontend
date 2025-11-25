import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../navBar/navBar";
import logo from '../../assets/logazo.png';
import { FaHome, FaUser, FaBook, FaSignOutAlt, FaFeather, FaStickyNote } from 'react-icons/fa';
import { SideBar } from "../sideBar/sideBar";
import './Perfil.css';
import LibroCatalogo from "../catalogoLibro/LibroCatalogo";
import { fetchApi } from "../../services/api";
import MiPerfil from "../miPerfil/MiPerfil";
import AutorCatalogo from "../catalogoAutor/AutorCatalogo";
import ReservaCatalogo from "../catalogoReservas/CatalogoReservas";

const Perfil = () => {
  const [cliente, setCliente] = useState<any>(null);
  const [mensaje, setMensaje] = useState("");
  const [componenteActual, setComponenteActual] = useState<React.ReactNode>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const data = await fetchApi("/auth/perfil");
        setCliente(data.cliente);
        setComponenteActual(<MiPerfil cliente={data.cliente} />);
      } catch (error: any) {
        setMensaje(error.message || "No autorizado");
      }
    };
    fetchPerfil();
  }, []);

  const mostrarComponente = (id: string) => {
    if (!cliente) return;
    switch(id) {
      case "1": setComponenteActual(<MiPerfil cliente={cliente} />); break;
      case "2": setComponenteActual(<LibroCatalogo />); break;
      case "3": setComponenteActual(<AutorCatalogo />); break;
      case "4": setComponenteActual(<ReservaCatalogo ciCliente={cliente.ci_cliente} />); break;
      case "5": logout(); break;
      default: setComponenteActual(null);
    }
  };

  const navItems = [
    { id: '1', label: 'Inicio', href: '/', icon: FaHome },
  ];

  const sideBarItems = [
    { id: '1', label: 'Mi Perfil', icon: FaUser, onClick: () => mostrarComponente('1') },
    { id: '2', label: 'Catálogo', icon: FaBook, onClick: () => mostrarComponente('2') },
    { id: '3', label: 'Autores', icon: FaFeather, onClick: () => mostrarComponente('3') },
    { id: '4', label: 'Reservar', icon: FaStickyNote, onClick: () => mostrarComponente('4') },
    { id: '5', label: 'Cerrar Sesión', icon: FaSignOutAlt, onClick: () => mostrarComponente('5') },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (mensaje) return <p>{mensaje}</p>;
  if (!cliente) return <p>Cargando...</p>;

  return (
    <div className="page-container">
      <NavBar
        items={navItems}
        logo={logo}
        logoAlt="Logo de la aplicación"
        className="home-navbar"
      />
      <div className="content-container">
        <SideBar username={cliente.usuario} items={sideBarItems} />
        <main className="main-content">
          {componenteActual}
        </main>
      </div>
    </div>
  );
};

export default Perfil;
