import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";


function App() {
return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}

export default App;