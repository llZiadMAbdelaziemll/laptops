import { createContext, useContext, useState } from "react";

const ProductModeContext = createContext();

function ProductsModeProvider({ children }) {
  const [productMode, setProductMode] = useState("home");

  return (
    <ProductModeContext.Provider value={{ productMode, setProductMode }}>
      {children}
    </ProductModeContext.Provider>
  );
}

function useProductMode() {
  const context = useContext(ProductModeContext);
  if (context === undefined)
    throw new Error(
      "ProductModeContext was used outside of ProductsModeProvider"
    );
  return context;
}

export { ProductsModeProvider, useProductMode };
