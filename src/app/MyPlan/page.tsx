import React from 'react';
import { getExercises } from '../lib/api';

const MyPlanPage = async () => {
  const exercises = await getExercises();
  return (
    <div>
    </div>
  );
};

export default MyPlanPage;
