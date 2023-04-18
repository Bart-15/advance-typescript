import {FC} from 'react';
import Image from 'next/image'
import penImage from '../../../public/assets/images/pen.jpg';
import {Pen} from './type'

type Props = {
    pen:Pen;
}

const PenOnSale: FC<Props> = ({pen}) => {
    return (
        <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 relative">
            <Image src={penImage} alt={`A ${pen.color} pen`} className="object-cover aspect-square w-full rounded-t" />
            <div className="py-2 px-4">
                <h3>{`A ${pen.color} pen`}</h3>
                <button className="py-2 px-6 bg-red-700 my-2 text-white rounded-md text-base">Add</button>
            </div>
        </div>
    )
}

export default PenOnSale;