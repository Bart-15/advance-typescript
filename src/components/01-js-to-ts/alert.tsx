
type TAlertProps = {
    messageId: string,
    variant: 'dark' | 'blue' | 'green'
}

const Alert = ({messageId, variant} : TAlertProps) => {

    if(!messageId) {
        throw new Error("Messageid is required.")
    }

    return (
        <div className="rounded-md bg-blue-200">
            <p className="text-slate-600 text-base py-4 px-6">{messageId}</p>    
        </div>
    );
}

export default Alert;