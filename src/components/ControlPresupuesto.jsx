import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      return gasto.cantidad + total;
    }, 0);
    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    const porcentajeGastado = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setPorcentaje(porcentajeGastado);
  }, [gastos]);

  var cantidadFormateada = (cantidad) =>
    cantidad.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: "#3B82F6",
            trailColor: "#F5F5F5",
            textColor:"#3B82F6"
          })}
          text={`${porcentaje}% Gastado`}
        />
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
