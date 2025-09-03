"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0E3A53] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/new-joke">
          <button className="bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-4 py-2 rounded-md">
            Nova piada
          </button>
        </Link>
        <Link href="/find-joke">
          <button className="bg-[#87646C] hover:bg-[#95A27C] text-[#F2EDEE] px-4 py-2 rounded-md">
            Ache uma piada
          </button>
        </Link>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-align-center">
          <h1 className="text-[#F2EDEE] text-4xl font-bold ">
            Piadas do sexto andar
          </h1>
        </div>
        <p className="text-[#F2EDEE] text-lg leading-relaxed max-w-2xl text-center sm:text-left">
          Uma breve piada para explicar esse projeto: Um cara foi preso, e
          durante o almoço, sempre alguém dizia um número e todos davam risada.
          Aí ele perguntou para o seu companheiro de cela o motivo, e ele
          respondeu:
        </p>
        <p className="text-[#F2EDEE] text-lg leading-relaxed max-w-2xl text-center sm:text-left font-medium">
          "Cara, estamos aqui há tanto tempo que nós já decoramos as piadas e
          enumeramos elas".
        </p>
        <p className="text-[#F2EDEE] text-lg leading-relaxed max-w-2xl text-center sm:text-left">
          Com isso, no outro dia, no almoço, novamente alguém gritou um número e
          todos riram. Foi aí que o prisioneiro pensou "vou me enturmar". Foi lá
          e gritou: "28". E todos riram mais do que o comum. Curioso, o
          prisioneiro perguntou: "foi uma boa piada?". O companheiro de cela
          respondeu: "Essa ninguém nunca tinha contado"
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Então, no fim, a ideia é enumerar as piadas do nosso dia dia...
      </footer>
    </div>
  );
}
