import { FaWhatsapp } from "react-icons/fa";
import { HomePageFormWhite } from "../components/Forms/HomePageFormWhite";
import { HeroSection } from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomeObjectOne, HomeObjectThree, HomeObjectTwo } from "../components/InfoSection/data";

export default function AtibaiaPage() {
    return (
        <>
        <HeroSection 
            titlePerCity="Energia solar em atibaia"
            title="Energia solar para todos"
            subtitle="Produza sua própria energia trocando o custo da sua conta 
            de luz para pagar o investimento no sistema."
            buttonLink="/#calculator"
            buttonLabel="Simular agora"
            imgSrc="/hero-image.jpg"
        />
  
        <InfoSection {...HomeObjectOne}/>
  
        <div id='advantages' className="bg-neutral-100 h-full min-h-[75vh] w-full  flex items-center justify-center flex-col py-24 px-6">
          <div className="w-full max-w-[1450px]">
            <h1 className="text-neutral-600 mb-24 text-2xl leading-tight font-semibold md:text-center md:mb-28 md:text-2xl">
              Beneficios ao gerar sua própria energia
            </h1>
  
            <div className="grid grid-col-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
              <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
                <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                    <img
                      className="h-full md:w-full"
                      src="/pig-money.svg"
                    />
                </div>
  
                <div className="flex flex-col gap-2 w-full h-full md:text-center">
                  <p className="text-base font-semibold text-neutral-600">Reduza sua conta de luz em até</p>
                  <span className="block text-4xl text-sun-500 font-semibold">95%</span>
                </div>
              </div>
  
              <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
                <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                    <img
                      className="h-full md:w-full"
                      src="/house.svg"
                    />
                </div>
  
                <div className="flex flex-col gap-2 w-full h-full md:text-center">
                  <p className="text-base font-semibold text-neutral-600">
                    Valorize seu patrimônio em aproximadamente
                  </p>
                  <span className="block text-4xl text-sun-500 font-semibold">
                    10%
                  </span>
                </div>
              </div>
  
              <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
                <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                    <img
                      className="h-full md:w-full"
                      src="/payback.svg"
                    />
                </div>
  
                <div className="flex flex-col gap-2 w-full h-full md:text-center">
                  <p className="text-base font-semibold text-neutral-600">
                    O retorno do seu investimento é em média de
                  </p>
                  <span className="block text-4xl text-sun-500 font-semibold">
                    5 anos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-neutral-900 h-full min-h-[75vh] w-full flex items-center justify-center flex-col py-24 px-6">
          <div className="w-full max-w-[1450px]">
            <h1 className="text-neutral-200 mb-24 text-2xl leading-tight font-semibold md:text-center md:mb-28 md:text-2xl">
                Confira o passo a passo para aquisição do seu sistema
            </h1>
  
            <div className="grid grid-col-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
              <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                  <div>
                    <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                      1
                    </span>
                  </div>
  
                  <div className="flex flex-col gap-4">
                    <strong className="block text-2xl text-sun-500 font-semibold">
                      Compra Certa
                    </strong>
                    <p className="text-base font-semibold text-neutral-300">
                      Faça a simulação de parcelas que encaixe no valor atual da sua 
                      conta de energia e prepara-se para economizar e valorizar o seu patrimônio
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                  <div>
                    <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                      2
                    </span>
                  </div>
  
                  <div className="flex flex-col gap-4">
                    <strong className="block text-2xl text-sun-500 font-semibold">
                      Fique Tranquilo
                    </strong>
                    <p className="text-base font-semibold text-neutral-300">
                      Para sua comodidade, nós executaremos o serviço de instalação 
                      e cuidaremos de todo o processo desde o projeto até a homologação junto à concessionária de energia.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                  <div>
                    <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                      3
                    </span>
                  </div>
  
                  <div className="flex flex-col gap-4">
                    <strong className="block text-2xl text-sun-500 font-semibold">
                      Bônus Especial
                    </strong>
                    <p className="text-base font-semibold text-neutral-300">
                      Olha que legal, instalamos o sistema de energia solar e você 
                      poderá começar a pagar com o financiamento após 150 dias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="calculator" className="w-full bg-neutral-200 min-h-[800px] flex items-center justify-center">
          <div className="flex items-center justify-center flex-col w-full h-full px-6 md:py-24 md:px-4">
            <h1 className="text-neutral-600 mb-12 text-3xl leading-tight font-semibold md:text-center md:mb-16 md:text-4xl">
              Calcular sistema
            </h1>
  
            <HomePageFormWhite />
          </div>
        </div>
  
        <InfoSection {...HomeObjectTwo}/>
  
  
        <InfoSection {...HomeObjectThree}/>
  
        <a
          className="flex items-center justify-center gap-3 px-4 py-2 max-w-[200px] fixed bottom-4 right-4 bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200"
          href="https://api.whatsapp.com/send?phone=5511941279117" 
          target="_blank"
          rel="noreferrer"
        >
          <span className="flex items-center justify-center">
              <FaWhatsapp size={33}/>
          </span>
  
          <span>Orçamento via whatsapp</span>
        </a>
      </>
    )
}