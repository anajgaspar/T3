import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Botao = ({ link, conteudo }) => {
    return (
        <a id="botao" className="rounded rounded-full" href={link}>
            {conteudo}
        </a>
    );
};

export default Botao;