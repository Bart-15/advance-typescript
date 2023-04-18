import { FC } from "react";
import Image from 'next/image';
import bookImage from '../../../public/assets/images/book.jpg';
import { Book } from "./type";

type Props = {
    book: Book;
}

const BookOnSale: FC<Props> = ({book}) => {
    return ( 
        <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 relative">
            <Image src={bookImage} alt={book.title} className="object-cover aspect-square w-full rounded-t" />
            <div className="py-2 px-4">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <button className="py-2 px-6 bg-red-700 my-2 text-white rounded-md text-base">Add</button>
            </div>
        </div>
    );
}
 
export default BookOnSale;