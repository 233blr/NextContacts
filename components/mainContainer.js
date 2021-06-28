import Head from "next/head";
import Header from "./header";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'NextJS, 233blr' + keywords}></meta>
        <title>NextContacts</title>
      </Head>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer
