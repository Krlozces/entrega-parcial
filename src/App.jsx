import { useState } from "react";
import Card from "./Card";

function App() {
  const [formData, setFormData] = useState({
    placa: '',
    name: '',
    brand: '',
    year: '',
    maxSpeed: '',
    price: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    placa: '',
    name: '',
    brand: '',
    year: '',
    maxSpeed: '',
    price: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let newErrors = {
      placa: '',
      name: '',
      brand: '',
      year: '',
      maxSpeed: '',
      price: '',
    };

    if (formData.placa.length < 3 || /^\s/.test(formData.placa)) {
      newErrors.placa = "La placa debe tener al menos 3 caracteres y no debe comenzar con un espacio.";
      newErrors.general = "Por favor chequea que la información sea correcta";
      isValid = false;
    }

    if (formData.name.length < 6) {
      newErrors.name = "El nombre debe tener al menos 6 caracteres.";
      newErrors.general = "Por favor chequea que la información sea correcta";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      setIsSubmitted(false);
    } else {
      console.log("Formulario enviado:", formData);
      setErrors({});
      setIsSubmitted(true);
    }
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Carros F1</h1>
        <label>
          Placa:
          <input
            type="text"
            name="placa"
            onChange={handleInputChange}
          />
          {/* {errors.placa && <p style={{ color: 'red' }}>{errors.placa}</p>} */}
        </label>
        <label>
          Nombre:
          <input 
            type="text" 
            name="name"
            onChange={handleInputChange} 
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </label>
        <label>
          Marca:
          <input type="text" name="brand" onChange={handleInputChange} />
        </label>
        <label>
          Año:
          <input type="text" name="year" onChange={handleInputChange} />
        </label>
        <label>
          Velocidad máxima:
          <input type="text" name="maxSpeed" onChange={handleInputChange} />
        </label>
        <label>
          Precio:
          <input type="text" name="price" onChange={handleInputChange} />
        </label>
        <button type="submit">Agregar</button>
      </form>
      {errors.general && <p style={{ color: 'red', textAlign: 'center' }}>{errors.general}</p>}
      {isSubmitted && (
        <Card 
          placa={formData.placa}
          name={formData.name}
          brand={formData.brand}
          year={formData.year}
          maxspeed={formData.maxSpeed}
          price={formData.price}
        />
      )}
    </div>
  );
}

export default App;
