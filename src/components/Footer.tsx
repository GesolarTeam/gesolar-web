import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-12 px-6 md:px-4 md:py-14 bg-[#131313]">
      <div className="w-full max-w-[1200px] flex flex-col items-start p-2">
        <div className="w-full flex flex-col items-start gap-8 justify-between sm:items-center lg:flex-row">
          <div>
            <Logo />
          </div>
        

          <div className="flex flex-col items-start justify-center gap-3 sm:items-center">
            <h2 className="text-center max-w-2xl text-neutral-200 font-semibold text-sm md:text-base">Gesolar Solucoes em Energia Gesolar Comercio, Importacao e Distribuicao de Equipamentos Partes e Pecas Para Energia Solar LTDA</h2>
            
            <div className="flex flex-col items-start justify-center gap-1 sm:items-center">
              <span className="text-neutral-300 font-medium text-xs md:text-sm">CNPJ: 13.151.417/0001-05</span>
              <span className="text-neutral-400 font-medium text-xs md:text-sm">Av. Paulista, 1842 - conjunto 155 - CEP 01310-200 - Bela Vista - Sao Paulo/Sp</span>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-between flex-col gap-2 py-6 mt-8 border-t-2 border-t-neutral-800 sm:items-center lg:gap-0 lg:flex-row">
          <div>
            <span className="text-neutral-200 font-bold text-sm">© 2022 GESOLAR, Inc. All rights reserved.</span>
          </div>

          <div className="flex gap-6 mb-8 lg:mb-0">
            <Link href="/politica-de-privacidade">
              <a className=" text-neutral-600 font-medium text-sm hover:underline hover:underline-offset-2">Política de privacidade</a>
            </Link>

            <Link href="/termos-de-uso">
              <a className=" text-neutral-600 font-medium text-sm hover:underline hover:underline-offset-2">Termos de uso</a>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/gesolarbr"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsFacebook className="w-6 h-6" />
            </a>

            <a 
              href="https://www.instagram.com/gesolarbr/"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsInstagram className="w-5 h-5"/>
            </a>

            <a 
              href="https://www.linkedin.com/company/gesolar-br/"
              target="_blank"
              rel="noreferrer"
              className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800  text-sun-500 rounded-2xl hover:bg-[#1e1e1e] hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-amber-500 transition-colors duration-200"
            >
              <BsLinkedin className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}