import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addFavoriteLaptop as addFavoriteLaptopApi } from "../../services/apiLaptops";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  const { mutate: addFavoriteLaptop, isLoading: isCreating } = useMutation({
    mutationFn: addFavoriteLaptopApi,
    onSuccess: () => {
      toast.success("New laptop successfully added to favorites");
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addFavoriteLaptop };
}
