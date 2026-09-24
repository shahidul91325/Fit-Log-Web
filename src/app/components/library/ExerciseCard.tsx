import Image from "next/image";
import { IExercise } from "../../types/Exercise";


interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#292c35] bg-[#14151c]">
      {/* Image */}
      <div className="relative h-[205px] w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#8cff18] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
          {exercise.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-[#9296a3]">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[#292c35]" />

        {/* Exercise Stats */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#9ca1ae]">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-base">◷</span>
            <span>{exercise.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-base">♨</span>
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-base">☆</span>
            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;