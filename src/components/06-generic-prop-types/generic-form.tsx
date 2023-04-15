import {FC, useState} from 'react';
import { LabeledInput } from '../input';

type Props<TValues> = {
    header: string;
    initialValues: TValues;
    onSubmit: (values: TValues) => void;
};

function GenericForm<TValues extends Record<string, any>>({
    header,
    initialValues,
    onSubmit
}: Props<TValues>) {

    const [values, setValues] = useState(initialValues);

    return (
        <form onSubmit={() => onSubmit(values)}>
            <h3 className="my-2 text-2xl font-medium">{header}</h3>
            {
                Object.keys(values).map((key) => (
                    <LabeledInput
                    key={key}
                    value={values[key]}
                    onChange={(e) => setValues({...values, [key]: e.target.value})}
                    >
                        <span className="capitalize">{key}:</span>
                    </LabeledInput>
                ))
            }
            <button type="submit" className="text-white rounded-md bg-blue-600 py-2 px-3">Submit</button>
        </form>
    )
}

export default GenericForm;