import { useState } from "react";
import supabase from "../services/supabase";
import Button from "../ui/Button";

import { laptops } from "./Laptops-data";

async function deleteLaptops() {
  const { error } = await supabase.from("laptops").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createLaptops() {
  const { error } = await supabase.from("laptops").insert(laptops);
  if (error) console.log(error.message);
}

function UploadLaptops() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadLaptops() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST

    await deleteLaptops();

    // Bookings need to be created LAST
    await createLaptops();

    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadLaptops} disabled={isLoading}>
        Upload Laptops
      </Button>
    </div>
  );
}

export default UploadLaptops;
