'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');

  // Get userId from localStorage
  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (!id) {
      router.push('/signup'); // force redirect if not signed up
    } else {
      setUserId(id);
    }
  }, []);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`/api/profile/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, bio, profilePic }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to update profile');
        return;
      }

      // Redirect to dashboard after profile is completed
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div className='bg-teal-100 min-h-screen pt-20'>
      <h1 className="text-2xl text-teal-700 my-3 font-extrabold text-center">Complete Your Profile</h1>

      <form onSubmit={handleProfileSubmit} className="mx-auto max-w-2xl flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded"
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="px-4 py-2 border rounded"
        />

        <input
          type="text"
          placeholder="Profile Picture URL"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          className="px-4 py-2 border rounded"
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-green-600 cursor-pointer text-white py-2 px-4 w-fit rounded hover:bg-green-700"
        >
          Save & Go to Dashboard
        </button>
      </form>
    </div>
  );
}
