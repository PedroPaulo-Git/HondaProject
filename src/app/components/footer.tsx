import React from "react";

const FooterComponent = () => {
  return (
    <section id="footer" className=" text-black ">
      <div className=" bg-[#202020] py-16">
        <div className="flex flex-col justify-center items-center text-center space-y-8">
          <h2 className="text-4xl px-4 lg:px-0 font-bold text-white">
            Prêmios Conquistados
          </h2>
          <ul className="flex mx-auto justify-center space-x-6">
            <li>
              <img
                src="/Moto_do_Ano_SCOOTER_duasrodas_22.png"
                alt="Prêmio Moto do ano Duas rodas - Scooter 2022 "
              />
            </li>
            <li>
              <img
                src="/Medalha_ouro_Motopremium_21.png"
                alt="MEDALHA DE OURO - SCOOTERS OU MOTONETAS ATÉ 200CC "
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="px-8 2xl:px-0 ">
        <div className="p-4 pt-14 text-sm w-full lg:text-base sm:w-8/12 md:w-10/12 lg:w-8/12  lg:ml-4">
          <div>
            <p className="mb-2">
              <strong>
                *Tabela em vigor a partir de 02 de janeiro de 2025.
              </strong>{" "}
              Valor com base em São Paulo, não incluindo despesas com frete.
            </p>

            <p className="mb-2">
              Os preços informados são sugeridos pela fábrica e podem variar
              conforme região e custo do frete. Consulte a concessionária Honda
              de sua preferência e confira as condições. Sujeito a
              disponibilidade de estoque no momento da consulta.
            </p>

            <p className="mb-2">
              Conheça o&nbsp;
              <a
                target="_blank"
                className="font-bold text-red-600 hover:underline"
              >
                Consórcio Nacional Honda
              </a>
              &nbsp;e o&nbsp;
              <a
                target="_blank"
                className="font-bold text-red-600 hover:underline"
              >
                Banco Honda
              </a>
              . Confira os planos e a melhor opção para você.
            </p>

            <p className="mb-2">
              *Para mais detalhes sobre a Garantia Honda, acesse&nbsp;
              <a
                target="_blank"
                className="font-bold text-red-600 hover:underline"
              >
                aqui.
              </a>
            </p>

            <p className="mb-4">
              A Honda reserva-se o direito de, a qualquer tempo, efetuar as
              alterações que julgar necessárias nas especificações e no desenho
              de seus produtos, independentemente de comunicação prévia.
            </p>

            <p>
              <img
                alt="suframa.png"
                height="61"
                src="/suframa.png"
                width="100"
                loading="lazy"
                className="my-12"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Social Icons */}
          <div className="w-full border-b-2 border-gray-300 mb-4 lg:border-none md:w-6/12 lg:w-3/12 lg:ml-4 order-1 lg:order-2 ">
            <div className="flex justify-between items-center space-x-4  mb-10 lg:mb-0">
              <a target="_blank">
                <img className="w-6 h-6" src="/facebook.svg" alt="Facebook" />
              </a>
              <a target="_blank">
                <img className="w-6 h-6" src="/instagram.svg" alt="Instagram" />
              </a>
              <a target="_blank">
                <img className="w-6 h-6" src="/youtube.svg" alt="Youtube" />
              </a>
              <a target="_blank">
                <img className="w-6 h-6" src="/tiktok.svg" alt="TikTok" />
              </a>
            </div>
          </div>

          {/* Enterprise Info */}
          <div className="w-full lg:w-8/12 order-2 lg:order-1 ">
            <div className="space-y-4">
              {/* Logos */}
              <div className="flex justify-between items-center w-full lg:w-6/12">
                <a>
                  <img
                    className="w-[400px] h-[120px] lg:w-[600px] lg:h-[170px] -m-14 -ml-14 lg:-ml-24"
                    src="/LogoToWhite.png"
                    alt="Potiguar Honda"
                  />
                </a>
                <a>
                  <img
                    className="w-12 h-10"
                    src="/logo-honda.svg"
                    alt="Honda"
                  />
                </a>
              </div>

              {/* Enterprise Text */}
              <div className="text-gray-600 text-sm border-b-2 border-gray-300">
                <p className="mb-8">
                  Os valores informados por nossas mídias digitais podem sofrer
                  variações decorrentes de: Data do fechamento do negócio;
                  Disponibilidade de estoque; Ano / Modelo; Especificações dos
                  pedidos. Estando sujeita a confirmação mediante o
                  comparecimento pessoal na loja. Informações de preços válidos
                  apenas para o dia do contato.
                </p>
              </div>

              {/* Contacts */}
              <div className="hidden lg:flex space-x-6 pb-6">
                <a className="flex items-center  font-semibold hover:underline">
                  Contato{" "}
                  <img className="ml-2 w-4" src="/arrow-right-red.svg" />
                </a>
                <a
                  className="flex items-center  font-semibold hover:underline"
                  target="_blank"
                >
                  Trabalhe Conosco{" "}
                  <img className="ml-2 w-4" src="/arrow-right-red.svg" />
                </a>
              </div>
            </div>

           
          </div>
          
        </div>
        <div className="my-8 text-sm px-10 text-center ">
              <span className="text-[#9B9B9B] ">
                Copyright © 2025 Catalano Motos. Todos os direitos reservados.
              </span>
            </div>
      </div>
    </section>
  );
};

export default FooterComponent;
