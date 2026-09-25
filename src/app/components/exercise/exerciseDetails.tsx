import Image from "next/image";

import { IExercise } from "../../types/Exercise";
import ExerciseActions from "./exerciseAction";

interface ExerciseDetailsProps {
  exercise: IExercise;
}

const ExerciseDetails = ({ exercise }: ExerciseDetailsProps) => {
  return (
    <main className="min-h-screen bg-[#0d0e12] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1350px]">
        {/* Main Layout */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          
          {/* ================= IMAGE ================= */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl sm:min-h-[550px] lg:min-h-0">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex h-full flex-col">
            
            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#969ba8] sm:text-base sm:leading-7">
              {exercise.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-4 py-1.5 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#282b34] bg-[#15171f]">
              <DetailRow
                label="Equipment"
                value={exercise.equipment}
              />

              <DetailRow
                label="Difficulty"
                value={exercise.difficulty}
              />

              <DetailRow
                label="Sets"
                value={String(exercise.sets)}
              />

              <DetailRow
                label="Reps"
                value={exercise.reps}
              />

              <DetailRow
                label="Duration"
                value={`${exercise.duration} min`}
              />

              <DetailRow
                label="Calories"
                value={`${exercise.caloriesBurned} kcal`}
              />

              <DetailRow
                label="Rating"
                value={String(exercise.rating)}
                last
              />
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-lg font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {exercise.instructions.map(
                  (instruction, index) => (
                    <li
                      key={instruction}
                      className="flex gap-4 text-sm leading-6 text-[#b1b5c0] sm:text-base"
                    >
                      <span className="shrink-0 text-[#b1b5c0]">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* Actions */}
            <div className="mt-8">
              <ExerciseActions exercise = {exercise} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface DetailRowProps {
  label: string;
  value: string;
  last?: boolean;
}

const DetailRow = ({
  label,
  value,
  last = false,
}: DetailRowProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-5 px-5 py-4 sm:px-6 ${
        !last ? "border-b border-[#282b34]" : ""
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-[#969ba8]">
        {label}
      </span>

      <span className="text-right text-sm text-[#d4d6dc] sm:text-base">
        {value}
      </span>
    </div>
  );
};

export default ExerciseDetails;