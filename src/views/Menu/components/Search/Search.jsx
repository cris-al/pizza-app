import "./styles/search.css";

export default function Search({ name, handleChange }) {
    return <input
                className="search"
                name={name}
                // value={value}
                onChange={handleChange}
                placeholder="Ingrese una palabra clave"/>
};