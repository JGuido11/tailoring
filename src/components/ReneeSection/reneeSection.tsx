import { Benefits } from "../Benefits/benefits";
import { Renee } from "./renee";

export function ReneeSection(){
    return(
        <div id="company" style={{ paddingTop:32 }}>
            <Renee />
            <Benefits />
        </div>
    );
}