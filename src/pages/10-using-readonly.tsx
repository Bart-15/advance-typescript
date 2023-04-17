import { NextPage } from "next";
import PizzaShop from "@/components/10-using-readonly/pizza-shop";

const ReadOnly: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Read Only</h2>
                <PizzaShop />          
            </div>
        </div>
    );
}
 
export default ReadOnly;