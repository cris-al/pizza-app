import { Select } from "./styles/styles";

export default function Filter({ name, options, handleChange, placeholder }) {
    return(
        <>
            <Select name={name} onChange={handleChange}>
                <option disabled>{placeholder}</option>
                { options.map(el =>
                    <option key={el} value={el}>{el}</option>) }
            </Select>
        </>
    );
};