import PizzaShopDataLoader from "@/components/04-validating-ajax-data/pizza-shop-data-loader";

const  ValidatingAjaxData = () => {
    return ( 
        <div className="container mx-auto mt-10">
        <div className="py-2 px-4">
            <h2 className="my-4 text-2xl font-bold">Validating data at the boundary</h2>
            <PizzaShopDataLoader />
        </div>
    </div>
     );
}
 
export default  ValidatingAjaxData;