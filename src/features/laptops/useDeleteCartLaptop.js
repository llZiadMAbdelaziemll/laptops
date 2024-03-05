import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCartLaptop as deleteLaptopApi } from "../../services/apiLaptops";

export function useDeleteCartLaptop() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCartLaptop } = useMutation({
    mutationFn: deleteLaptopApi,
    onSuccess: () => {
      toast.success("Laptop successfully deleted from cart");

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCartLaptop };
}
