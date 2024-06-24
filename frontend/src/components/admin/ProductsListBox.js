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
      <div className="container bg-white d-flex px-0 roundbg h-100 shadow">
        <div className="container px-0 roundbg h-100">
          <table className="table text-start">
            <thead className="text-white pt-2">
              <tr className='col-12'>
                <th className="ps-4 py-2 col-4">Product Name</th>
                <th className="ps-4 py-2 col-2">Licences</th>
                <th className="ps- py-2 col-2">Status</th>
              </tr>
            </thead>
            <tbody className='roundbg'>
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
                  <button className="btn btn-info text-white hover my-4"><strong>See more</strong></button>
                  </div>
            
        </div>
      </div>
    );
  }

export default ProductsListBox;
