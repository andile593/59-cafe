import Header from "../Header/navBar.js";
import Footer from "../Footer/webFooter.js";
import Router from "../../routes/routes.js";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="webcontent">
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout
