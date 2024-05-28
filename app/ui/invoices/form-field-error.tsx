'use client';

import { InvoiceState } from "@/app/lib/actions";

export function FormFieldError({id, errorCollection}: {id: string, errorCollection?: string[]}){
    return (
        <div id={id} aria-live='polite' aria-atomic='true'>
            {errorCollection?.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                    {error}
                </p>
            ))}
        </div>
    )
} 

export function FormError({id, message}:{id: string, message?: string | null | undefined}){
    return(
        <div id={id}>
            <p className="mt-2 text-sm text-red-500" key="form-error">{message}</p>
        </div>
    )
}