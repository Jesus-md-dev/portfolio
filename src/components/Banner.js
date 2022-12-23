import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from "../components/Avatar.js";
import "./Banner.css";


function Banner(params) {
    return (
        <div className="Banner">
            <div class="hero-image">
                <div class="hero-text">
                    <Avatar user={params.user}/>
                    <h1>{params.user.name}  {params.user.surname}</h1>
                    <h3>Licenciado en Ingenieria Informática</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner;