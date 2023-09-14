import '../../styles/css/styles.css';
import whatsAppImg from "../../Assets/Logos/whatsApp.png";

export function WhatsButton(){
    return(
        <div className="WAB__container">
            <a href="https://api.whatsapp.com/send?phone=5511945501193" target="_blank">
                <img src={whatsAppImg} alt="Logo" />
            </a>
        </div>
    );
}
