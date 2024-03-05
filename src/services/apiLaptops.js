import supabase from "./supabase";

export async function getLaptops() {
  const { data, error } = await supabase.from("laptops").select("*");

  if (error) {
    console.error(error);
    throw new Error("laptops could not be loaded");
  }

  return data;
}

export async function getLaptop(id) {
  const { data, error } = await supabase
    .from("laptops")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("laptop not found");
  }
  console.log(data);
  return data;
}

export async function addFavoriteLaptop(newLaptop) {
  // 1. Create/edit doctor
  const { data, error } = await supabase
    .from("favorites")
    .insert([newLaptop])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("laptop could not be added to favorites");
  }
  console.log(data);
  return data;
}
export async function getFavorites() {
  const { data, error } = await supabase.from("favorites").select("*");

  if (error) {
    console.error(error);
    throw new Error("laptops could not be loaded");
  }

  return data;
}
export async function deleteFavorite(id) {
  const { data, error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("laptop could not be deleted from favorites");
  }

  return data;
}

export async function addCartLaptop(newLaptop) {
  // 1. Create/edit doctor
  const { data, error } = await supabase
    .from("cart")
    .insert([newLaptop])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("laptop could not be added to cart");
  }
  console.log(data);
  return data;
}
export async function getCartLaptops() {
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    console.error(error);
    throw new Error("laptops could not be loaded");
  }

  return data;
}
export async function deleteCartLaptop(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("laptop could not be deleted from cart");
  }

  return data;
}
