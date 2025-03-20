import { ChangeEvent, useEffect, useState } from "react";

import { WhiteInput } from "../Input/WhiteInput";

import { RegisterOptions, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

import { FaUser } from "react-icons/fa";

import classNames from "classnames";
import { useCalculator } from "../../hooks/useCalculator";
import { useRouter } from "next/router";

type FormValidationProps = {
    selectInputFieldOptions: RegisterOptions;
    nameInputFieldOptions: RegisterOptions;
    emailInputFieldOptions: RegisterOptions;
    phoneNumberInputFieldOptions: RegisterOptions;
    zipCodeInputFieldOptions: RegisterOptions;
    
}

export function HomePageFormWhite() {
  const [selectValue, setSelectValue] = useState('Clique e selecione o valor da conta de luz')
  const { selectRange, calculateByRange } = useCalculator()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  
  const formValidation: FormValidationProps = {
    selectInputFieldOptions: {
      validate: value => value !== 'Clique e selecione o valor da conta de luz' || 'Verifique se voce selecionou algum valor',
      setValueAs: value => value.replace('R$ ', '').replace(' - ', '>' )
    },
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

  function updateSelectValue(event: ChangeEvent<HTMLSelectElement>) {
    setValue("select", event.target.value)
    setSelectValue(event.target.value)
    clearErrors("select")
  }

  async function onFormSubmit(data: any) {
    setIsLoading(true)
    
    let formData = {}
    const isSpecificRoute = router.asPath.replace("/", "")

    if(isSpecificRoute !== "") {
      formData = {...data, lp: `lp-${isSpecificRoute.replaceAll("-", " ")}`}
    } else {
      formData = {...data, lp: 'primary'}
    }

    await axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formData)
    
    calculateByRange({
      name: data.name,
      rangeSelected: data.select
    })
    
    setIsLoading(false)

    router.push('/resultado')
  }

  return (
      <form 
          onSubmit={handleSubmit(onFormSubmit)} 
          className="w-full max-w-lg flex flex-col items-center justify-center gap-8"
        >
          
          <div className="w-full flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                Valor da sua conta de luz
              </span>

              <div className="flex flex-col gap-3">
                <select
                  value={selectValue}
                  className={classNames('appearance-none w-full overflow-hidden max-w-lg h-12 bg-neutral-300 text-neutral-600 font-medium rounded-3xl px-4', {
                    'focus:outline-none focus:ring-1 ring-offset-2 ring-offset-neutral-300 focus:ring-sun-500 focus:border-sun-500' : !errors.select,
                    'border-red-500 focus:outline-none focus:ring-1 ring-offset-2 ring-offset-neutral-300 focus:ring-red-500 focus:border-red-500' : errors.select,
                  })}
                  {...register("select", formValidation.selectInputFieldOptions)}
                  onChange={updateSelectValue}
                >
                  <option 
                    disabled={true} 
                    className={classNames('', {
                      'hidden' : true
                    })}
                  >
                    Clique e selecione o valor da conta de luz
                  </option>
                  {selectRange.map(item => {
                    return (
                      <option key={item}>
                        {item}
                      </option>
                    )
                  })}
                </select>
                
                {!!errors.select && <span className="ml-2 block text-xs font-medium text-red-400">{errors.select.message as string}</span>}
              </div>
            </div>

            <WhiteInput
              label="Nome"
              placeholder="Digite seu nome"
              icon={<FaUser />}
              error={errors.name}
              {...register("name", formValidation.nameInputFieldOptions)}
            />

            <WhiteInput
              label="Email"
              placeholder="Digite seu melhor email"
              icon={<FaUser />}
              error={errors.email}
              {...register("email", formValidation.emailInputFieldOptions)}
            />

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                Telefone celular
              </span>

              <div className="flex flex-col gap-3">
                  <label className="relative w-full flex flex-col gap-2 overflow-hidden max-w-lg h-12 bg-neutral-300 rounded-3xl">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                          <FaUser />
                      </span>

                      <InputMask
                        mask="99 99999-9999"
                        // @ts-ignore:next-line
                        maskChar={null}
                        className={(classNames('text-neutral-600 font-medium placeholder:text-neutral-500 block bg-transparent w-full h-full border rounded-3xl pl-11 pr-3 shadow-sm', {
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !errors.phoneNumber,
                            'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : errors.phoneNumber,
                        }))}
                        placeholder="(99) 99999-9999"
                        type="tel"
                        {...register('phoneNumber', formValidation.phoneNumberInputFieldOptions)}
                      />

                  </label>

                  {!!errors.phoneNumber && <span className="block ml-1 text-xs font-medium text-red-400">{errors.phoneNumber.message as string}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                CEP
              </span>

              <div className="flex flex-col gap-3">
                  <label className="relative w-full flex flex-col gap-2 overflow-hidden max-w-lg h-12 bg-neutral-300 rounded-3xl">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                          <FaUser />
                      </span>

                      <InputMask
                        mask="99999-999"
                        // @ts-ignore:next-line
                        maskChar={null}
                        className={(classNames('text-neutral-600 font-medium placeholder:text-neutral-500 block bg-transparent w-full h-full border rounded-3xl pl-11 pr-3 shadow-sm', {
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !errors.phoneNumber,
                          'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : errors.phoneNumber,
                        }))}
                        placeholder="99999-999"
                        {...register('zipCode', formValidation.zipCodeInputFieldOptions)}
                      />

                  </label>

                  {!!errors.zipCode && <span className="block ml-1 text-xs font-medium text-red-400">{errors.zipCode.message as string}</span>}
              </div>
            </div>

          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit" 
              className="inline-flex items-center justify-center px-8 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-200 focus:ring-amber-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200"
            >
              {isLoading && (
                <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
              )}
              Simular online
            </button>
          </div>
        </form>
  )
}