import Hero from './components/ui/Hero';
import Library from './components/library/library';
import { getExercises } from './lib/api';

const Home = async () => {
  const exercises = await getExercises();
  return (
    <div>
      <Hero></Hero>
      <Library exercises={exercises}></Library>
    </div>
  );
};
export default Home;
