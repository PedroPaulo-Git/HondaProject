"use client";

import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import SubHeaderComponent from "./subheader";
import Link from "next/link";

const HeaderComponent = () => {
  const [openMobile, setOpenMobile] = useState(false);
  useEffect(() => {
    console.log(openMobile);
  }, [openMobile]);
  return (
    <>
      <header className="border-b bg-[#ededed] border-gray-200 ">
        <div className="mx-auto max-w-screen-xl px-0 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="sm:hidden my-auto mx-2">
                <button
                  className="navbar-burger flex items-center text-gray-600 p-3 top-1.5 z-10 absolute"
                  onClick={() => setOpenMobile(!openMobile)}
                >
                  <svg
                    className="block h-6 w-6 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <Link href="/">
              <img

                src="/LogoToWhite.png"
                className="w-[300px] lg:w-[500px] -my-10 -ml-0 lg:-m-14 2xl:-ml-20 z-0"
              />
              </Link>
            </div>
            <span className="flex items-center gap-2 mr-4 sm:hidden">
              <IoLogoWhatsapp className="text-green-500 text-2xl" />
              <Link
                href="http://wa.me/5543991543136?text=Gostaria%20de%20entrar%20em%20contato%20!"
                id="btn-agendar"
                className="bg-red-500 text-white px-4 text-sm py-1 rounded-3xl"
              >
                Serviços
              </Link>
            </span>

            {openMobile && (
              <div>
                <div className="navbar-menu relative z-50 block">
                  <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                  <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                      <Link
                        className="mr-auto text-3xl font-bold leading-none"
                        href="#"
                      >
                   
              <img

                src="/LogoToWhite.png"
                className="-my-6 -ml-14 z-0"
              />
             
                      </Link>
                      <button
                        className="navbar-close"
                        onClick={() => setOpenMobile(!openMobile)}
                      >
                        <svg
                          className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <ul>
                        <li className="mb-1">
                          <Link
                            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-red-600 rounded"
                            href="#motos"
                          >
                             Ver Motos
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-red-600 rounded"
                             href="#motos"
                          >
                           Contato
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-red-600 rounded"
                             href="#motos"
                          >
                            Sobre
                          </Link>
                        </li>
                       
                      </ul>
                    </div>
           
                  </nav>
                </div>
              </div>
            )}

            <div className=" items-center gap-4 hidden md:flex">
              <Link
               href="http://wa.me/5543991543136?text=Gostaria%20de%20entrar%20em%20contato%20!"
                className="inline-flex text-white items-center justify-center gap-1.5 rounded-sm border  bg-red-600 px-5 py-3 hover:bg-red-700 transition-all focus:ring-3 focus:outline-hidden"
                type="button"
              >
                <FaPhone />
                <span className="text-sm font-bold ">Telefone</span>
              </Link>

              <Link
               href="http://wa.me/5543991543136?text=Gostaria%20de%20entrar%20em%20contato%20!"
                className="flex items-center gap-2 rounded-sm bg-green-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-600 focus:ring-3 focus:outline-hidden"
                type="button"
              >
                <IoLogoWhatsapp className="text-lg" />
                <span className="font-bold ">Whatsapp</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div></div>
      <SubHeaderComponent />
    </>
  );
};

export default HeaderComponent;
