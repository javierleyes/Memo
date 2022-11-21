import Link from "next/link";

export default function ProjectHeader() {
  function handleClick() {
    debugger;
    alert("You clicked here.");
  }

  return (
    <>
      <h1>PSA</h1>

      <Link href="/projects/newProject">
        <button onClick={handleClick}>Nuevo Proyecto</button>
      </Link>
    </>
  );
}
