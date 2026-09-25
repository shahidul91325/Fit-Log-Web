"use client"

import { createContext, useState } from 'react';
import { IExercise } from '../types/Exercise';


interface LayoutProps {
  children: React.ReactNode;
}
interface ExerciseContextType {
  todaysPlan: IExercise[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}
export const excerciseContext = createContext<ExerciseContextType | undefined>(undefined)
const ContextProvider = ({children}:LayoutProps) => {
    const [todaysPlan, setTodaysPlan] = useState<IExercise[]>([]);
    const [savePlan, setSavePlan] = useState<IExercise[]>([]);
    const allPlan:ExerciseContextType = {
        todaysPlan,
        setTodaysPlan,
        savePlan,
        setSavePlan
    }
    return (
        <excerciseContext.Provider value={allPlan}>{children}</excerciseContext.Provider>
    );
};

export default ContextProvider;