"use client"

import React, { createContext, useState } from 'react';
import { IExercise } from '../types/Exercise';


interface LayoutProps {
  children: React.ReactNode;
}
interface ExerciseContextType {
  TodaysPlan: IExercise[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  SavePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
}
export const ExcerciseContext = createContext<ExerciseContextType | undefined>(undefined)
const UseContext = ({children}:LayoutProps) => {
    const [TodaysPlan, setTodaysPlan] = useState<IExercise[]>([]);
    const [SavePlan, setSavePlan] = useState<IExercise[]>([]);
    const AllPlan:ExerciseContextType = {
        TodaysPlan,
        setTodaysPlan,
        SavePlan,
        setSavePlan
    }
    return (
        <ExcerciseContext.Provider value={AllPlan}>{children}</ExcerciseContext.Provider>
    );
};

export default UseContext;