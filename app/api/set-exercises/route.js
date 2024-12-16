import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await db('SELECT * FROM "SetExersise"');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching sets:', error);
        return NextResponse.error();
    }
}

export async function POST(req) {
    try {
        const { id_workout_exersise, repetitions, weight, set_number } = await req.json();
        if (!id_workout_exersise || !repetitions || !weight || !set_number) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await db(
            `INSERT INTO "SetExersise" (id_workout_exersise, repetitions, weight, set_number)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [id_workout_exersise, repetitions, weight, set_number]
        );
        return NextResponse.json(result[0], { status: 201 });
    } catch (error) {
        console.error('Error creating set exercise:', error);
        return NextResponse.error();
    }
}
