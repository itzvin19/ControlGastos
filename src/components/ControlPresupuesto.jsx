import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setPresupuesto,
  setGastos,
  setFiltro,
  setIsValidPresupuesto,
}) => {
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
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={() => {
            const res = confirm("¿Desea reiniciar sus gastos y presuspuesto?");
            if (res) {
              setPresupuesto(0);
              setGastos([]);
              setFiltro("");
              setIsValidPresupuesto(false);
            }
          }}
        >
          Reiniciar Presupuesto
        </button>
        <p>
          <span>Presupuesto: </span>
          {cantidadFormateada(presupuesto)}
        </p>
        <p className={disponible < 0 ? "negativo" : ""}>
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
