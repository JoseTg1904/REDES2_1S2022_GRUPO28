import "./App.css";
import Footer from "./components/Footer";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div className="App">
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
