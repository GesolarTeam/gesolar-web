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
    <div className="h-[90vh] relative w-full opacity-70">
      <img
        className="w-full h-full object-cover"
        src="/beautiful-alternative-energy-plant-with-solar-panels.jpg"
        alt="" 
      />
    </div>

    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
  <div className="flex md:flex-row flex-col items-center md:space-x-8 space-y-6 md:space-y-0 max-w-3xl w-full">
    
    {/* Lado esquerdo: Logo + Título */}
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
      className="flex flex-col space-y-4 w-full max-w-md"
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
        placeholder="CEP" 
        className="border p-3 rounded-md focus:ring-2 focus:ring-sun-500"
        {...register('zipCode', formValidation.zipCodeInputFieldOptions)}
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




      {/* Botão WhatsApp */}
      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="flex items-center justify-center gap-3 px-4 py-2 max-w-[225px] bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200"
        >
          <span className="flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="33"
              width="33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
          </span>
          <span>Orçamento via WhatsApp</span>
        </button>
      </div>

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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <FaPiggyBank />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Economia</h1>
      <p>
        <span className="font-bold">Reduza</span> a sua despesa com energia elétrica durante todo o período do contrato.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <FaFlag />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Livre das Bandeiras Tarifárias</h1>
      <p> Quem gera a própria energia
        <span className="font-bold">não paga mais por isso</span> por causa das bandeiras tarifárias.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <BsBank2 />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Valorização do imóvel</h1>
      <p> Imóveis com usina solar instaladas
        <span className="font-bold">valorizam em média de 5% a 10%</span> pelo benefício da economia e da sustentabilidade.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <FaRecycle />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Sustentabilidade</h1>
      <p> O cliente passa a produzir a
        <span className="font-bold">sua própria energia</span> de forma limpa e sustentável.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <IoCash />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Sem exigência de crédito.</h1>
      <p> A locação de placas solares
        <span className="font-bold">não compromete</span> a sua capacidade de tomar crédito.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-sun-500 p-6 text-center text-white rounded-lg shadow-lg flex flex-col justify-center w-64 h-64">
      <div className="flex justify-center mb-4 text-white text-4xl">
        <IoShieldCheckmark />
      </div>
      <h1 className="text-white font-bold text-lg mb-4">Segurança</h1>
      <p> A Unidade Consumidora (UC) 
        <span className="font-bold">continua no nome do cliente</span> , assegurando que ele detenha toda a geração de energia.
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
              </span>Nós construímos a usina de formapersonalizada de acordo com a necessidade do cliente.
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

