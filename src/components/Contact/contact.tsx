import { useState } from "react";
import "../../styles/css/styles.css";

export function Contact() {
    const [ isformSent, setIsFormSent ] = useState(false)

    function handleSubmit(){
        setIsFormSent(true)
    }

    return(
        <div id="contact" className="contact__container">
            <section className="formContainer">
                <h1>Forms</h1>
                <div className="divider"/>
                {isformSent ? (
                    <p style={{ marginTop: 32 }}>Menssage Sent Sucessfully</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="E-mail" required />
                        <textarea placeholder="Message" required />
                        <button type="submit">Sent Message</button>
                    </form>
                )
            }
            </section>
            //#endregion

            //#region Owner Contact
            <section className="contact__contactContainer">
                <div className="contact">
                    <p className="title">Telephone</p>
                    <p className="value"> ############</p>
                </div>
                <div className="contact">
                    <p className="title">E-mail</p>
                    <p className="value">contact@gmail.com</p>
                </div>
            </section>
            //#endregion 

        </div>
    );
}