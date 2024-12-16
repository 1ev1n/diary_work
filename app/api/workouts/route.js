import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await db('SELECT * FROM "Workout"');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching workouts:', error);
        return NextResponse.error();
    }
}

export async function POST(req) {
    try {
        const { user_id, date, description, name_workout } = await req.json();
        if (!user_id || !date || !name_workout) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await db(
            `INSERT INTO "Workout" (user_id, date, description, name_workout) VALUES ($1, $2, $3, $4) RETURNING *`,
            [user_id, date, description, name_workout]
        );
        return NextResponse.json(result[0], { status: 201 });
    } catch (error) {
        console.error('Error creating workout:', error);
        return NextResponse.error();
    }
}
