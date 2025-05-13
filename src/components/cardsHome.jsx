import Botao from "./Botao";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function CardsHome({ icone, titulo, descricao, rota }) {
    return (
        <div className="container-lg d-flex flex-row p-3">
            <div className="d-flex flex-row align-items-start gap-4">
                <img className="img-fluid" src={icone} alt="icone" width={40}></img>
                <div className="flex-column">
                    <h5>{titulo}</h5>
                    <p>{descricao}</p>
                    <Botao link={rota} conteudo="Acessar"></Botao>
                </div>
            </div>
        </div>
    );
}
