import CerrarBtn from "../img/cerrar.svg";
import { useState } from "react";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animarModal, setAnimarModal,agregarGastos }) => {

  const [nombre, setNombre ] = useState("");
  const [cantidad, setCantidad ] = useState("");
  const [categoria, setCategoria ] = useState("");
  const [mensaje, setMensaje]= useState("")

  const ocultarModal = () => {
    setModal(false);
    setAnimarModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
        setMensaje("Debe de  llenar todos los campos")
        return;
    }
    agregarGastos({nombre,cantidad,categoria})
  };


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el Nombre de Gasto"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad de Gasto: ej. 300"
            id="cantidad"
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" onChange={(e) => setCategoria(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastor Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
