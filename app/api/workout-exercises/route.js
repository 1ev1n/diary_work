import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await db('SELECT * FROM "WorkoutExersise"');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching workout exercises:', error);
        return NextResponse.error();
    }
}

export async function POST(req) {
    try {
        const { def_exersise_id, user_exersise_id, workout_id, number_of_sets } = await req.json();
        if (!def_exersise_id || !workout_id || !number_of_sets) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await db(
            `INSERT INTO "WorkoutExersise" (def_exersise_id, user_exersise_id, workout_id, number_of_sets)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [def_exersise_id, user_exersise_id, workout_id, number_of_sets]
        );
        return NextResponse.json(result[0], { status: 201 });
    } catch (error) {
        console.error('Error creating workout exercise:', error);
        return NextResponse.error();
    }
}
