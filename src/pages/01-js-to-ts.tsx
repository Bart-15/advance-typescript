import Alert from '@/components/01-js-to-ts/alert';
import type { NextPage } from 'next';

const JsToTs: NextPage = () => {
    return ( 
        <div className="container mx-auto mt-10">
            <div className="py-2 px-4">
                <h2 className="my-4 text-2xl font-bold">Converting JavaScript to TypeScript</h2>
                <Alert messageId='Hello Bart Tabusao' variant="green" />
            </div>
        </div> 
    );
}
 
export default JsToTs;