import PizzaShopDataLoader from "@/components/08-inferring-schema-types/pizza-shop-data-loader";
import { NextPage } from "next";

const InferingSchemaTypes: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Infering Schema Types</h2>
                <PizzaShopDataLoader />
            </div>
        </div>
    );
}

export default InferingSchemaTypes;