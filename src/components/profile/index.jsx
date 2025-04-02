import { ImageProfile } from "../image/index.jsx";
import backgroundImg from "../../assets/background.png";
import "./style.css";

export function Profile() {
  return (
    <>
      <div className="card">
        <div className="backgound-img">
          <img src={backgroundImg} alt="" />
        </div>

        <div className="fotoPerfil">
          <ImageProfile />
        </div>

        <div className="informacoes">
          <h2>Leslie Alexander</h2>
          <p>UI Designer</p>
          
          <hr />

          <div className="button">   
            <button>Editar seu perfil</button>
          </div>
        </div>
      </div>
    </>
  );
}
