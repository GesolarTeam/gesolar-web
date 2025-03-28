import { FaPiggyBank } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { IoCash } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Image from 'next/image'
import { WhatsappButton } from "../components/WhatsappButton";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
};


const faqData = [
  {
    question: "O que é a GESOLAR?",
    answer:
      "A GESOLAR permite que pessoas e empresas aproveitem os benefícios da energia solar sem precisar investir em uma usina própria. Com a GESOLAR, você pode ter uma usina solar instalada no seu imóvel e reduzir seus custos de energia de forma sustentável e acessível.",
  },
  {
    question: "Como funciona a locação de energia solar?",
    answer: "A locação de energia solar permite que você utilize energia limpa sem precisar comprar as placas solares...",
  },
  {
    question: "Quais são os benefícios da locação de energia solar?",
    answer: "Os principais benefícios são economia na conta de luz, energia sustentável e sem necessidade de investimento inicial.",
  },
  {
    question: "É necessário fazer um grande investimento inicial?",
    answer: "Não, a locação de energia solar elimina a necessidade de um grande investimento inicial.",
  },
  {
    question: "Qual é o prazo do contrato?",
    answer: "O prazo do contrato pode variar conforme a necessidade do cliente, geralmente entre 5 e 20 anos.",
  },
  {
    question: "Meu crédito ficará comprometido?",
    answer: "Não, a locação de energia solar não compromete seu crédito, pois não se trata de um financiamento.",
  },
];

export default function LocaçãoDeEnergia() { 
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  
  const formValidation: any = {
    nameInputFieldOptions: {
      required: "Este campo é obrigatorio. "
    },
    emailInputFieldOptions: {
      required: "Este campo é obrigatorio. ",
      pattern: {
        value: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
        message: 'insira um formato de email valido' 
      }
    },
    phoneNumberInputFieldOptions: {
      required: "Este campo é obrigatorio. ",
    },
    zipCodeInputFieldOptions: {
      required: "Este campo é obrigatorio. ",
    },
  }
  async function onFormSubmit(data: any) {
    axios.post('https://hook.us1.make.com/si8cck7nkx36xi5lku4im9yscxiazgep', data)
     .then(res => {
      reset()
      successToast()
     })
     .catch(err => errorToast())
  }

  const successToast = () => toast.success('Dados enviados para nossos especialistas', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

  const errorToast = () => toast.error('Algo deu errado, tente novamente mais tarde!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });

  
  return (
    <>
    <div>
      <div className="relative w-full h-[90vh]">
      <Image
       
       src="/locacao-hero-image.jpg"
       alt="Imagem painel locação"
       layout="fill" 
       objectFit="cover" 
       className="rounded-lg opacity-70"
       priority
        
      />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 mt-16">
  <div className="flex md:flex-row flex-col items-center md:space-x-8 space-y-6 md:space-y-0 max-w-3xl w-full">
    
    {/* Lado esquerdo: Título */}
    <div className="flex flex-col items-center md:items-start">
    
      
      {/* Título */}
      <div className="text-white text-center md:text-left mt-4 space-y-2 lg:space-y-4">
        <h2 className="text-2xl font-bold lg:text-4xl">Locação de Energia Solar</h2>
        <p className="text-lg lg:text-2xl">Alugue e economize.</p>
        <p className="text-md lg:text-xl">✔ Sem compra de placas.</p>
        <p className="text-md lg:text-xl">✔ Sem gasto com instalação.</p>
        <p className="text-md lg:text-xl">✔ Sem custo de manutenção.</p>
      </div>
    </div>
  

    {/* Lado direito: Formulário */}
    <form onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col space-y-4 w-full max-w-md max-sm:mt-10"
    >
      <input 
        type="text" 
        placeholder="Nome" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500"
        {...register('name', formValidation.nameInputFieldOptions)}
      />

      <input 
        type="text" 
        placeholder="Email" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500"
        {...register('email', formValidation.emailInputFieldOptions)}
      />

      <input
        type="tel" 
        placeholder="Telefone" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500"
        {...register('phoneNumber', formValidation.phoneNumberInputFieldOptions)}
      />

      <input
        type="text" 
        placeholder="Cidade" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500"
        {...register('cityPlace', formValidation.cityPlaceInputFieldOptions)}
      />
      
      <input 
        type="number" 
        placeholder="Quanto paga na conta de energia?" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500" 
        {...register('electricityBillValue', formValidation.zipCodeInputFieldOptions)}
      />

      <button type="submit" className="bg-sun-500 text-white p-3 rounded-md hover:bg-amber-500 transition">
        Enviar
      </button>
    </form>
  </div>
    </div>
    </div>

    
      <WhatsappButton/>

      <div className="flex flex-col md:flex-row items-center bg-neutral-100 py-5 p-8 rounded-2xl shadow-lg max-w-auto mx-h-auto mx-auto">
  {/* Imagem esquerda */}
  <img src="/undraw_for-sale_7qjb.svg" alt="Energia Solar" className="w-full md:w-1/2 rounded-lg" />

  {/* Conteúdo direita */}
  <div className="mx-10 lg:mr-16 md:w-1/2 text-neutral-800 py-6 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
    <h2 className="text-2xl font-bold text-neutral-900">Alugue agora energia solar!</h2>
    <p className="mt-4 text-md leading-relaxed">
      Com a locação de placas de energia solar da <strong>GESOLAR</strong>, pessoas e empresas podem aproveitar os benefícios de gerar a própria energia de forma simples e prática.
    </p>
    <p className="mt-2 text-md leading-relaxed">
      Nossa solução inclui a instalação de uma usina solar diretamente no telhado do seu imóvel, seja ele próprio ou alugado, promovendo economia e sustentabilidade.
    </p>
    <p className="mt-2 text-md leading-relaxed">
      Todo o processo é facilitado em um modelo de pagamento mensal, baseado na quantidade de energia que se deseja gerar. Elaboramos um projeto personalizado à sua necessidade.
    </p>
    <p className="mt-2 text-md leading-relaxed">
      Essa modalidade oferece diversas vantagens, desde a economia na despesa com energia, até a possibilidade de se tornar proprietário da usina instalada ao final do contrato.
    </p>

    {/* Botão */}
    <button onClick={scrollToTop} className="mt-6 bg-sun-500 text-white py-3 px-6 rounded-lg hover:bg-amber-500 transition">

      Quero economizar
    </button>
  </div>
</div>


{/* Cards */}
<div className="flex flex-col items-center py-16 px-4 gap-6">
  {/* Título centralizado */}
  <h1 className="text-white text-xl font-extrabold text-center w-full">
    Por Que Escolher a Locação de Energia Solar?
  </h1>

  {/* Grid para os cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <FaPiggyBank />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Economia</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">Redução</span>  de até <span className="font-bold">30%</span> na sua despesa com energia elétrica durante o contrato.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <FaFlag />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Livre das Bandeiras Tarifárias</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        Quem gera a própria energia
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">não paga mais por isso</span> por causa das bandeiras tarifárias.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <BsBank2 />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Valorização do imóvel</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        Imóveis com usina solar instaladas
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">valorizam entre 5% e 10%</span> devido à economia e sustentabilidade.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <FaRecycle />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Sustentabilidade</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        O cliente passa a produzir a
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">sua própria energia</span> de forma limpa e sustentável.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <IoCash />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Sem exigência de crédito</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        A locação de placas solares
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">não compromete</span> sua capacidade de tomar crédito.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-sun-500 p-6 md:p-4 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 md:w-56 lg:w-64 h-64 md:h-56 lg:h-64">
      <div className="flex justify-center mb-4 md:mb-2 text-white text-4xl md:text-3xl lg:text-4xl">
        <IoShieldCheckmark />
      </div>
      <h1 className="text-white font-bold text-lg md:text-base lg:text-lg mb-4 md:mb-2">Segurança</h1>
      <p className="text-sm md:text-xs lg:text-sm">
        A Unidade Consumidora (UC) 
        <span className="font-bold block mt-1 md:mt-0.5 lg:mt-1">continua no nome do cliente</span> garantindo toda a geração de energia.
      </p>
    </div>
  </div>
</div>




{/* Section 4*/}
<div className="pb-10 w-full grid grid-cols-1 grid-rows-1 gap-auto items-center lg:grid-cols-2">
    <div className=" mx-auto px-4 lg:mx-0">
    <div className="max-w-xl lg:pl-8">
      <h1 className="mb-6 text-3xl leading-tight sm:text-4xl font-bold text-neutral-200">Entenda como <span className="text-sun-500">funciona</span>!</h1>
      <ul className="max-w-xl mb-16 flex flex-col gap-4">

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>O cliente assina o contrato de locação com intenção de compra da usina e paga a taxa de adesão. </li>
      </div>

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>Nós construímos a usina de  forma personalizada de acordo com a necessidade do cliente.
          </li>
      </div>

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span> Em até 90 dias o cliente já estará economizando, gerando sua própria energia limpa e sustentável.
          </li>
      </div>

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span> Após o fim do contrato a usina será transferida para titularidade do locatário.
          </li>
      </div>   

      </ul>

    </div>
    </div>

    <div>
      <div className="max-w-xl h-full flex mx-auto lg:mx-0">
          <img src = "/business-person-planning-alternative-energies.jpg" className="px-4 py-0 rounded-[40px]"/>

      </div>
    </div>
</div>

{/* Section 5 */}

<div className="w-full">
      {/* Seção de Destaque */}
      <div className="bg-white text-center py-8 md:py-12 px-4">
        <h1 className="text-lg md:text-3xl font-bold text-sun-500 max-w-md md:max-w-2xl mx-auto">
          Comece a gerar sua própria energia limpa e economize sem precisar comprar placas de energia solar.
        </h1>
        <button onClick={scrollToTop} className="mt-6 px-6 py-3 bg-sun-500 text-white font-semibold rounded-full shadow-lg w-full md:w-auto">
          QUERO ECONOMIZAR
        </button>
      </div>

      {/* Perguntas Frequentes */}
      <div className="bg-neutral-900 py-8 md:py-12 px-4">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center md:text-left">
            Perguntas Frequentes
          </h2>
          <div className="bg-neutral-700 p-4 md:p-6 rounded-lg shadow">
            {faqData.map((item, index) => (
              <div key={index} className="mb-2">
                {/* Pergunta */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`w-full text-left flex justify-between items-center p-3 md:p-4 font-semibold text-white bg-sun-500 rounded transition ${
                    openIndex === index ? "rounded-t" : "rounded"
                  }`}
                >
                  {item.question}
                  <span className="text-lg font-bold">{openIndex === index ? "−" : "+"}</span>
                </button>

                {/* Resposta (Dropdown) */}
                {openIndex === index && (
                  <div className="bg-neutral-800 text-white p-3 md:p-4 rounded-b">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <ToastContainer />
    </>
  );
}

