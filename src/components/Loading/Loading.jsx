import Icon from "assets/pizza-icon.svg";
import "./Loading.css";

export default function Loading() {
    return(
        <div className="container">
            <img className="image" src={Icon} alt="icono de pizza" />
            {/* <div className="loader">
                <img className="ball" src={Icon} alt="icono de pizza" />
                <img className="ball" src={Icon} alt="icono de pizza" />
                <img className="ball" src={Icon} alt="icono de pizza" />
            </div>   */}
        </div>
    );
};