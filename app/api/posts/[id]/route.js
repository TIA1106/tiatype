import { connectDB } from '@/lib/mongoose.js';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  try {
    const { default: Post } = await import('@/models/Post.js');
    await connectDB();

    const post = await Post.findById(params.id);
    if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  try {
    const { default: Post } = await import('@/models/Post.js');
    await connectDB();

    const deleted = await Post.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error("❌ DELETE error:", err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
