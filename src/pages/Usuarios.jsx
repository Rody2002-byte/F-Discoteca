import { useEffect, useState } from "react";
import axios from "axios";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/usuarios") // ruta del backend
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Bandeja de Usuarios</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id_usuario}>
              <td>{u.id_usuario}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
