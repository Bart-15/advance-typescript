import { useState } from 'react';
import GenericForm from '@/components/06-generic-prop-types/generic-form';
import UL from '@/components/06-generic-prop-types/generic-ul';

const GenericProps = () => {

    const [lists, setLists] = useState<string[]>(["Shampoo", "Soap", "Water"])

    function handleDelete(item: string){
        const filteredList = lists.filter(list => list !== item);
        setLists(filteredList)
    }

    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Genric Props</h2>
                <GenericForm 
                header="User"
                initialValues={{
                    firstName:"Bart",
                    lastName:"Tabusao"
                }}
                onSubmit={(values) => alert(
                    `${values.firstName} ${values.lastName} \n\n ${JSON.stringify(values, null, 2)}` 
                )}
                />

                <GenericForm 
                    header="Address"
                    initialValues={{
                        houseNumber:606,
                        street:"Maharlika",
                        city:"Binangonan Rizal"
                    }}
                    onSubmit={(values) => alert(
                        `${values.houseNumber}, ${values.street}, ${values.city} \n\n ${JSON.stringify(values, null, 2)}
                        `
                    )}
                />

                <hr className="my-5"/>
                <h3 className="my-4 text-2xl font-bold">Generic Lists</h3>
                {
                    !lists.length ? <p className="text-1xl">No lists</p> : (
                        <UL
                        className="text-blue-500" 
                        items={lists}
                        render={(item) => (
                        <span>
                            {item}
                            <button 
                            className="rounded-md ml-2 py-2 px-4 text-xs text-white bg-red-600"
                            onClick={() => handleDelete(item)}
                            >Delete</button>
                        </span>)}
                        onSubmit={(value) => alert(value)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default GenericProps;