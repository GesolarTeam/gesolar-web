import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";
import { HomePageFormWhite } from "../components/Forms/HomePageFormWhite";
import { HeroSection } from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomeObjectOne, HomeObjectThree, HomeObjectTwo } from "../components/InfoSection/data";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactInputMask from "react-input-mask";

import { IoClose } from "react-icons/io5"
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Home() {  
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    setValue('popUpPhoneNumber', '')
  }

  async function closeModalAndBackupPhoneNumber(data: any) {
    const popUpFormData = { ...data, lp: "pop-up" }

    setTimeout(() => {
      window.open("http://api.whatsapp.com/send?phone=551151984410", '_blank');
    })

    await axios.post("https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm", popUpFormData)

    closeModal()
  }

  return (
    <>
      <Head>
        <title>GESOLAR | Energia Solar para todos</title>
        <meta name="description" content="Venda, instalação e manutenção de energia Solar. Produza sua própria energia e pare de pagar conta de luz."></meta>
      </Head>

      <HeroSection 
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

      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center gap-3 px-4 py-2 max-w-[225px] bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200"
        >
          <span className="flex items-center justify-center">
            <FaWhatsapp size={33}/>
          </span>

          <span>Orçamento via whatsapp</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog 
          as="div"
          className="relative z-10" 
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full flex items-end justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                    >
                      <IoClose size={22} className="text-neutral-700"/>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit(closeModalAndBackupPhoneNumber)} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="block text-sm font-semibold text-neutral-500">
                        Número de telefone
                      </label>
                      
                      <ReactInputMask
                        mask="99 99999-9999"
                        maskChar={null}
                        className="border border-neutral-300 rounded-lg py-2 px-6 focus:outline-none focus:border-sun-500"
                        {...register("popUpPhoneNumber", { 
                          required: "Insira um número de telefone",
                          minLength: {
                            value: 13,
                            message: "Insira um numéro valido"
                          }
                        })}
                      />

                      {!!errors.popUpPhoneNumber && <span className="ml-2 block text-xs font-medium text-red-400">{errors.popUpPhoneNumber.message as string}</span>}
                    </div>

                    <button
                      className="flex items-center justify-center bg-[#2ecc71] text-white font-semibold p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 transition-colors"
                      type="submit"
                    >
                      Orcamento gratuito via whatsapp

                      <FaWhatsapp size={24} className="ml-3"/>
                    </button>
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}