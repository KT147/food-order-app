import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./context/CartContext";
import { UserProgressContextProvider } from "./context/UserProgressContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
