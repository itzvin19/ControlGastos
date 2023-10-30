import { useEffect, useState } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      return gasto.cantidad + total;
    }, 0);
    const totalDisponible = presupuesto-totalGastado

    setDisponible(totalDisponible)  
    setGastado(totalGastado)
  }, [gastos]);

  var cantidadFormateada = (cantidad) =>
    cantidad.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {cantidadFormateada(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {cantidadFormateada(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {cantidadFormateada(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
