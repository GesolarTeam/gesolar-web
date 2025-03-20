import { Transition } from "@headlessui/react";
import axios from "axios";
import classNames from "classnames";
import { useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

type FormValidationProps = {
    emailInputFieldOptions: RegisterOptions;
    phoneNumberInputFieldOptions: RegisterOptions;
    zipCodeInputFieldOptions: RegisterOptions;
    numberOfSolarPanelsInputFieldOptions: RegisterOptions;
}

export function MaintenancePageForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [formSent, setFormSent] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue
    } = useForm();

    const formValidation: FormValidationProps = {
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
        numberOfSolarPanelsInputFieldOptions: {
            required: "Este campo é obrigatorio. ",
        },
    }
    
    async function onFormSubmit(data: any) {
        setIsLoading(true)
    
        const formData = {...data, lp: 'maintenance'}
    
        await axios.post('https://hook.us1.make.com/4djjzcmut4kqyz1dyu5ywqinga3y1oof', formData)
        
        setIsLoading(false)
        setFormSent(true)

        setTimeout(() => {
            setFormSent(false)
        }, 10000)

        reset()
        setValue('zipCode', '')
        setValue('phoneNumber', '')
    }

    return (
        <div className="flex flex-col gap-6">
            <Transition
                show={formSent}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="px-6 py-4 bg-green-200 rounded-xl">
                    <strong className="font-semibold text-neutral-600">
                        Dados enviados para um dos nossos atendentes, entraremos em contato.
                        Muito obrigado pela confiança!
                    </strong>
                </div>
            </Transition>

            <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col gap-8 items-start sm:items-center'>
                <div className="w-full grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-6 md:grid-row-auto lg:grid-cols-12">
                    <div className="w-full flex flex-col gap-3 col-span-full md:col-span-4">
                        <div className="flex flex-col gap-1">
                            <label className="block text-md font-semibold text-neutral-100 ml-1">Email</label>
                            <input
                                placeholder="jonhdoe@example.com"
                                className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sun-500 focus:ring-neutral-200 transition-colors duration-300"
                                {...register('email', formValidation.emailInputFieldOptions)}
                            />
                        </div>

                        {!!errors.email && <span className="ml-2 block text-xs font-medium text-red-400">{errors.email.message as string}</span>}
                    </div>

                    <div className="w-full flex flex-col gap-3 col-span-full md:col-span-2 lg:col-span-3">
                        <div className="flex flex-col gap-1">
                            <label className="block text-md font-semibold text-neutral-100 ml-1">Telefone</label>
                            <ReactInputMask
                                placeholder="(99) 99999-9999"
                                mask="99 99999-9999"
                                // @ts-ignore:next-line
                                maskChar={null}
                                className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sun-500 focus:ring-neutral-200 transition-colors duration-300"
                                type="tel"
                                {...register('phoneNumber', formValidation.phoneNumberInputFieldOptions)}
                            />
                        </div>

                        {!!errors.phoneNumber && <span className="ml-2 block text-xs font-medium text-red-400">{errors.phoneNumber.message as string}</span>}
                    </div>

                    <div className="w-full flex flex-col gap-3 col-span-full md:col-span-3 lg:col-span-2">
                        <div className="flex flex-col gap-1">
                            <label className="block text-md font-semibold text-neutral-100 ml-1">CEP</label>
                            <ReactInputMask
                                placeholder="99999-999"
                                mask="99999-999"
                                // @ts-ignore:next-line
                                maskChar={null}
                                type="tel"
                                className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sun-500 focus:ring-neutral-200 transition-colors duration-300"
                                {...register("zipCode", formValidation.zipCodeInputFieldOptions)}
                            />
                        </div>

                        {!!errors.zipCode && <span className="ml-2 block text-xs font-medium text-red-400">{errors.zipCode.message as string}</span>}
                    </div>

                    <div className="w-full flex flex-col gap-3 col-span-full md:col-span-3 lg:col-span-3">
                        <div className="flex flex-col gap-1">
                            <label className="block text-md font-semibold text-neutral-100 ml-1">Quantidade de placas</label>
                            <input
                                placeholder="Digite o numero de placas"
                                className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sun-500 focus:ring-neutral-200 transition-colors duration-300"
                                type="number"
                                {...register("numberOfSolarPanels", formValidation.numberOfSolarPanelsInputFieldOptions)}
                            />
                        </div>

                        {!!errors.numberOfSolarPanels && <span className="ml-2 block text-xs font-medium text-red-400">{errors.numberOfSolarPanels.message as string}</span>}
                    </div>
                </div>

                <div className="w-full max-w-[640px]">
                    <button type="submit" className="w-full bg-neutral-300 px-8 py-[0.65rem] rounded-md text-neutral-600 font-medium hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sun-500 focus:ring-neutral-200 transition-colors duration-300">
                        {(isLoading ) && (
                            <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                        )}
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}