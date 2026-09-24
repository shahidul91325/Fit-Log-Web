import { IExercise } from "../types/Exercise";


const ApiUrl = "https://api.abcz.workers.dev/api/fitlog";

export const getExerciseById = async (
  id: string
): Promise<IExercise> => {
  const response = await fetch(`${ApiUrl}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exercise");
  }

  return response.json();
};