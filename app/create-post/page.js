'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (!id) {
      router.push('/login');
    } else {
      setUserId(id);
    }
  }, []);
const [loading, setLoading] = useState(false);

const handleFixGrammar = async () => {
  if (!content) return;
  setLoading(true);

  const res = await fetch('/api/improve-grammar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: content }),
  });

  const data = await res.json();
  console.log("✨ Grammar Fix Response:", data);
  if (data.fixed) {
    setContent(data.fixed); 
    alert('Grammar improved!');
  }

  setLoading(false);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, authorId: userId }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert(data.error || 'Something went wrong!');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-teal-100">
      <h1 className="text-2xl font-bold text-center p-3 text-teal-800">Write a New Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto ">
        <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" required/>
        <textarea rows={10} placeholder="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 rounded" required/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit cursor-pointer">
          Publish Post
        </button>
        <button
  onClick={handleFixGrammar}
  disabled={loading}
  className="bg-teal-700 text-white px-4 py-2 rounded mt-2"
>
  {loading ? 'Fixing...' : 'Fix Grammar'}
</button>
      </form>
    </div>
  );
}
