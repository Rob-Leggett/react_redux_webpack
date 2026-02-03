import { Outlet, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout, selectUser } from '../features/auth/authSlice';

function Layout() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__content">
          <Link to="/" className="navbar__brand">
            React Redux App
          </Link>
          <div className="navbar__links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </div>
          <div className="navbar__user">
            <span>Welcome, {user?.name}</span>
            <button className="btn btn--danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
