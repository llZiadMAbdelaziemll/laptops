import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFavorite as deleteLaptopApi } from "../../services/apiLaptops";

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFavorite } = useMutation({
    mutationFn: deleteLaptopApi,
    onSuccess: () => {
      toast.success("Laptop successfully deleted from favorites");

      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFavorite };
}
