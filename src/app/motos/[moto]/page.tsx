"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import motosData from "../../../../public/motos.json";
import ImageBannerMoto from "../../../../public/bannerMotopng.jpg";
import HeaderComponent from "@/app/components/header";
import FooterComponent from "@/app/components/footer";
import WhatsappButton from "@/app/components/whatsappButton";
import FichaTecButton from "@/app/components/buttonVerFichaTecnica";
import BoxWhatsapp from "@/app/components/boxWhatsappMotos";
//import FormCotacao from "@/app/components/FormCotacao";
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
  ignicao?: string; // Agora opcional
  bateria?: string; // Agora opcional
  farol?: string; // Agora opcional
  relacao_compressao?: string; // Adicionado relação de compressão
}

interface Moto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  ficha_tec: FichaTecnica;
  cores?: { name: string; color: string}[];
}

type Aba = "motor" | "transmissao" | "combustivel" | "dimensoes" | "suspensao";

export default function MotoDetalhes() {
  const params = useParams();
  const nomeMoto = Array.isArray(params.moto) ? params.moto[0] : params.moto; // Garante que seja string

  const [motoSelecionada, setMotoSelecionada] = useState<Moto | null>(null);
  const [abaAtiva, setAbaAtiva] = useState<Aba>("motor");
  // const colors = [
  //   { name: "Laranja - Beduin Orange", color: "bg-orange-500" },
  //   { name: "Branco - Ross White", color: "bg-gray-300" },
  //   { name: "Preto - Black Storm", color: "bg-black" },
  //   { name: "Vermelho - Racing Red", color: "bg-red-600" },
  // ];
  
  const [selectedColor, setSelectedColor] = useState<{ name: string; color: string } | null>(null);
  useEffect(() => {
    if (!nomeMoto) return;
  
    const motoEncontrada = motosData.find(
      (m) => m.nome.toLowerCase().replace(/\s+/g, "-") === nomeMoto.toLowerCase()
    );
  
    if (motoEncontrada) {
      setMotoSelecionada({
        ...motoEncontrada,
        cores: motoEncontrada.cores?.map(cor => ({
          name: cor.nome, 
          color: cor.color, 
          // imagem: cor.imagem || ""
        })) || []
      });
  
      // Definir a primeira cor como selecionada
      if (motoEncontrada.cores && motoEncontrada.cores.length > 0) {
        setSelectedColor({
          name: motoEncontrada.cores[0].nome,
          color: motoEncontrada.cores[0].color,
          // imagem: motoEncontrada.cores[0].imagem || ""
        });
      }
    } else {
      setMotoSelecionada(null);
      setSelectedColor(null);
    }
  }, [nomeMoto]);
  

  if (!motoSelecionada) {
    return (
      <p className="text-center mt-10 text-red-600">Moto não encontrada.</p>
    );
  }

  const especificacoes = {
    motor: {
      motor: motoSelecionada.ficha_tec.motor,
      cilindrada: motoSelecionada.ficha_tec.cilindrada,
      potencia_maxima: motoSelecionada.ficha_tec.potencia_maxima,
      torque_maximo: motoSelecionada.ficha_tec.torque_maximo,
      relacao_compressao: motoSelecionada.ficha_tec.relacao_compressao,
    },
    transmissao: {
      transmissao: motoSelecionada.ficha_tec.transmissao,
      sistema_partida: motoSelecionada.ficha_tec.sistema_partida,
      diametro_x_curso: motoSelecionada.ficha_tec.diametro_x_curso,
      ignicao: motoSelecionada.ficha_tec.ignicao,
      bateria: motoSelecionada.ficha_tec.bateria,
      farol: motoSelecionada.ficha_tec.farol,
    },
    combustivel: {
      sistema_alimentacao: motoSelecionada.ficha_tec.sistema_alimentacao,
      combustivel: motoSelecionada.ficha_tec.combustivel,
      tanque_combustivel: motoSelecionada.ficha_tec.tanque_combustivel,
      oleo_motor: motoSelecionada.ficha_tec.oleo_motor,
    },
    dimensoes: {
      dimensoes: motoSelecionada.ficha_tec.dimensoes,
      distancia_entre_eixos: motoSelecionada.ficha_tec.distancia_entre_eixos,
      distancia_minima_solo: motoSelecionada.ficha_tec.distancia_minima_solo,
      altura_assento: motoSelecionada.ficha_tec.altura_assento,
      peso_seco: motoSelecionada.ficha_tec.peso_seco,
    },
    suspensao: {
      chassi: motoSelecionada.ficha_tec.chassi,
      suspensao_dianteira: motoSelecionada.ficha_tec.suspensao_dianteira,
      suspensao_traseira: motoSelecionada.ficha_tec.suspensao_traseira,
      freio_dianteiro: motoSelecionada.ficha_tec.freio_dianteiro,
      freio_traseiro: motoSelecionada.ficha_tec.freio_traseiro,
      pneu_dianteiro: motoSelecionada.ficha_tec.pneu_dianteiro,
      pneu_traseiro: motoSelecionada.ficha_tec.pneu_traseiro,
    },
  };
  const handleInteresse = () => {
    if (!motoSelecionada) return;
  
    const nome = motoSelecionada.nome;
    const preco = motoSelecionada.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const cor = selectedColor ? selectedColor.name : "Não especificado";
  
    const mensagem = `Olá, tenho interesse na moto ${nome}. Preço: ${preco}. Cor: ${cor}.`;
    const url = `https://wa.me/5543991543136?text=${encodeURIComponent(mensagem)}`;
     window.open(url, "_blank");
  };
  
  return (
    <div>
      <WhatsappButton />
      <HeaderComponent />
      <div className="relative">
        <Image src={ImageBannerMoto} className="w-full h-auto" alt="" />

        <h1 className="text-sm -translate-y-6 font-bold text-white mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:-translate-y-20 sm:text-3xl md:-translate-y-16 ">
          {motoSelecionada.nome}
        </h1>

        <img
          src={motoSelecionada.imagem}
          alt={motoSelecionada.nome}
          className="w-32 top-0 max-w-md mx-auto absolute sm:top-3 sm:w-72 lg:w-full sm:left-14 2xl:top-28 2xl:left-48"
        />
      </div>
      {/* <FormCotacao/> */}

      <div className="p-6 mt-20 lg:max-w-4xl mx-auto text-black ">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-thin text-gray-800">
            Escolha a{" "}
            <span className="font-semibold">{motoSelecionada.nome}</span> que{" "}
            <span className="font-semibold">combina com você</span>
          </h1>

          <div className="containerDetailsMoto border-2 border-gray-200 
          mt-10 sm:w-[35%] flex flex-col shadow-xl p-4 py-6 relative">
            <span className="absolute right-0 top-0 p-2 bg-red-700 text-white text-xs ">
              DESTAQUE
            </span>
            <h2 className="text-xl font-semibold ">{motoSelecionada.nome}</h2>

            <div className="w-full items-center text-center mb-2">
              <img
                src={motoSelecionada.imagem}
                alt={motoSelecionada.nome}
                className="w-full mt-6"
              />
                {motoSelecionada.cores && (
                <div>
                  <p className="text-left text-xs text-gray-500 mb-1">{selectedColor?.name}</p>
                  <div className="flex gap-2 items-center mb-4">
                    {motoSelecionada.cores.map((c, index) => (
                      <span
                        key={index}
                        className={`p-[1px] rounded-full cursor-pointer ${selectedColor?.color === c.color ? "border-2 border-gray-400" : "border-2 "}`}
                        onClick={() => setSelectedColor(c)}
                      >
                        <div className={`w-10 h-10 rounded-full ${c.color}`}></div>
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="text-left text-sm flex flex-col  space-y-1">
                <div className="flex flex-wrap">
                  <p className="font-bold inline">Potência Máxima:</p>
                  <span className="inline-block">
                    {motoSelecionada.ficha_tec.potencia_maxima}
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <p className="font-bold inline">Torque Máximo:</p>
                  <span className="inline-block">
                    {motoSelecionada.ficha_tec.torque_maximo}
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <p className="font-bold inline">Combustível:</p>
                  <span className="inline-block">
                    {motoSelecionada.ficha_tec.combustivel}
                  </span>
                </div>
              </div>

              <div
                className="pt-6 pb-2  text-left"
                data-product-key="Branco - Ross White - 1 -"
              >
                <p className="text-sm text-gray-600">A partir de</p>
                <div className="flex items-baseline">
                  <sup className="text-xs text-gray-500">R$</sup>
                  <strong className="text-2xl font-bold">
  {motoSelecionada.preco.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}*
</strong>


                </div>
                <div className="text-xs text-gray-500">
                  <span>Preço público sugerido. Frete não incluso.</span>
                </div>
              </div>

              <div>
                <a
                onClick={handleInteresse}
                  className=" cursor-pointer w-full bg-red-700 flex justify-center p-3 text-sm text-white font-semibold mt-4"
                
                >
                  Tenho interesse
                </a>
              </div>
            </div>
          </div>
        </div>
        <FichaTecButton/>
        <BoxWhatsapp  />
        <div  className="bg-white p-5">
          {/* Tabs - Modificado para mobile */}
          <div className="tabs flex mb-4 justify-center max-md:grid max-md:grid-cols-2 max-md:gap-2 max-md:space-x-0 space-x-5 font-semibold border-b-2 max-md:pb-3 ">
            {[
              "motor",
              "transmissao",
              "combustivel",
              "dimensoes",
              "suspensao",
            ].map((tab) => (
              <button
                key={tab}
                className={`tab-button mb-2 cursor-pointer px-4 py-2 rounded-lg max-md:text-sm max-md:mb-0 ${
                  abaAtiva === tab
                    ? "active text-red-600 bg-red-50 max-md:bg-transparent"
                    : ""
                } hover:text-red-700 transition-colors`}
                onClick={() => setAbaAtiva(tab as Aba)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/_/g, " ")}
              </button>
            ))}
          </div>

          {/* Conteúdo das tabs - Modificado para mobile */}
          <div  className="tab-content">
            <ul className="mt-2 max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-2 max-md:text-sm">
              {Object.entries(especificacoes[abaAtiva]).map(
                ([chave, valor]) =>
                  valor ? ( // Verifica se o valor existe
                    <li key={chave} className="text-gray-700 max-md:py-1">
                      <strong className="max-md:font-bold ">
                        {chave.replace(/_/g, " ")}:
                      </strong>{" "}
                      <span className="max-md:text-gray-600">
                        {valor as string}
                      </span>
                    </li>
                  ) : null // Não renderiza nada se o valor for undefined ou null
              )}
            </ul>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
