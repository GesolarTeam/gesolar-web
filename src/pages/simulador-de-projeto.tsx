import { useState } from "react";
import { FaHome, FaBuilding, FaIndustry, FaHandHoldingUsd, FaLeaf, FaRecycle, FaGlobeAmericas } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import {  CheckCircle } from "lucide-react";
import { BiWorld } from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function SimuladorDeProjeto() {
  const [opcao, setOpcao] = useState<"casa" | "condominio" | "empresa" | "vazio">("vazio");
  const [isOpen, setIsOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [localidade, setLocalidade] = useState(""); 
  const [contaluz, setcontaluz] = useState("")
  const [valorAtual, setValorAtual] = useState(1800); // R$1.800,00
  const [valorGesolar, setValorGesolar] = useState(1265.99); // R$1.265,99

  const toggleMenu = () => setIsOpen(prev => !prev);
  const selectOption = (option: "casa" | "condominio" | "empresa") => {
    setOpcao(option);
    setIsOpen(false); // Fechar o menu após seleção
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${newCep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setLocalidade(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
        } else {
          setLocalidade("CEP inválido.");
        }
      } catch (error) {
        setLocalidade("Erro ao buscar CEP.");
      }
    }
  };

  const handleContaChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConta = e.target.value;
    setcontaluz(newConta);
  };

  // Cálculo da economia
  const economiaMensal = valorAtual - valorGesolar;

  // Dados do gráfico de pizza
  const data = {
    labels: ["Atual", "GESOLAR", "Economia"],
    datasets: [
      {
        label: "Economia Mensal",
        data: [valorAtual, valorGesolar, economiaMensal],
        backgroundColor: ["#ffffff", "#f59e0b", "#374151"], // Cores para as partes do gráfico
        borderColor: ["#ffffff", "#f59e0b", "#374151"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>

<div className="fixed bottom-4 right-4">
    <button type="button" className="flex items-center justify-center gap-3 px-4 py-2 max-w-[225px] bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200">
        <span className="flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="33" width="33" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
        </span>
        <span>Orçamento via whatsapp</span>
    </button> 
</div>

      {/* Section 1 */}
      <div className="bg-[1E1E1E] text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Simulação de proposta</h2>
        <h3 className="text-2xl text-center mb-10">
          Com a <span className="font-bold px-2">GESOLAR</span> você economiza!
        </h3>
        <h3 className="text-2xl text-center mb-10">
          Agora você tem <span className="font-bold px-2">2 opções de planos</span> à sua escolha,
          simule e veja o que melhor atende às suas necessidades!
        </h3>

        <div className="flex flex-col md:flex-row gap-4 max-w-[1450px] mx-auto items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
            {/* Imagem na esquerda */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/undraw_factory_4d61 (1).svg"
                className="w-full max-w-[500px] max-h-[500px] sm:max-w-[600px] sm:max-h-[600px] md:max-w-[700px] md:max-h-[700px] object-contain"
                alt="Fábrica"
              />
            </div>

            {/* Parte direita da div */}
            <div className="w-full md:w-1/2 bg-neutral-700 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[300px]">
              {/* H1 */}
              <h1 className="text-3xl font-bold text-center text-sun-500 mb-6">Simulação do projeto</h1>

              {/* Botão que mostra o menu */}
              <button
                onClick={toggleMenu}
                className="w-full mb-4 inline-flex items-center justify-center px-8 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200"
              >
                {opcao === "casa" && <FaHome className="mr-2" />}
                {opcao === "condominio" && <FaBuilding className="mr-2" />}
                {opcao === "empresa" && <FaIndustry className="mr-2" />}
                {opcao === "vazio" && "Clique aqui e escolha uma opção"}
              </button>

              {/* Menu de opções */}
              {isOpen && (
                <div className="absolute bg-neutral-800 text-white w-full p-2 rounded-md shadow-lg mt-2">
                  <button
                    onClick={() => selectOption("casa")}
                    className="w-full p-2 hover:bg-neutral-700 text-left rounded-md"
                  >
                    Casa
                  </button>
                  <button
                    onClick={() => selectOption("condominio")}
                    className="w-full p-2 hover:bg-neutral-700 text-left rounded-md"
                  >
                    Condomínio
                  </button>
                  <button
                    onClick={() => selectOption("empresa")}
                    className="w-full p-2 hover:bg-neutral-700 text-left rounded-md"
                  >
                    Empresa
                  </button>
                </div>
              )}

              {/* Input de CEP */}
              <div className="mt-6 w-full">
                <label htmlFor="cep" className="text-lg font-semibold text-neutral-300">Digite o CEP:</label>
                <input
                  id="cep"
                  type="text"
                  value={cep}
                  onChange={handleCepChange}
                  className="mt-2 p-2 w-full rounded-md text-black"
                  maxLength={8}
                  placeholder="Ex: 01001000"
                />
                {localidade && (
                  <div className="mt-2 text-neutral-200">
                    <strong>Localização:</strong> {localidade}
                  </div>
                )}
              </div>
                {/* Input da Conta de luz */}
              <div className="mt-6 w-full">
                <label htmlFor="contaluz" className="text-lg font-semibold text-neutral-300">Digite o valor da conta de luz</label>
                <input 
                id="contaluz"
                type="text" 
                value={contaluz}
                onChange={handleContaChange}
                className="mt-2 p-2 w-full rounded-md text-black"
                maxLength={8}
                placeholder="R$1000"
                />
                {contaluz &&(
                  <div className="mt-2 text-neutral-200">
                    <strong>Valor conta de Luz:</strong> {contaluz}
                  </div>
                )}
              </div>

              {/* Texto 3 */}
              <div className="w-full bg-neutral-800 p-8 rounded-lg shadow-lg mt-6 flex items-center justify-center min-h-[200px]">
                <p className="text-base font-semibold text-neutral-300 text-center">
                  {opcao === "casa" && (
                    <span>* Simulação para uma residência. A conclusão definitiva depende da análise da fatura de energia e uma vistoria no local.</span>
                  )}
                  {opcao === "condominio" && (
                    <span>* Simulação para condomínio. A conclusão depende da análise do consumo total e vistoria no local para dimensionamento correto.</span>
                  )}
                  {opcao === "empresa" && (
                    <span>* Simulação para empresa. A análise de viabilidade dependerá da fatura de energia e de uma vistoria no local.</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Planos e Comparação */}
      <div className="bg-neutral-800 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-sun-500">Escolha seu plano</h2>
        <div className="flex flex-col md:flex-row gap-10 justify-between max-w-[1450px] mx-auto">

          {/* Lado esquerdo - Planos */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            {/* Plano 1 - Residencial */}
            <div className="bg-neutral-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
              <h1 className="text-2xl font-bold text-center text-sun-500 mb-4">
                <span className="text-sun-500">GES</span> <span className="text-white">PLUS+</span>
              </h1>
              <p className="text-base text-neutral-300 mb-6 text-center">
              Nossos planos com economia variável e menor tempo de contrato
              </p>
              <div className="flex justify-center gap-6">
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">6 anos</div>
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">8 anos</div>
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">10 anos</div>
              </div>
            </div>

            {/* Plano 2 - Comercial */}
            <div className="bg-neutral-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
              <h1 className="text-2xl font-bold text-center text-sun-500 mb-4">
                <span className="text-sun-500">GES</span> <span className="text-white">COMFORT</span>
              </h1>
              <p className="text-base text-neutral-300 mb-6 text-center">
              Nossos planos com economia constante durante todo contrato.
              </p>
              <div className="flex justify-center gap-6">
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">10 anos</div>
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">12 anos</div>
                <div className="bg-sun-500 p-4 rounded-md text-white font-semibold">15 anos</div>
              </div>
            </div>
          </div>

          {/* Lado direito - Comparação */}
          <div className="w-full md:w-1/2 py-12">
            <div className="bg-neutral-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-center text-sun-500 mb-6">
                Comparação entre planos
              </h3>
              <div className="w-full h-64 flex items-center justify-center">
                <Pie data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>


{/* Seguro Gratuito e Garantia de Geração */}
    <div>
      <div className="px-6 py-8">
        <div className="flex items-center justify-center mx-auto max-w-lg max-h-10 bg-neutral-700 text-white text-sm font-semibold py-8 px-10 rounded-lg gap-2">
            <IoShieldCheckmarkOutline className="text-2xl text-sun-500" />
          <span className="flex items-center">SEGURO GRATUITO E GARANTIA DE GERAÇÃO INCLUSO</span>
        </div>
      </div>

      <h1 className="flex items-center justify-center text-sun-500 text-2xl font-extrabold py-8">SUA ECONOMIA  A CURTO, MÉDIO E LONGO PRAZO</h1>
    </div>



    <div className="flex flex-col md:flex-row gap-8 px-6 max-w-[1450px] mx-auto items-center justify-center">
  <div className="flex flex-row gap-8 w-full justify-center items-center bg-neutral-800 py-8 rounded-2xl">

    {/* Div da imagem, com tamanho mais equilibrado */}
    <div className="w-full md:w-1/3 flex justify-center">
      <img
        src="/undraw_investment-data_m7wb.svg"
        className="w-full max-w-[300px] max-h-[400px] sm:max-w-[350px] sm:max-h-[450px] md:max-w-[400px] md:max-h-[500px] object-contain"
        alt="Investment"
      />
    </div>
    
    <div className="bg-neutral-700 text-white p-6 rounded-2xl w-80 shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-lg font-semibold">R$ 343,42</span>
          <span className="text-sm text-gray-400">MENSAL 2025</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-lg font-semibold">R$ 3.790,95</span>
          <span className="text-sm text-gray-400">1 ANO</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-2">
          <span className="text-lg font-semibold">R$ 13.767,95</span>
          <span className="text-sm text-gray-400">6 ANOS<br/>Fim de contrato</span>
        </div>
      </div>
      <div className="bg-sun-500 text-white font-semibold text-lg py-3 mt-6 rounded-xl text-center">
        R$ 832.878,26<br/>30 ANOS
      </div>
    </div>

  </div>
</div>


<div className="flex flex-col items-center gap-6 py-20 px-6 sm:flex-row sm:justify-center">
  {/* Card 1 */}
  <div className="bg-neutral-700 p-6 text-center text-white w-full sm:w-64 md:w-80 h-48 rounded-lg shadow-lg flex flex-col justify-center">
    <div className="flex justify-center mb-4 text-sun-500 text-4xl">
      <FaHandHoldingUsd />
    </div>
    <p>
      Rendimento anual até <span className="font-bold">4 vezes</span> maior
      quando comparado à poupança.
    </p>
  </div>

  {/* Ícone Central (visível apenas no md+) */}
  <div className="text-sun-500 text-2xl hidden md:block">...</div>

  {/* Card 2 */}
  <div className="bg-neutral-700 p-6 text-center text-white w-full sm:w-64 md:w-80 h-48 rounded-lg shadow-lg flex flex-col justify-center">
    <div className="flex justify-center mb-4 text-sun-500 text-4xl">
      <FaHome />
    </div>
    <p>
      Valorização de até <span className="font-bold">7%</span> no seu imóvel.
    </p>
  </div>
</div>

{/* Segunda linha de cards */}
<div className="flex flex-col items-center px-2 gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
  <div className="bg-sun-500 p-6 text-center text-white w-full sm:w-64 md:w-80 h-48 rounded-lg shadow-lg flex flex-col justify-center">
    <div className="flex justify-center mb-4 text-white text-4xl">
      <FaGlobeAmericas />
    </div>
    <p>
      <span className="font-bold">1,16 milhões de tCO2e</span> verificadas que deixaram de ser emitidas.
    </p>
  </div>

  <div className="bg-sun-500 p-6 text-center text-white w-full sm:w-64 md:w-80 h-48 rounded-lg shadow-lg flex flex-col justify-center">
    <div className="flex justify-center mb-4 text-white text-4xl">
      <FaLeaf />
    </div>
    <p>
      <span className="font-bold">3,02 hectares</span> de floresta protegida.
    </p>
  </div>

  <div className="bg-sun-500 p-6 text-center text-white w-full sm:w-64 md:w-80 h-48 rounded-lg shadow-lg flex flex-col justify-center">
    <div className="flex justify-center mb-4 text-white text-4xl">
      <FaRecycle />
    </div>
    <p>
      <span className="font-bold">2,26 toneladas de papel</span> ano que deixaram de ser fabricadas.
    </p>
  </div>
</div>

                   
      
      <div className="flex justify-center py-16">
        <h1 className="text-sun-500 text-3xl font-extrabold">Veja mais benefícios de ter um sistema de energia solar em sua residência</h1>
      </div>

      <div className="bg-neutral-900 text-white px-16 flex flex-col items-center space-y-6">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        <div className="bg-neutral-700 p-4 rounded-lg text-left">
          <h2 className="text-green-400 font-bold flex items-center space-x-2">
            <CheckCircle className="w-6 h-6" />
            <span>IPTU verde</span>
          </h2>
          <p className="text-neutral-300 mt-2">
            <span className="text-green-300 font-bold">
              O IPTU verde é um programa que beneficia moradores que adotam práticas sustentáveis.
            </span>{" "}
            Cada vez mais cidades estão aderindo a este programa e você pode ser beneficiado. Consulte se já está disponível em sua cidade.
          </p>
        </div>
        <div className="bg-neutral-700 p-4 rounded-lg text-left">
          <h2 className="text-sun-500 font-bold flex items-center space-x-2">
            <BiWorld className="w-8 h-8" />
            <span>Economia financeira a longo prazo e preservação do meio ambiente.</span>
          </h2>
          <p className="text-neutral-300 mt-2">
            Economize enquanto contribui para um planeta mais verde. Uma fonte renovável e limpa que promove um futuro sustentável.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sun-500 font-bold">
          Confira os detalhes da simulação do seu sistema de energia solar:
        </p>
        <div className="bg-neutral-800 text-white p-4 rounded-lg mt-2 inline-block">
          <p className="text-xl font-bold">1.933 kWh</p>
          <p className="text-neutral-400">Simulação de geração mensal</p>
        </div>
        <p className="text-sun-500 mt-2 font-semibold">SEGURO GRATUITO INCLUSO</p>
      </div>
      <div className="flex flex-col md:flex-row py-8 gap-4 w-full max-w-sm">
        <button className="bg-sun-500 text-white font-bold py-2 px-4 rounded-lg w-full">
          Cadastrar-se
        </button>
        <button className="bg-neutral-700 text-white font-bold py-2 px-4 rounded-lg w-full">
          Fazer outra simulação
        </button>
      </div>
    </div>

                 
    </>
  );
}
