import { LabeledInput } from "../input";


function getConfigItem<TSection extends keyof typeof config, TItem extends keyof typeof config[TSection]>(section: TSection, item: TItem) {
    const config = {
        user: {
            firstName: "Bart",
            lastName: "Tabusao",
            birthDate: new Date(2000, 5, 13)
        },
        address: {
            street: "Maharlika",
            houseNumber: "707",
            city: "Binangonan Rizal"
        }
    }

    return config[section][item];
}

const Configuration = () => {
    const firstName = getConfigItem("user", "firstName");
    const lastName = getConfigItem("user", "lastName");
    const birthDate = getConfigItem("user", "birthDate").toLocaleDateString();

    const address = getConfigItem("address","street",)
    const houseNumber = getConfigItem("address","houseNumber");
    const city = getConfigItem("address","city");

    const fullAdd = address + "," + houseNumber + "," + city;

    return ( 
        <div className="container">
            <h2 className="text-2xl font-bold">Configuration</h2>
            <div className="my-4">
                <form>
                    <LabeledInput id="firstName" value={firstName} type="text" readOnly>
                        <span>FirstName</span>
                    </LabeledInput>
                    <LabeledInput id="lastName" value={lastName} type="text" readOnly>
                        <span>LastName</span>
                    </LabeledInput>
                    <LabeledInput id="birthDate" value={birthDate} type="text" readOnly>
                        <span>BirthDate</span>
                    </LabeledInput>
                    <LabeledInput id="address" value={fullAdd} type="text" readOnly>
                        <span>Address</span>
                    </LabeledInput>
                </form>
            </div>
        </div>
    );
}
 
export default Configuration;