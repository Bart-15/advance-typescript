import { FC, InputHTMLAttributes, useId, ComponentProps } from 'react';
import { Label } from '../label';

type Props = InputHTMLAttributes<HTMLInputElement>;
type TLabeledInput = ComponentProps<typeof Input>;

export const Input: FC<Props> = ({children, ...props}) => {
    return <input type={props.type} value={props.value} className={`px-3 py-3 mt-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${props.className}`} {...props}/>;
}

export const LabeledInput: FC<TLabeledInput> = ({children, id, ...props}) => {
    const internalId = useId();

    return (
        <div className="mb-6">
            <Label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id ?? internalId}>{children}</Label>
            <Input id={id ?? internalId} value={props.value} {...props}/>
        </div>
    )
}


