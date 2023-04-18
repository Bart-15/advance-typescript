import { FC } from "react";
import Image from "next/image";
import { Magazine } from "./type";
import magazineImage from '../../../public/assets/images/magazine.jpg'

type Props = {
    magazine: Magazine;
}

const MagazineOnSale: FC<Props> = ({magazine}) => {
    return ( 
        <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 relative">
        <Image src={magazineImage} alt={magazine.title} className="object-cover aspect-square w-full rounded-t" />
        <div className="py-2 px-4">
            <h3>{magazine.title}</h3>
            <button className="py-2 px-6 bg-red-700 my-2 text-white rounded-md text-base">Add</button>
        </div>
    </div>
     );
}
 
export default MagazineOnSale;