import { connectDB } from '@/lib/mongoose.js';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  try {
    const { default: User } = await import('@/models/User.js'); // or 'Auth.js' if profile data is stored there
    const { name, bio, profilePic } = await req.json();

    await connectDB();

    await User.findByIdAndUpdate(params.id, {
      name,
      bio,
      profilePic,
    });

    return NextResponse.json({ message: 'Profile updated' });
  } catch (err) {
    console.error("❌ Profile Update Error:", err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
