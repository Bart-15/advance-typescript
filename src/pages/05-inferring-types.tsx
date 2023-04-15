import { NextPage } from "next";
import Configuration from "@/components/05-inferring-types/configuration";

const InferringTypes: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Inferring Typescript Types</h2>
                <Configuration />
            </div>
        </div>
     );
}
 
export default InferringTypes;