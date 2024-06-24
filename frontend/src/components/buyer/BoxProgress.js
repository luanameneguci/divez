function BoxProgress({ title, data }) {
    const result = createDataArrays(data);
    const resultado = calculatePercentages(result);

    return (
        <div className="box-container bg-white col-auto roundbg d-flex shadow" style={{ height: 360 + "px" }}>
            <div className="col-12">
                <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
                    <strong>
                        <h4>{title}</h4>
                    </strong>
                </span>
                <div className="px-3">
                    <ProgressDivs resultado={resultado} />
                </div>
            </div>
        </div>
    );
}



function createDataArrays(data) {
  // Inicia um array vazio para armazenar os subarrays resultantes.
    let result = [];
    // Percorre os dados fornecidos (data) até que result contenha no máximo 4 subarrays.
    for (let i = 0; i < data.length && result.length < 4; i++) {
      // Cria um novo array (subArray) com três elementos: nome, numeroTotal e numeroAtivos do objeto atual em data.
        let subArray = [data[i].nome, data[i].numeroTotal, data[i].numeroAtivos];
        // Adiciona o subArray criado ao array result.
        result.push(subArray);
    }
    // Retorna o array result que contém no máximo 4 subarrays, cada um representando dados de um objeto em data.
    return result;
}

function calculatePercentages(result) {
  // Inicia um array vazio para armazenar os resultados finais com percentagens calculadas.
  let resultado = [];
   // Percorre cada item no array result fornecido.
    for (let i = 0; i < result.length; i++) {
      // Obtém o item atual do array result.
        let item = result[i];
        // Calcula a percentagem com base nos valores do segundo e terceiro elementos do item.
        let percentage = (item[2] / item[1]) * 100;
        // Cria um novo objeto newItem que contém todos os elementos do item atual mais a percentagem formatada.
        let newItem = {
            ...item, // Copia todos os elementos do item atual
            percentage: percentage.toFixed(0), // Adiciona a percentagem formatada como um novo elemento
        };
        // Adiciona o newItem ao array resultado.
        resultado.push(newItem);
    }
    // Retorna o array resultado que contém cada item original do array result com a percentagem calculada e formatada.
    return resultado;
}

const ProgressDiv = ({ nome, numeroAtivos, numeroTotal, percentage }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <p>
          <strong>{nome}</strong>
        </p>
        <div className="d-flex">
          <p>
            {numeroAtivos} of {numeroTotal}
          </p>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
  const ProgressDivs = ({ resultado }) => {
    return (
      <div>
        {resultado.map((item, index) => (
          <ProgressDiv
            key={index}
            nome={item[0]}
            numeroAtivos={item[2]}
            numeroTotal={item[1]}
            percentage={item.percentage}
          />
        ))}
      </div>
    );
  };

export default BoxProgress;