import { useAppSelector } from '../store/hooks';
import { selectUser } from '../features/auth/authSlice';

function Home() {
  const user = useAppSelector(selectUser);

  return (
    <div className="home">
      <h1 className="home__welcome">Welcome, {user?.name}!</h1>
      <p className="home__message">
        You are logged in as a <strong>{user?.role}</strong>.
      </p>
    </div>
  );
}

export default Home;
