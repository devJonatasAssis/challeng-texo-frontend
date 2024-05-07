"use client";

import "./styles.css";
import Image from "next/image";
import MenuItem from "../MenuItem";

import { FiHome } from "react-icons/fi";
import { BsCameraReels } from "react-icons/bs";

import logo from "../../../public/texo.png";

export default function Menu() {
  return (
    <aside className="container-menu">
      <div className="logo-menu">
        <Image src={logo} alt="Logo Texo Challenge Frontend" />
      </div>
      <ul>
        <MenuItem
          icon={<FiHome color="#FFF" size={20} />}
          path="/"
          label="Dashboard"
        />

        <MenuItem
          icon={<BsCameraReels color="#FFF" size={20} />}
          path="/filmes"
          label="Filmes"
        />
      </ul>
    </aside>
  );
}
