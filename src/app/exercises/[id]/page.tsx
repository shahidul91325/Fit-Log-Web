import { notFound } from "next/navigation";
import ExerciseDetails from "../../components/exercise/exerciseDetails";
import { getExerciseById } from "../../lib/singleapi";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const exerciseId =async ({ params }: PageProps) => {
  const { id } = await params;

  const exercise = await getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  return <ExerciseDetails exercise={exercise} />;
}
export default exerciseId;