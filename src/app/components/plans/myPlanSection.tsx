'use client';

import { useContext, useMemo, useState } from 'react';

import PlanCard from './planCard';
import PlanTabs from './planTabs';
import Link from 'next/link';
import { excerciseContext } from '../../context-provider/contextProvider';
import { Bounce, toast } from 'react-toastify';
import { FiChevronDown } from 'react-icons/fi';

const MyPlanSection = () => {
  const context = useContext(excerciseContext);

  if (!context) {
    throw new Error('ExerciseContext must be used inside ExerciseProvider');
  }
  const { todaysPlan, setTodaysPlan, savePlan, setSavePlan } = context;

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  const [sortBy, setSortBy] = useState<'duration' | 'rating' | 'calories'>('duration');

  const activeExercises = activeTab === 'today' ? todaysPlan : savePlan;

  const sortedExercises = useMemo(() => {
    return [...activeExercises].sort((a, b) => {
      if (sortBy === 'duration') {
        return a.duration - b.duration;
      }

      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }

      return b.caloriesBurned - a.caloriesBurned;
    });
  }, [activeExercises, sortBy]);

  const totalMinutesTodaysPlan = todaysPlan.reduce((total, exercise) => total + exercise.duration, 0);

  const totalCaloriesTodaysPlan = todaysPlan.reduce((total, exercise) => total + exercise.caloriesBurned, 0);
  const totalMinutesSavePlan = savePlan.reduce((total, exercise) => total + exercise.duration, 0);

  const totalCaloriesSavePlan = savePlan.reduce((total, exercise) => total + exercise.caloriesBurned, 0);

  const removeExercise = (id: number) => {
    toast.error('× Workout removed', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    if (activeTab === 'today') {
      setTodaysPlan((prev) => prev.filter((exercise) => exercise.id !== id));
    } else {
      setSavePlan((prev) => prev.filter((exercise) => exercise.id !== id));
    }
  };

  const markAsDone = (id: number) => {
    toast.success('✓ Workout marked as done', {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    setTodaysPlan((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#0d0e12] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-337.5">
        {/* ================= HEADER ================= */}
        <div className="mb-7">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">My Plan</h1>

          <p className="mt-1 text-sm text-[#8e94a2] sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        {/* ================= SUMMARY ================= */}
        {activeTab === 'today' ? (
          <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292c35] bg-[#14151c] sm:grid-cols-3">
            {/* Exercises */}
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Exercises</p>

              <p className="mt-1 text-3xl font-black text-[#CCFF00]">{todaysPlan.length}</p>
            </div>

            {/* Minutes */}
            <div className="border-[#292c35] px-5 py-5 sm:border-l sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Minutes</p>

              <p className="mt-1 text-3xl font-black text-white">{totalMinutesTodaysPlan}</p>
            </div>

            {/* Calories */}
            <div className="border-[#292c35] px-5 py-5 sm:border-l sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Calories</p>

              <p className="mt-1 text-3xl font-black text-white">{totalCaloriesTodaysPlan}</p>
            </div>
          </div>
        ) : (
          <div className="mb-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292c35] bg-[#14151c] sm:grid-cols-3">
            {/* Exercises */}
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Exercises</p>

              <p className="mt-1 text-3xl font-black text-[#8cff18]">{savePlan.length}</p>
            </div>

            {/* Minutes */}
            <div className="border-[#292c35] px-5 py-5 sm:border-l sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Minutes</p>

              <p className="mt-1 text-3xl font-black text-white">{totalMinutesSavePlan}</p>
            </div>

            {/* Calories */}
            <div className="border-[#292c35] px-5 py-5 sm:border-l sm:px-6 sm:py-6">
              <p className="text-xs text-[#858b99]">Calories</p>

              <p className="mt-1 text-3xl font-black text-white">{totalCaloriesSavePlan}</p>
            </div>
          </div>
        )}
        {/* ================= TABS + SORT ================= */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PlanTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#858b99]">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                className="appearance-none rounded-lg border border-gray-700 bg-[#12141a] px-4 py-2 pr-10 text-sm text-white outline-none"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        {sortedExercises.length > 0 ? (
          <div className="space-y-4">
            {sortedExercises.map((exercise) => (
              <PlanCard
                key={exercise.id}
                exercise={exercise}
                showDoneButton={activeTab === 'today'}
                onRemove={removeExercise}
                onDone={markAsDone}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-62.5 items-center justify-center rounded-2xl border border-dashed border-[#292c35] px-5 text-center">
            <div>
              <h2 className="text-lg font-black uppercase">Nothing Here Yet</h2>

              <p className="mt-1 text-xs text-[#858b99] sm:text-sm">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 inline-block rounded-full bg-[#CCFF00] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#cef23c]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanSection;
