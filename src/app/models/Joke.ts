import mongoose from "mongoose";

const JokeSchema = new mongoose.Schema({
  jokeNumber: { type: Number, unique: true },
  joke: { type: String, required: true },
  count: { type: Number, default: 0 },
});

const jokes = mongoose.models.jokes || mongoose.model("jokes", JokeSchema);

export default jokes;
