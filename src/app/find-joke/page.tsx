"use client";

import Link from "next/link";
import { useState } from "react";

interface Joke {
  jokeNumber: number;
  joke: string;
  count: number;
}

export default function FindJoke() {
  const [jokes, setJokes] = useState<Joke | null>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  //const [ setMessage] = useState([]);
  const [enteredJokeNumber, setEnteredJokeNumber] = useState("");

  // let enteredJokeNumber = Number

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Limpa mensagens anteriores

    const res = await fetch(`/api/jokes/${enteredJokeNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setJokes(data);
    } else {
      setJokes(null);
      setErrorMessage("Essa piada ainda não foi contada");
    }
  };

  async function incrementCount(jokeNumber: number) {
    const res = await fetch(`/api/jokes/${jokeNumber}`, {
      method: "PATCH",
    });

    if (!res.ok) {
      alert("Erro ao aumentar a contagem da piada");
      return;
    }
    // Atualiza a piada com o novo contador
    const updatedJoke = await res.json();
    setJokes(updatedJoke);
  }

  return (
    <div className="bg-[#0E3A53] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Header */}
      <header className="flex justify-center items-center py-8">
        <h1 className="text-[#F2EDEE] text-4xl font-bold">Tela de piadas</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Joke Display Section */}
        {jokes && (
          <div className="w-full max-w-2xl mb-8 text-center">
            <div className="bg-[#14354b] rounded-lg p-6 shadow-lg">
              <p className="text-[#F2EDEE] text-2xl font-bold mb-4 leading-relaxed">
                {jokes.joke}
              </p>
              <p className="text-[#F2EDEE] text-lg mb-6">
                Piada contada {jokes.count} vezes
              </p>
              <button
                onClick={() => incrementCount(jokes.jokeNumber)}
                className="bg-[#87646C] text-[#F2EDEE] px-6 py-3 rounded-md hover:bg-[#95A27C] transition-colors font-medium"
              >
                Aumentar contagem
              </button>
            </div>
          </div>
        )}

        {/* Error Message Section */}
        {errorMessage && (
          <div className="w-full max-w-2xl mb-8 text-center">
            <div className="bg-[#14354b] rounded-lg p-6 shadow-lg">
              <p className="text-white text-lg font-medium">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Search Form Section */}
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <textarea
              className="w-full border rounded-lg p-1 resize-none focus:outline-none focus:ring-2 focus:ring-[#87646C]"
              value={enteredJokeNumber}
              onChange={(e) => setEnteredJokeNumber(e.target.value)}
              placeholder="Digite o número da piada"
              required
            />
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="submit"
                className="flex-1 bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-6 py-3 rounded-md transition-colors font-medium"
              >
                Buscar piada
              </button>
              <Link href="/" className="flex-1">
                <button
                  type="button"
                  className="w-full bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Voltar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        *Possivelmente a piada foi criado pelo Murer
      </footer>
    </div>
  );
}
