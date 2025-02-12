"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const confirmLogout = window.confirm("Tem certeza que deseja sair?");
    
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      console.log("✅ Usuário desconectado com sucesso.");
      
      router.push("/login");
    } else {
      
      router.back();
    }
  }, [router]);

  return <p>Saindo...</p>;
}
