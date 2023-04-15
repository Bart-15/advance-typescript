import { DetailedHTMLProps, FC, InputHTMLAttributes, PropsWithChildren } from 'react';

type Props<TValues> = {
    items: TValues[],
    render: (item: TValues) => React.ReactNode
    onSubmit: (values: TValues) => void;
};

// If you want a children 
/**
 *  PropsWithChildren<DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, 
    HTMLUListElement>>
 * 
 * 
 */


function UL<TValues>({items, render, children}: 
    DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, 
    HTMLUListElement>
    & Props<TValues>
    ) {
    return (
        <ul>
            {items.map((item, idx) => (<li key={idx} className="my-2">{render(item)}</li>))}
        </ul>
    )
}


export default UL;