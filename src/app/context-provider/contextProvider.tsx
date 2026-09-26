"use client";

import {
  createContext,
  useSyncExternalStore,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { IExercise } from "../types/Exercise";

interface LayoutProps {
  children: ReactNode;
}

interface ExerciseContextType {
  todaysPlan: IExercise[];
  setTodaysPlan: Dispatch<SetStateAction<IExercise[]>>;

  savePlan: IExercise[];
  setSavePlan: Dispatch<SetStateAction<IExercise[]>>;
}

/* --------------------------------
   Stable server snapshot
--------------------------------- */

const EMPTY_PLAN: IExercise[] = [];

/* --------------------------------
   LocalStorage Store
--------------------------------- */

const createLocalStorageStore = (key: string) => {
  let cachedRaw: string | null | undefined = undefined;

  let cachedValue: IExercise[] = EMPTY_PLAN;

  const listeners = new Set<() => void>();

  /* Get data from localStorage */
  const getSnapshot = (): IExercise[] => {
    if (typeof window === "undefined") {
      return EMPTY_PLAN;
    }

    const raw = localStorage.getItem(key);

    /* Return cached value if nothing changed */
    if (raw === cachedRaw) {
      return cachedValue;
    }

    cachedRaw = raw;

    if (!raw) {
      cachedValue = EMPTY_PLAN;
      return cachedValue;
    }

    try {
      cachedValue = JSON.parse(raw);
    } catch {
      cachedValue = EMPTY_PLAN;
    }

    return cachedValue;
  };

  /* Server always starts with empty data */
  const getServerSnapshot = () => EMPTY_PLAN;

  /* Subscribe to changes */
  const subscribe = (listener: () => void) => {
    listeners.add(listener);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        cachedRaw = undefined;
        listener();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      listeners.delete(listener);

      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  };

  /* Update localStorage */
  const setValue: Dispatch<SetStateAction<IExercise[]>> = (
    value
  ) => {
    const currentValue = getSnapshot();

    const nextValue =
      typeof value === "function"
        ? value(currentValue)
        : value;

    const raw = JSON.stringify(nextValue);

    localStorage.setItem(key, raw);

    cachedRaw = raw;
    cachedValue = nextValue;

    /* Tell React that data changed */
    listeners.forEach((listener) => listener());
  };

  return {
    getSnapshot,
    getServerSnapshot,
    subscribe,
    setValue,
  };
};

/* --------------------------------
   Create two separate stores
--------------------------------- */

const todaysPlanStore =
  createLocalStorageStore("todaysPlan");

const savePlanStore =
  createLocalStorageStore("savePlan");

/* --------------------------------
   Context
--------------------------------- */

export const excerciseContext =
  createContext<ExerciseContextType | undefined>(
    undefined
  );

/* --------------------------------
   Provider
--------------------------------- */

const ContextProvider = ({
  children,
}: LayoutProps) => {
  const todaysPlan = useSyncExternalStore(
    todaysPlanStore.subscribe,
    todaysPlanStore.getSnapshot,
    todaysPlanStore.getServerSnapshot
  );

  const savePlan = useSyncExternalStore(
    savePlanStore.subscribe,
    savePlanStore.getSnapshot,
    savePlanStore.getServerSnapshot
  );

  const contextValue: ExerciseContextType = {
    todaysPlan,
    setTodaysPlan: todaysPlanStore.setValue,

    savePlan,
    setSavePlan: savePlanStore.setValue,
  };

  return (
    <excerciseContext.Provider value={contextValue}>
      {children}
    </excerciseContext.Provider>
  );
};

export default ContextProvider;