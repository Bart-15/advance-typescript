import { ComponentProps, FC, useId } from 'react';
import { CheckboxInput } from './input-checkbox';
import { Label } from '../label';

type Props = ComponentProps<typeof CheckboxInput>;

const LabeledCheckbox: FC<Props> = ({children, id, ...props}) => {
    const internalId = useId();

    return ( 
        <div className="flex items-center mb-4">
            <CheckboxInput className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded border-transparent focus:border-transparent dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" id={id ?? internalId} {...props}/>
            <Label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={id ?? internalId}>{children}</Label>
        </div>
    );
}

export default LabeledCheckbox;