import { FC, LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label: FC<Props> = ({ children, ...props }) => {
    return (<label className={`${props.className}`} {...props}>{children}</label>)
}