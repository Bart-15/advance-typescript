import {FC} from 'react';
import BookOnSale from './book-on-sale';
import PenOnSale from './pen-on-sale';
import MagazineOnSale from './magazine-on-sale';
import { ItemsOnSale, Book, Magazine, Pen, assertBook, assertMagazine, assertPen, assertNever } from './type';

type Props = {
    item: ItemsOnSale
}

const ItemOnSale: FC<Props> = ({item}) => {
    switch(item.type){
        case 'book':
            return <BookOnSale book={item as Book} />
        case 'magazine':
            return <MagazineOnSale magazine={item as Magazine} />
        case 'pen':
            return <PenOnSale pen={item as Pen} />
        default:
            null
    }

    // type assertion with exhaustive checking

    // switch(item.type){
    //     case 'book':
    //         assertBook(item)
    //         return <BookOnSale book={item as Book} />
    //     case 'magazine':
    //         assertMagazine(item)
    //         return <MagazineOnSale magazine={item as Magazine} />
    //     case 'pen':
    //         assertPen(item)
    //         return <PenOnSale pen={item as Pen} />
    //     default:
    //         assertNever(item)
    // }   
   

    return (null)
}
 
export default ItemOnSale;