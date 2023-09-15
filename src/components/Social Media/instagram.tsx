import '../../styles/css/styles.css';
import InstaImg from "../../Assets/Logos/insta.png";

export function Instagram(){
    return(
        <div className="Insta__container">
            <a href="https://www.instagram.com/gkchogah/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <img src={InstaImg} alt="Logo" />
            </a>
        </div>
    );
}
