import { connectDB } from '@/lib/mongoose.js';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  try {
    const { default: Post } = await import('@/models/Post.js');
    await connectDB();

    const posts = await Post.find({});
    return NextResponse.json(posts); // ✅ Always return an array
  } catch (err) {
    console.error('❌ GET /api/posts error:', err);
    return NextResponse.json([], { status: 500 }); // fallback to empty
  }
}

export async function POST(req) {
  try {
    const { default: Post } = await import('@/models/Post.js');
    const { title, content, authorId } = await req.json();
    await connectDB();

    const post = await Post.create({
      title,
      content,
      authorId: new mongoose.Types.ObjectId(authorId),
    });

    return NextResponse.json({ message: 'Post created', post });
  } catch (err) {
    console.error('❌ POST /api/posts error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
