import { connectDB } from "@/app/lib/database";
import jokes from "@/app/models/Joke";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const enteredJokeNumber = await jokes.findOne({
    jokeNumber: Number(params.id),
  });
  if (!enteredJokeNumber) {
    return NextResponse.json(
      { error: "Piada não encontrada!" },
      { status: 404 }
    );
  }
  return NextResponse.json(enteredJokeNumber);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const joke = await jokes.findOne({
    jokeNumber: Number(params.id),
  });
  if (!joke) {
    return NextResponse.json(
      { error: "Piada não encontrada!" },
      { status: 404 }
    );
  }
  joke.count = (joke.count || 0) + 1;
  joke.save();
  return NextResponse.json(joke);
}
