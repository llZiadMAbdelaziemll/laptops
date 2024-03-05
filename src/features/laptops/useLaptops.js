import { useQuery } from "@tanstack/react-query";
import { getLaptops } from "../../services/apiLaptops";

export function useLaptops() {
  const {
    isLoading,
    data: laptops,
    error,
  } = useQuery({
    queryKey: ["laptops"],
    queryFn: getLaptops,
  });

  return { isLoading, error, laptops };
}
