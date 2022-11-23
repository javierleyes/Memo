export default function NewProject() {
  // To do: Implement Form.
  // To do: Call API [POST].
  // To do: Implement calendar.

  function handleCancelOnClick(event) {
    alert("You clicked cancel.");
  }

  function handleSubmit(event) {
    alert("An essay was submitted: ");
    event.preventDefault();
  }

  return (
    <>
      <h1>Nuevo proyecto</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        {/* <textarea value={this.state.value} /> */}
        <textarea  />

        <label>Tipo:</label>
        {/* <textarea value={this.state.value} /> */}
        <textarea  />

        <label>Descripcion:</label>
        {/* <textarea value={this.state.value} /> */}
        <textarea  />

        <label>Fecha de inicio:</label>

        <label>Fecha de fin:</label>

        <input type="submit" value="Crear" />
      </form>

      <button onClick={handleCancelOnClick}>Cancelar</button>
    </>
  );
}
