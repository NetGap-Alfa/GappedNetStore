import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminShoppingListPage } from "./pages/adminShoppingList/adminShoppingListPage";
import { ClientShoppingListPage} from "./pages/clientShoppingList/clientShoppingListPage";
import { LoginPage } from "./pages/login/loginPage";
import { ModifyProductsPage} from "./pages/modifyProducts/modifyProductsPage";
import { SalesListPage} from "./pages/salesList/salesListPage";
import { ShoppingCartPage } from "./pages/shoppingCart/shoppingCartPage";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/admin/shoppingList" element={<AdminShoppingListPage />} />
        <Route path="/client/shoppingList" element={<ClientShoppingListPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/modifyProducts" element={<ModifyProductsPage />} />
        <Route path="/admin/salesList" element={<SalesListPage />} />
        <Route path="/client/shoppingCart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
