"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewJoke() {
  const [joke, setJoke] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ joke }),
    });
    if (res.ok) {
      setMessage("Piada enviada com sucesso!");
      setJoke("");
    } else {
      setMessage("Erro ao enviar piada.");
    }
  };

  return (
    <div className="bg-[#0E3A53] font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-[#F2EDEE] text-4xl font-bold">Crie uma piada</h1>
      <p className="text-[#F2EDEE] text-lg leading-relaxed max-w-2xl text-center sm:text-left font-medium">
        Apenas digite a piada, o número dela será gerado automaticamente
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <textarea
          className="border rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#87646C]"
          value={joke}
          onChange={(e) => setJoke(e.target.value)}
          placeholder="Digite sua piada aqui"
          required
        />
        <button
          type="submit"
          className="bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      {/* / <p>Piada número {res.jokeNumber}</p> */}
      <Link href="/">
        <button className="bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-4 py-2 rounded-md">
          Back
        </button>
      </Link>
    </div>
  );
}
