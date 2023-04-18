import type { FC } from 'react';
import  ItemOnSaleComponent  from './item-on-sale'
import { ItemsOnSale } from './type';

const itemsOnSale: ItemsOnSale[] = [
    {
        type: 'book',
        title: 'The Library Book',
        description:
            'The Library Book is a wondrous tale of adventure and heroism set in the fantasy realm of middle-earth. Bilbo Baggins, an unambitious Hobbit is unwillingly recruited as a burglar by a party of dwarves and sent on a most extraordinary adventure. Coming head to head against trolls, goblins, wolves and the mighty dragon Smaug, Bilbo faces his worst fears, makes some unlikely allies, travels further than ever before and is changed, forever.',
    },
    { type: 'magazine', title: 'BYTE Magazine' },
    { type: 'pen', color: 'blue' },
];

const BookShop = () => {
    return ( 
        <div>
            <h3 className="text-2xl font-medium">There are {itemsOnSale.length} items on sale</h3>
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {
                    itemsOnSale.map((item, idx) => (
                        <div key={idx}>
                            <ItemOnSaleComponent item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BookShop;