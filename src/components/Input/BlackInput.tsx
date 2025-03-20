import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

import classNames from "classnames";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    inputLength?: number;
    label: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    type?: string;
}

const InputTextBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, type = "text", ...rest }, ref) => {
    const hasError = error !== null

    return (
        <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-neutral-200 ml-1">
                {label}
            </label>
            <input
                ref={ref}
                name={name}
                aria-label={name}
                type={type}
                className={classNames('mt-1 relative w-full border bg-neutral-700 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm', {
                    'border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !hasError,
                    'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : hasError,
                })}
                {...rest}
            />

            {!!error && <span className="block text-xs font-medium text-red-400">{error.message as string}</span>}
        </div>
    );
}

export const BlackInput = forwardRef(InputTextBase);