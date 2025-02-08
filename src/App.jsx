import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/assets/layouts/RootLayout";
import Home from "../src/assets/pages/Home";
import DoctrinaBasica from "../src/assets/pages/DoctinaBasica";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* Aquí podemos agregar más rutas después */}
          <Route path="/doctrina-basica" element={<DoctrinaBasica />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
