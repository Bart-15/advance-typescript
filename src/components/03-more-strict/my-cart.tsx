import { FC, useMemo } from "react";
import { PizzaOnOrder } from "./types";

type TMyCart = {
    orders: PizzaOnOrder[] 
}

const MyCart: FC<TMyCart> = ({
    orders
}) => {

    const totalPrice = useMemo(() => calculateTotalPrice(orders), [orders])

    return ( 
        <div className="rounded-md shadow-md p-3 bg-slate-50 max-h-96 mt-6 overflow-auto sticky top-10 md:top-32">
            <div>
                <p className="flex text-base font-medium gap-1 my-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    My Cart
                </p>
            </div>
            <div className="mt-5">
                <hr />
                <div className="flex flex-col">
                    {
                        orders.map((order, idx) => {
                            return (
                            <div className="my-2" key={idx}>
                                <div className="flex justify-between">
                                    <p className="font-medium">{order.name}</p>
                                    <p className="font-light">₱{order.price}</p>
                                </div>
                                <div className="pl-4">
                                    <ol>
                                        {
                                            order.extraIngredients.map((extra) => (
                                                <li className="flex justify-between" key={extra.name}>
                                                    <p className="font-light">{extra.name}</p>
                                                    <p className="font-light">₱{extra.price}</p>
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div> 
                            </div>
                            )
                        })
                    }
                </div>
                <hr />
                {
                    !orders.length ? (<p className="py-2 font-medium">Your bag is empty</p>) : (
                        <div className="py-2 flex justify-between items-center">
                            <p className="font-medium">Total Amount:</p>
                            <p className="font-light">₱{addCommas(totalPrice)}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

function calculateTotalPrice(orders: PizzaOnOrder[]){
    return orders.reduce((sum, pizza) => {
        const extraPrice = pizza.extraIngredients.reduce((sum, extra) => sum + extra.price, 0);
        return sum + pizza.price + extraPrice; 
    }, 0)
}

function addCommas(num: number | string) {
    const parts = num.toString().split('.');
    
    //Add commas to the integer
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.')
}

export default MyCart;