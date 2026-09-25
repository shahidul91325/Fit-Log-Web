import Image from "next/image";
import Link from "next/link";
import { IExercise } from "../../types/Exercise";



interface PlanCardProps {
  exercise: IExercise;
  showDoneButton?: boolean;
  onRemove?: (id: number) => void;
  onDone?: (id: number) => void;
}

const PlanCard = ({
  exercise,
  showDoneButton = false,
  onRemove,
  onDone,
}: PlanCardProps) => {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#292c35] bg-[#14151c] p-4 sm:flex-row sm:items-center">
      {/* Image */}
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-[82px] sm:w-[125px]">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-black uppercase text-white">
          {exercise.name}
        </h3>

        <p className="mt-0.5 text-xs text-[#9296a3]">
          {exercise.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#b0b4bf]">
          <span className="flex items-center gap-1">
            <span className="text-[#8cff18]">◷</span>
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#8cff18]">♨</span>
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#8cff18]">☆</span>
            {exercise.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:ml-auto">
        <Link
          href={`/exercises/${exercise.id}`}
          className="rounded-full border border-[#38404d] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#1b1e26]"
        >
          View Details
        </Link>

        {showDoneButton && (
          <button
            type="button"
            onClick={() => onDone?.(exercise.id)}
            className="rounded-full bg-[#8cff18] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#9cff3d]"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove?.(exercise.id)}
          className="px-2 text-lg text-[#737987] transition hover:text-white"
          aria-label={`Remove ${exercise.name}`}
        >
          ×
        </button>
      </div>
    </article>
  );
};

export default PlanCard;