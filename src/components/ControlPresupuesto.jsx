const ControlPresupuesto = ({ presupuesto }) => {
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
          {cantidadFormateada(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {cantidadFormateada(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
