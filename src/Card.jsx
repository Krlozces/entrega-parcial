//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ placa, name, brand, year, maxspeed, price }) {
  return (
    <div>
      <div className="card-information">
      <h2>Información del Carro F1</h2>
      <p><strong>Placa:</strong> {placa}</p>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Marca:</strong> {brand}</p>
      <p><strong>Año:</strong> {year}</p>
      <p><strong>Velocidad máxima:</strong> {maxspeed} km/h</p>
      <p><strong>Precio:</strong> ${price}</p>
    </div>
    </div>
  );
}

export default Card;
