import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage } from "./pages/login/loginPage";
import { ShoppingCartPage } from "./pages/shoppingCart/shoppingCartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/shoppingCart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
