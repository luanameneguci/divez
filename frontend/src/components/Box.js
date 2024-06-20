// Componente que mostra as caixas no cimo das páginas
import '../App.css';


function Box(props) {
    return (
        <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 align-items-center">
            <div className="col-10">
                <span className="box-title d-flex justify-content-start"><strong><h6>{props.title}</h6></strong></span>
                <span className="box-number d-flex justify-content-start pt-2"><strong><h2>{props.number}</h2></strong></span>
            </div>
            <div>
                <img src={props.image} alt="" className="box-image ms-3" />
            </div>
        </div>
    );
}

export default Box;
