'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (!id) {
      router.push('/login');
      return;
    }

    setUserId(id);

    fetch('/api/posts')
      .then(async (res) => {
        if (!res.ok) throw new Error('API returned error');
        return await res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error('Dashboard Fetch Error:', err);
        setPosts([]);
      });
  }, []);

  const userPosts = posts.filter((post) => post.authorId === userId);

  return (
    <div className="pt-20 text-center min-h-screen bg-teal-100">
      <div className="justify-between items-center p-3">
        <h1 className="text-3xl font-bold text-center text-teal-800">Your Blog Posts</h1>
      </div>
      <button onClick={() => router.push('/create-post')} className="cursor-pointer bg-green-600 text-white rounded px-4 py-3 hover:bg-green-700">
        ➕ Create New Post
      </button>
      {userPosts.length === 0 ? (
  <p className="text-gray-700 font-semibold p-3">No posts found. Start writing!</p>
) : (
  <ul className="space-y-4">
    {userPosts.map((post) => (
      <li key={post._id} className="border rounded p-4 shadow max-w-4xl mx-auto my-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-600">{post.content.slice(0, 100)}...</p>

        <div className="flex gap-4 mt-3">
          <button
            onClick={() => router.push(`/posts/${post._id}`)}
            className="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            View
          </button>
          <button
            onClick={async () => {
              const confirmDelete = confirm("Are you sure you want to delete this post?");
              if (!confirmDelete) return;

              const res = await fetch(`/api/posts/${post._id}`, {
                method: 'DELETE',
              });

              if (res.ok) {
                setPosts((prev) => prev.filter((p) => p._id !== post._id));
              } else {
                alert('Failed to delete post');
              }
            }}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
)}

    </div>
  );
}
