import { notFound } from "next/navigation";
import ExerciseDetails from "../../components/exercise/ExerciseDetails";
import { getExerciseById } from "../../lib/singleapi";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
const ExerciseId =async ({ params }: PageProps) => {
  const { id } = await params;

  const exercise = await getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  return <ExerciseDetails exercise={exercise} />;
}
export default ExerciseId;