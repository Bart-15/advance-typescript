import { FC, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const CheckboxInput: FC<Props> = ({children, ...props}) => (<input className={`${props.className}`} type="checkbox" {...props} />)

