import React from "react";

const App = () => {
  return (
    <>
      <h1>Blog Platzi</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fernando</td>
            <td>fernu@gmail.com</td>
            <td>fernu.com</td>
          </tr>
          <tr>
            <td>Maosin</td>
            <td>feto@gmail.com</td>
            <td>fetus.com</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default App;
