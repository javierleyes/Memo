import { useState } from "react";
import Link from "next/link";

export default function NewProject() {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    assignedTo: "",
  });

  // To do: Implement Form.
  // To do: Call API [POST].
  // To do: Implement calendar.

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`{name: ${projectData.name}, description: ${projectData.description}, assignedTo: ${projectData.assignedTo}}`);
    setProjectData({ Name: "", Description: "", AssignedTo: "" });
  };

  return (
    <>
      <h1>Nuevo proyecto</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={projectData.name}
          onChange={(e) =>
            setProjectData({ ...projectData, name: e.target.value })
          }
        />
        <br />
        <br />

        <label>Tipo:</label>
        <input
          type="text"
          value={projectData.description}
          onChange={(e) =>
            setProjectData({ ...projectData, description: e.target.value })
          }
        />
        <br />
        <br />

        <label>Descripcion:</label>
        <input
          type="text"
          value={projectData.assignedTo}
          onChange={(e) =>
            setProjectData({ ...projectData, assignedTo: e.target.value })
          }
        />
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
