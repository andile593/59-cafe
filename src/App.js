
import AppRoutes from "./routes/routes";
import NavBar from "./Components/common/Header/navBar";
import Footer from "./Components/common/Footer/webFooter";
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar />
        <AppRoutes/>
      <Footer />
    </div>
  )
}


export default App;
