import type { NextPage } from 'next';
import DualAlert from '@/components/02-mutually-exclusive/dual-alert';

const MutuallyExclusive: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Mutually Exclusive Props</h2>
                <DualAlert 
                name="Bart Tabusao" 
                sex="Male"  
                // message="Hello Bart Tabusao"
                />            
            </div>
        </div>
    );
}

export default MutuallyExclusive;