import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getLaptop } from "../../services/apiLaptops";

export function useLaptop() {
  const { LaptopId } = useParams();

  const {
    isLoading,
    data: laptop,
    error,
  } = useQuery({
    queryKey: ["laptop", LaptopId],
    queryFn: () => getLaptop(LaptopId),
    retry: false,
  });

  return { isLoading, error, laptop };
}
