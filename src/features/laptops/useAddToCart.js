import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCartLaptop as addCartLaptopApi } from "../../services/apiLaptops";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addCartLaptop, isLoading: isCreating } = useMutation({
    mutationFn: addCartLaptopApi,
    onSuccess: () => {
      toast.success("New laptop successfully added to cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addCartLaptop };
}
