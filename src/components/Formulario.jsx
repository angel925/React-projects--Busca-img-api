import { useState } from "react";
import Error from './Error'



const Formulario = ({guardarBusqueda}) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    //validar

    if(termino.trim() === ''){
        guardarError(true);
        return;

    }

    guardarError(false);

    //enviar el termino de busqueda hacia el componente principal

    guardarBusqueda(termino);
  };
  return (
    
    <form 
        onSubmit = {buscarImagenes}
    >
    <div className="row">
      <div className="form-group col-md-8">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Busca Imaganes Free, Ej: futbol"
          onChange={(e) =>
            guardarTermino(e.target.value)
          } /* aqui se captura lo que el ususario escribe */
        />
      </div>
      <div className="form-group col-md-4">
        <input
          type="submit"
          className="btn btn-lg btn-success btn-block"
          value="Buscar"
        />
      </div>
    </div>
    {error ? <Error mensaje = "¡Agrega un termino para la busqueda de las Imágenes!"/> : null}
    </form>
  );
};

export default Formulario;
