import { NextPage } from "next";
import PizzaShop from "@/components/11-using-deep-readonly/pizza-shop";

const DisplayingTypes: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">DisplayingTypes</h2>
                <PizzaShop />          
            </div>
        </div>
    );
}
 
export default DisplayingTypes;