import { IExercise } from "../types/Exercise";


export const getExercises = async (): Promise<IExercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
};