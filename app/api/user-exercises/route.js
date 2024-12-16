import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await db('SELECT * FROM "UserExercise"');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching user exercises:', error);
        return NextResponse.error();
    }
}

export async function POST(req) {
    try {
        const { user_id, exersise_name, exersise_description } = await req.json();
        if (!user_id || !exersise_name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await db(
            `INSERT INTO "UserExercise" (user_id, exersise_name, exersise_description) VALUES ($1, $2, $3) RETURNING *`,
            [user_id, exersise_name, exersise_description]
        );
        return NextResponse.json(result[0], { status: 201 });
    } catch (error) {
        console.error('Error creating user exercise:', error);
        return NextResponse.error();
    }
}
