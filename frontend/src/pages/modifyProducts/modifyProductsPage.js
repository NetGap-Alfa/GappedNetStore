import { useState, useEffect } from "react";
import "./modifyProductsPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { productsExample } from "../../data/data";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textArea/textArea";

export const ModifyProductsPage = () => {

  const [updateProducts, setUpdateProducts] = useState(false)
  const [dataProducts, setDataProducts] = useState([]);
  const [temp, setTemp] = useState('');
  const [dato, setDato] = useState('Actualizar');

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescipcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [urlImagen, setUrlImagen] = useState("");

  const get_rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const get_uuid = (length = 14) => {
    const ar = [
      "abcdefghijklmnopqrstuvxyz", //0: letras
      "0123456789"                 //1: números
    ]
    const r = new Array(length).fill(0).map(() => {
      //indica de modo aleatorio si se usará letras o números
      let i = get_rnd(0, 1)
      //si i=0 => letras, sino (i=1) numeros
      let str = ar[i]
      //si es 1 se pasará a mayusculas el string obtenido, evidentemente para los números
      //no hay mayor efecto
      str = get_rnd(0, 1) ? str.toUpperCase() : str
      //se obtendrá un valor entre 0 y la longitud del string anterior 10 o 25
      const max = str.length - 1
      i = get_rnd(0, max)
      return str.split("")[i]
    }).join("")
    return r
  }

  useEffect(() => {
    getData();
    //console.log(`Datows ${dataProducts.length}`);
  }, [updateProducts]);

  function getData() {
    fetch(`http://localhost:5000/api/products`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        setDataProducts(resp)
        setTemp(0)
      })
      .catch((err) => console.log(err));
  }

  function sending(event) {
    event.preventDefault();

    const dataProduct = JSON.stringify({
      id,
      nombre,
      descripcion,
      precio,
      stock,
      urlImagen
    });

    //console.log(`Se va a enviar ${dataProduct}`)

    if (dato === "Crear") {
      fetch(`http://localhost:5000/api/products/create`, {
        //mode: 'cors',
        method: "POST",
        body: dataProduct,
        headers: {
          "Content-Type": "application/json",
          //'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.state) {
            alert("Se ha Insertado el Registro");
            cleanFields();
          } else {

            alert("El Id ya se ha Registrado");
          }
        })
        .catch((err) => console.log("Ocurrio un error al guardar: ", err));
    } else {
      fetch(`http://localhost:5000/api/products/update`, {
        method: "PUT",
        body: dataProduct,
        headers: {
        
          "Content-Type": "application/json",

        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
         
          if (resp.state) {
            alert("Se ha actualizado el Registro");
            cleanFields();
          } else {
            alert("El registro no existe");
          }
        })
        .catch((err) => console.log("Ocurrio un error al guardar: ", err));
    }

  }

  function cleanFields() {
    const r = []
    for (let i = 0; i < 1; i++) {
      r.push(get_uuid())
    }
    setId(r[0]);
    setNombre('');
    setDescipcion('');
    setPrecio('');
    setStock('');
    setUrlImagen('');
    //console.log(typeof id);
  }



  return (

    <div>
      <AdminHeader />


      {dataProducts.length !== 0 ? (

        <>

          <div className="main-container">
            <div className="secondary-container">
              <div className="main-container div-btn">

                {dataProducts.map((product, index) => (

                  <div className="product-names">
                    <Button
                      text={product.nombre}
                      otherprops="modify-buttons"
                      onClickFunc={() =>
                      //console.log(index)
                      {
                        setTemp(index)
                        setDato('Actualizar')
                        setUrlImagen(product.urlImagen)

                        // setDataProducts(dataProducts.at(index))
                      }
                      }
                    />
                  </div>

                ))}


                <div className="product-names">
                  <Button
                    text="Crear Producto"
                    otherprops="create-buttons "
                    onClickFunc={

                      () => {
                        cleanFields()
                        setDato('Crear')
                        //   cleanFields()
                        //  console.log(id)
                      }


                    }
                  />
                </div>
              </div>

              <div>

                <img className="img-modifiP" src={dataProducts[temp].urlImagen} />
              </div>
              <form onSubmit={sending}>
                <div className="div-txt">
                  <Input
                    otherInputProps="modify-input"
                    name="id"
                    id="id"
                    tag="Id: "
                    onChange={(e) => setId(e.target.value)}
                    defaultValue={dato === "Crear" ?
                      id :
                      dataProducts[temp].id

                    }
                    disabled="false"

                  />
                  <Input
                    otherInputProps="modify-input"
                    name="name"
                    id="name"
                    tag="Nombre: "
                    onChange={(e) => setNombre(e.target.value)}
                    defaultValue={dato === "Crear" ?
                      nombre : dataProducts[temp].nombre}
                  />
                  <TextArea
                    otherInputProps="modify-input"
                    name="description"
                    id="description"
                    tag="Descripción: "
                    onChange={(e) => setDescipcion(e.target.value)}
                    defaultValue={dato === "Crear" ?
                      descripcion : dataProducts[temp].descripcion}
                  />
                  <Input
                    otherInputProps="modify-input"
                    name="price"
                    id="price"
                    tag="Precio: "
                    onChange={(e) => setPrecio(e.target.value)}
                    defaultValue={dato === "Crear" ?
                      precio : dataProducts[temp].precio}
                  />
                  <Input
                    otherInputProps="modify-input"
                    name="stock"
                    id="stock"
                    tag="Stock: "
                    onChange={(e) => setStock(e.target.value)}
                    defaultValue={dato === "Crear" ?
                      stock : dataProducts[temp].stock}
                  />
                  {dato === "Crear" ? (
                    <Input
                      otherInputProps="modify-input"
                      name="url"
                      id="url"
                      tag="Imagen: "
                      onChange={(e) => setUrlImagen(e.target.value)}
                      defaultValue={
                        urlImagen}
                    />
                  ) : null}

                  <div className="secondary-container">
                    {dato !== "Actualizar" ? (
                      <Button text="Crear" />
                    ) : (
                      <Button text="Actualizar" />
                    )}
                  </div>

                </div>
              </form>
            </div>

          </div>
        </>
      ) : (
        <>
          <span>Cargando...</span>

        </>
      )}





    </div>
  );
};
