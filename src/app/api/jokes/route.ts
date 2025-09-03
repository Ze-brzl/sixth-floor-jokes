import { connectDB } from "@/app/lib/database";
import jokes from "@/app/models/Joke";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const findJokes = await jokes.find();
  return NextResponse.json(findJokes);
}

export async function POST(request: NextRequest) {
  const { joke } = await request.json();
  const lastJoke = await jokes.findOne().sort({ jokeNumber: -1 });
  const newJokeNumber = lastJoke.jokeNumber + 1;
  const newJoke = await jokes.create({
    jokeNumber: newJokeNumber,
    joke,
    count: 0,
  });
  return NextResponse.json(newJoke);
}
