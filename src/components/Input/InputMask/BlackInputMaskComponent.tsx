import { forwardRef, ForwardRefRenderFunction } from "react";

import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import InputMask from "react-input-mask";

import classNames from "classnames";

interface InputMaskBaseProps {
    label: string;
    mask: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const InputMaskBase: ForwardRefRenderFunction<HTMLInputElement, InputMaskBaseProps> = ({ mask, label, error = null, ...rest }, ref) => {
    const hasError = error !== null

    return (
        <div className="col-span-full md:col-span-4">
            <div className="flex flex-col gap-2">
                <label className="block text-sm font-semibold text-neutral-200 ml-1">
                    {label}
                </label>
                
                <InputMask
                    mask={mask}
                    inputRef={ref}
                    // @ts-ignore:next-line
                    maskChar={null}
                    className={classNames('mt-1 relative w-full border bg-neutral-700 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm', {
                        'border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !hasError,
                        'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : hasError,
                    })}
                    {...rest}
                />

                {!!error && <span className="block text-xs font-medium text-red-400">{error.message as string}</span>}
            </div>
        </div>
    )
}

export const BlackInputMaskComponent = forwardRef(InputMaskBase);