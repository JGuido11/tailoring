import '../../styles/css/styles.css';

interface productProp {
    imgUrl: string;
    title: string;
    description: string;
    pros: string[];
}

export function Product({ imgUrl, title, description, pros }: productProp){
    return(
        <div className="Product__container">
            <div className="Product__imgContainer">
                <img src={imgUrl} alt={title} />
                <div className="imgBorder" />
            </div>

            <div>
                <h2>{title}</h2>
                <div>{description}</div>

                <ul>
                    {pros.map((pro)=>(
                        <li key={pro}>{pro}</li>
                    ))}
                </ul>
                <div className="Product__productInfo">
                    <button className="button">
                        <a href="https://www.instagram.com/gkchogah/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                            Quero Orçamento
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}