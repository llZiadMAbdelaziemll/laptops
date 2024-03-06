import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getLaptop } from "../../services/apiLaptops";

export function useLaptop() {
  const { id } = useParams();

  const {
    isLoading,
    data: laptop,
    error,
  } = useQuery({
    queryKey: ["laptop", id],
    queryFn: () => getLaptop(id),
    retry: false,
  });

  return { isLoading, error, laptop };
}
