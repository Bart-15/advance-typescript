import { NextPage } from "next";
import BookShop from "@/components/13-predicates-assertions/book-shop";

const PredicatesAssertion: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
        <div className="py-2 px-4">
            <h2 className="my-4 text-2xl font-bold">Predicates Assertion</h2>
            <BookShop />
        </div>
    </div>
     );
}
 
export default PredicatesAssertion;