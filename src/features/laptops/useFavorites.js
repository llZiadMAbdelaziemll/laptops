import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../services/apiLaptops";

export function useFavorites() {
  const {
    isLoading,
    data: laptops,
    error,
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  return { isLoading, error, laptops };
}
