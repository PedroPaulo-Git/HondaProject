"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import motosData from "../../../public/motos.json";
export default function motosGrid() {
  interface FichaTecnica {
    motor: string;
    cilindrada: string;
    potencia_maxima: string;
    torque_maximo: string;
    transmissao: string;
    sistema_partida: string;
    diametro_x_curso: string;
    sistema_alimentacao: string;
    combustivel: string;
    tanque_combustivel: string;
    oleo_motor: string;
    dimensoes: string;
    distancia_entre_eixos: string;
    distancia_minima_solo: string;
    altura_assento: string;
    peso_seco: string;
    chassi: string;
    suspensao_dianteira: string;
    suspensao_traseira: string;
    freio_dianteiro: string;
    freio_traseiro: string;
    pneu_dianteiro: string;
    pneu_traseiro: string;
  }

  interface Moto {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
    ficha_tec: FichaTecnica;
  }

  const [motos, setMotos] = useState<Moto[]>([]);
  useEffect(() => {
    // Carregar os dados do JSON
    setMotos(motosData);
  }, []);
  return (
    <div className="px-0 mx-0 py-10 lg:px-9 2xl:px-0 bg-gray-200">
      <h1 className="font-bold text-black text-4xl ml-4 mb-4">
        Nossos Veículos
      </h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {motos.map((moto) => (
          <div
            key={moto.id}
            className="border p-4 rounded-lg shadow-sm text-center"
          >
            <img src={moto.imagem} className="w-48 mx-auto cursor-pointer" alt="" />
            <h3 className="text-lg text-black font-semibold">{moto.nome}</h3>
            <div className="" >
              <a className="text-gray-600 flex my-4 justify-center items-center cursor-pointer">
                <IoIosArrowForward className="text-red-700" />
                <span className="text-sm">SAIBA MAIS
                  </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
