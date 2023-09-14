import depo1Img from "../Assets/exemple.jpg";

interface Deposition {
    id: number;
    avatar: string;
    depositionText: string;
    name: string;
    job: string;
}

export const deposition: Deposition[] = [
    {
        id: 1,
        avatar: depo1Img,
        depositionText:
          "Tenho sido cliente da GK por aproximadamente 12 anos. Meu primeiro contato foi por meio do meu pai, que já possui uma relação de décadas com a estimada GK. O serviço excepcional desde o primeiro contato até o pós-venda, juntamente com a utilização de materiais de alta qualidade, coloca a GK em um nível superior aos concorrentes do setor.",
        name: "William Lacerda",
        job: "Advogado | Nelson Lacerda Advogados Associados.",
    }
];