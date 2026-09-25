'use client';

import { useContext } from 'react';
import { IoCalendarOutline, IoBookmarkOutline } from 'react-icons/io5';
import { IExercise } from '../../types/Exercise';
import { Bounce, toast } from 'react-toastify';
import { excerciseContext } from '../../context-provider/contextProvider';

const ExerciseActions = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(excerciseContext);

  if (!context) {
    throw new Error('ExerciseContext must be used inside ExerciseProvider');
  }
  const { todaysPlan, setTodaysPlan, savePlan, setSavePlan } = context;

  const handleTodaysPlan = () => {
    if (isTodaysPlanAdded) {
      toast.error('× Todays Plan Is Already Added', {
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
      return;
    }
    setTodaysPlan([...todaysPlan, exercise]);

    toast.success('✓ Todays Plan Is Added', {
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
  };
  const handleSaveData = () => {
    if (isSavePlanAdded) {
      toast.error('× Save Plan Is Already Added', {
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
      return;
    }
    setSavePlan([...savePlan, exercise]);

    toast.success('✓ Save Plan Is Added', {
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
  };

  const isTodaysPlanAdded = todaysPlan.some((item) => item.id === exercise.id);
  const isSavePlanAdded = savePlan.some((item) => item.id === exercise.id);
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add Button */}
      <button
        type="button"
        onClick={() => handleTodaysPlan()}
        className="flex items-center justify-center gap-3 rounded-xl bg-[#CCFF00] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#c6eb2f] active:scale-[0.98]"
      >
        <IoCalendarOutline className="h-6 w-6 shrink-0" />

        <span>{isTodaysPlanAdded ? "Added to today's plan" : "Add to today's plan"}</span>
      </button>

      {/* Save Button */}
      <button
        type="button"
        onClick={() => handleSaveData()}
        className="flex items-center justify-center gap-3 rounded-xl border border-[#3a3e49] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#171920] active:scale-[0.98]"
      >
        <IoBookmarkOutline className="h-6 w-6 shrink-0" />

        <span>{isSavePlanAdded ? 'Saved' : 'Save for later'}</span>
      </button>
    </div>
  );
};

export default ExerciseActions;
