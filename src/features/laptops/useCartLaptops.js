import { useQuery } from "@tanstack/react-query";
import { getCartLaptops } from "../../services/apiLaptops";

export function useCartLaptops() {
  const {
    isLoading,
    data: laptops,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartLaptops,
  });

  return { isLoading, error, laptops };
}
