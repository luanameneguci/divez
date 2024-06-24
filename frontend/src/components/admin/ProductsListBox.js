// Componente que mostra as caixas no cimo das páginas
import '../../App.css';

// For testing, swap with db data
const boxProductsContent = [
    "Adobe Photoshop",
    "1000",
    "Updated",
    "IntelliJ IDEA",
    "250",
    "Outdated",
    "Adobe Photoshop",
    "30000",
    "Updated",
    "Visual Studio Code",
    "3500",
    "Outdated",
    "Visual Studio Code",
    "3500",
    "Outdated",
  ];
  
  // Split the box3content array into rows of 3 items each
  const rows3 = [];
  const itemsPerRow = 3;
  
  for (let i = 0; i < boxProductsContent.length; i += itemsPerRow) {
    rows3.push(boxProductsContent.slice(i, i + itemsPerRow));
  }
  
// main function, returns table with data
  function ProductsListBox() {
    return (
      <div className="box-container bg-white roundbg d-flex h-100 position-relative" shadow>
        <div className="col-12">
          <h3 className="text-start p-3">Products</h3>
          <table className="container text-start">
            <thead className="text-white bg-info">
              <tr>
                <th className="ps-4 py-2">Product Name</th>
                <th className="ps-4 py-2">Licences</th>
                <th className="ps- py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows3.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((data, colIndex) => {
                    let spanStyle = {};
                    // Check if it's the last column
                    if (colIndex === row.length - 1) {
                      spanStyle.textAlign = "center";
                      if (data === "Updated") {
                        spanStyle.backgroundColor = "#00B69B";
                        spanStyle.color = "#fff";
                        spanStyle.borderRadius = "20px";
                        spanStyle.fontWeight = "500";
                      } else if (data === "Outdated") {
                        spanStyle.textAlign = "center";
                        spanStyle.backgroundColor = "#FD5454";
                        spanStyle.color = "#fff";
                        spanStyle.borderRadius = "20px";
                        spanStyle.fontWeight = "500";
                      }
                    }
                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: "10px 10px",
                        }}
                      >
                        <span
                          style={{
                            ...spanStyle,
                            padding: "4px 15px",
                            display: "inline-block",
                          }}
                        >
                          {data}
                        </span>
                      </td>
                    );
                  })}
                  
                </tr>
              ))}
              
            </tbody>
          </table>
          <div className='text-center'>
                  <button className="btn btn-outline-dark hover my-4">See more</button>
                  </div>
            
        </div>
      </div>
    );
  }

export default ProductsListBox;
