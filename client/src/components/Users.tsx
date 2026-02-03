import { useState, useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

interface User {
  _id: string;
  name: string;
  role: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.users || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) return <div className="users"><p>Loading...</p></div>;
  if (error) return <div className="users"><p>Error: {error}</p></div>;

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="users__list">
          {users.map((user) => (
            <li key={user._id} className="users__item">
              <strong>{user.name}</strong> - {user.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
