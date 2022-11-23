import { useState } from "react";
import Link from "next/link";

export default function NewProject() {
  const [projectData, setProjectData] = useState({
    Name: "",
    Description: "",
    AssignedTo: "",
  });

  // To do: Implement Form.
  // To do: Call API [POST].
  // To do: Implement calendar.

  function handleCancelOnClick(event) {
    alert("You clicked cancel.");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(projectData);
    setContactInfo({ Name: "", Description: "", AssignedTo: "" });
  };

  return (
    <>
      <h1>Nuevo proyecto</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={projectData.Name} />
        <br />
        <br />

        <label>Tipo:</label>
        <input type="text" value={projectData.Description} />
        <br />
        <br />

        <label>Descripcion:</label>
        <input type="text" value={projectData.AssignedTo} />
        <br />
        <br />

        <label>Fecha de inicio:</label>
        <br />
        <br />

        <label>Fecha de fin:</label>
        <br />
        <br />

        <button>Crear</button>
      </form>

      <br />
      <br />

      <Link href="/projectsModule/project/dashboard">
          <button>Cancelar</button>
        </Link>
    </>
  );
}
