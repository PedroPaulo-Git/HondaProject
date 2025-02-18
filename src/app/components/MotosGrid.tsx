"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import motosData from "../../../public/motos.json";

export default function MotosGrid() {
  interface FichaTecnica {
    motor?: string;
    cilindrada?: string;
    potencia_maxima?: string;
    torque_maximo?: string;
    transmissao?: string;
    sistema_partida?: string;
    diametro_x_curso?: string;
    sistema_alimentacao?: string;
    combustivel?: string; // Adicionado combustivel, conforme o dado
    tanque_combustivel?: string;
    oleo_motor?: string;
    dimensoes?: string;
    distancia_entre_eixos?: string;
    distancia_minima_solo?: string;
    altura_assento?: string;
    peso_seco?: string;
    chassi?: string;
    suspensao_dianteira?: string;
    suspensao_traseira?: string;
    freio_dianteiro?: string;
    freio_traseiro?: string;
    pneu_dianteiro?: string;
    pneu_traseiro?: string;
    ignicao?: string;  // Agora opcional
    bateria?: string;   // Agora opcional
    farol?: string;     // Agora opcional
    relacao_compressao?: string; // Adicionado relação de compressão
  }
  

  interface Moto {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
    ficha_tec: FichaTecnica;
  }

  const [motos, setMotos] = useState<Moto[]>([]);
  const router = useRouter();

  const handleClick = (nome: string) => {
    const nomeFormatado = nome.toLowerCase().replace(/\s+/g, "-");
    router.push(`/motos/${nomeFormatado}`);
  };
  const categorias = ["Todos", "Custom", "Trail", "Scooter"];
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  useEffect(() => {
    setMotos(motosData);
  }, []);

  return (
    <div id="motos" className="px-10 mx-0 py-16 lg:px-20  bg-gray-200">
      <div className="flex items-center ">
        <span className="w-6 h-0.5 bg-red-600">

        </span>
  <h1 className="font-bold text-black text-3xl lg:text-4xl ml-2">
        Nossos Veículos
      </h1>

      </div>
    
      <div className="mt-6 lg:flex items-center mb-4">
      <p className="text-gray-600 font-semibold mb-2 lg:mb-0 ml-4 ">Categorizar por:</p>
      <div className="flex flex-wrap ml-1 lg:ml-4 gap-2">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`px-3 text-sm py-1 rounded-full transition-colors ${
              categoriaAtiva === categoria
                ? "bg-gray-600 text-white font-semibold"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300 "
            }`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
    

      <hr className="w-full h-0.5 bg-gray-400" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {motos.map((moto) => (
          <div
            key={moto.id}
            className="border p-4 rounded-lg shadow-sm text-center cursor-pointer flex flex-col justify-between"
            onClick={() =>
              router.push(
                `/motos/${moto.nome.toLowerCase().replace(/\s+/g, "-")}`
              )
            }
          >
            <img src={moto.imagem} className="w-48 mx-auto" alt={moto.nome} />
            <h3 className="text-base text-black font-semibold">{moto.nome}</h3>
            <div className="">
              <a
                onClick={() => handleClick(moto.nome)}
                className="text-gray-600 flex my-4 justify-center items-center"
              >
                <IoIosArrowForward className="text-red-700" />
                <span className="text-sm">SAIBA MAIS</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
