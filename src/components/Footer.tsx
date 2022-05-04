import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const today = new Date ();

  return (
    <footer className="mt-24 mx-40 pb-4 text-gray-500 text-sm">
      <FontAwesomeIcon icon={faFacebookSquare} size='2x' className="hover:text-white cursor-pointer" />
      <FontAwesomeIcon icon={faInstagram} size='2x' className='px-6 hover:text-white cursor-pointer'/>
      <FontAwesomeIcon icon={faTwitter} size='2x' className="hover:text-white cursor-pointer"/>
      <FontAwesomeIcon icon={faYoutube} size='2x' className='px-6 hover:text-white cursor-pointer' />
      <div className="my-7 grid grid-cols-4">
        <a className="hover:text-white" href="#" >Idiomas e legendas</a>
        <a className="hover:text-white"  href="#">Audiodescrição</a>
        <a className="hover:text-white" href="#">Centro de Ajuda</a>
        <a className="hover:text-white" href="#">Cartão pré-pago</a>
        <a className="hover:text-white" href="#">Imprensa</a>
        <a className="hover:text-white" href="#">Relação com investidores</a>
        <a className="hover:text-white" href="#">Carreiras</a>
        <a className="hover:text-white" href="#">Termos de uso</a>
        <a className="hover:text-white" href="#">Privacidade</a>
        <a className="hover:text-white" href="#">Avisos legais</a>
        <a className="hover:text-white" href="#">Preferências de Cookies</a>
        <a className="hover:text-white" href="#">Informações corporativas</a>
        <a className="hover:text-white" href="#">Entre em contato</a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>

    </footer>
  );
};

export default Footer;