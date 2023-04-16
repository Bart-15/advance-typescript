import PizzaShopDataLoader from "@/components/09-type-mapping/pizza-shop-data-loader";
import { NextPage } from "next";

const TypeMapping: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Type Mapping</h2>
                <PizzaShopDataLoader />
            </div>
        </div>
    );
}

export default TypeMapping;