import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.png";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import placeholderUser from "../assets/user.jpg";



const NavBar = () => (
  <nav className='absolute top-0 left-0 grid grid-cols-2 w-full items-center p-8'>
    <div className="justify-self-start flex items-center">
      <h1 className="hidden">Imagifix</h1>
      <img src={logo} alt='Imagiflix'/>

      <ul className=" flex px-5 gap-4">
        <li className="font-bold">Início</li>
        <li>  
          <a href="#series">Séries</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
      </ul>
    </div>    

    <div className="flex justify-self-end items-center">
      <form className="relative w-64">
        <input 
        className="w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100" 
        type='text' 
        placeholder="Titulos, gente, gêneros"
        />
        <button className="absolute right-2 py-1">
          <FontAwesomeIcon icon={ faSearch } />
        </button>
      </form>
      <div className="ml-4 flex">
        <img src={placeholderUser} alt='Foto do usuario'/>
        <button>
         <FontAwesomeIcon className="ml-3" icon={ faCaretDown } />
        </button>
        <ul className="hidden">
          <li>
            <a href='#account'>Minha conta</a>
          </li>
          <li>
            <a href='#logout'>Sair</a>
          </li>
        </ul>
      </div>
      

    </div>
  </nav>

);



export default NavBar;