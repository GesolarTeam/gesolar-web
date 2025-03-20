import { forwardRef, ForwardRefRenderFunction, Fragment } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { BsCheck } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdAttachMoney } from 'react-icons/md'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import classNames from 'classnames';
import { useCalculator } from '../hooks/useCalculator';

type selectValueData = any 
// não esta funcionando tipar essa variavel,
// está dando erro na hora da build

interface SelectProps {
    selectValue: selectValueData;
    onChangeSelectValue: (value: selectValueData) => void;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const SelectBase: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = ({ selectValue, onChangeSelectValue, error = null, ...rest }, ref) => {
    const { selectRange } = useCalculator()
    const selectRangeFormated = selectRange.map((range, index) => {
        return {
            id: index,
            range,
        }
    })

    const hasError = error != undefined

    return (
        <div className="flex flex-col gap-2">
            <Listbox
                value={selectValue} 
                onChange={event => onChangeSelectValue(event)}
            >
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-semibold text-neutral-200">Valor da conta de luz</Listbox.Label>

                        <div className="mt-[0.6rem] relative">
                            <Listbox.Button
                                className={classNames('relative w-full border bg-neutral-700 text-neutral-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm', {
                                    'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500': hasError,
                                    'border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !hasError
                                })}
                            >
                                <span className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-neutral-400">
                                        <MdAttachMoney className="w-5 h-5 text-white"/>
                                    </span>
                                    <span className="ml-3 w-full text-ellipsis overflow-hidden">
                                        {selectValue.range}
                                    </span>
                                </span>

                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <MdOutlineKeyboardArrowDown 
                                        className="h-4 w-4 text-gray-300" 
                                        aria-hidden="true" 
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-neutral-600 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-neutral-900 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {selectRangeFormated.map((value) => (
                                        <Listbox.Option
                                            key={value.id}
                                            value={value}
                                            className={
                                                classNames('cursor-default select-none relative py-2 pl-3 pr-9', {
                                                    'text-white bg-sun-500' : selectValue?.id === value.id,
                                                    'text-neutral-300' : !(selectValue?.id === value.id)
                                                })
                                            }
                                            {...rest}
                                        >
                                            <div className="flex items-center">
                                                <span className="flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-neutral-400">
                                                    <MdAttachMoney className="w-5 h-5 text-white"/>
                                                </span>
                                                <span className={classNames('ml-3 block truncate', {
                                                    'font-semibold' : selectValue.id === value.id,
                                                    'font-medium' : !(selectValue.id === value.id)
                                                })}>
                                                    {value.range}
                                                </span>
                                            </div>

                                            {selectValue?.id === value.id ? (
                                                <span className="absolute text-white inset-y-0 right-0 flex items-center pr-4">
                                                    <BsCheck 
                                                        className="h-5 w-5" 
                                                        aria-hidden="true" 
                                                    />
                                                </span>
                                            ) : null}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>

            {error && <span className="block text-xs font-medium text-red-400">{error.message as string}</span>}
        </div>
    );
}

export const BlackSelect = forwardRef(SelectBase)