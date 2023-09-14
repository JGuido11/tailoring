import { Fragment } from "react";
import { benefits } from "../../utils/benefits";
import '../../styles/css/styles.css';

export function Benefits(){
    return(
        <div className="benefits__container">
            {benefits.map((benefits) => (
                <Fragment key={benefits.id}>
                    <div>
                        <h5 className="benefitTitle">{benefits.title}</h5>
                        <p className="benefitDescription">{benefits.description}</p>
                    </div>
                    <div className="divider"/>
                </Fragment>
            ))}
        </div>
    );
}