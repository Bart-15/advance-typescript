import { FC } from "react";

type TSex = 'Male' | 'Female';

/**
 * Only one props can be chosen its either message or name.
 * For TSex you can choose Male or Female only
 */

type TDualAlertProps = (
    | {
        message?: never;
        name: string;
    }
    | {
        message: string;
        name?: never;
    }
) & {
    sex: TSex
}

const DualAlert: FC<TDualAlertProps> = ({
    name,
    message,
    sex
}) => {
    return ( 
        <div className="rounded-md bg-blue-200 py-4 px-6">
            <p className="text-slate-600">My name is {name}, I `am {sex}</p>
            {message && (<p className="text-slate-600 text-base py-4 px-6">{message}</p>)}
        </div>
     );
}

export default DualAlert;