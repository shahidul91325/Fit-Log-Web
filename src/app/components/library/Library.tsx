import Link from "next/link";
import { IExercise } from "../../types/Exercise";
import ExerciseCard from "./ExerciseCard";


interface LibraryProps {
  exercises: IExercise[];
}

const Library = ({ exercises }: LibraryProps) => {
  return (
    <section className="min-h-screen bg-[#0c0d0f] px-5 py-4 text-white sm:px-8 lg:px-10 mb-10">
      <div className="mx-auto max-w-[1450px]">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            The Library
          </h2>

          <p className="mt-1 text-sm text-[#9296a3] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
           <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
           </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Library;