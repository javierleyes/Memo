import Link from "next/link";

export default function ProjectHeader() {
  return (
    <>
      <h1 align="center">PSA</h1>

      <div align="right">
        <Link href="/projectsModule/project/new">
          <button>Nuevo Proyecto</button>
        </Link>
      </div>
    </>
  );
}
