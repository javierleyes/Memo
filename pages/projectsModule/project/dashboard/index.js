import Link from "next/link";

import Header from './header';
import Body from './body';

export default function Dashboard() {

  return (
    <>
      <Header/>
      <Body/>

      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
