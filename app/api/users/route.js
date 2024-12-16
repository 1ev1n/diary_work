import { db } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const result = await db('SELECT * FROM "User"');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.error();
    }
}

export async function POST(req) {
    try {
        const { name_user, registration_date } = await req.json();
        if (!name_user || !registration_date) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await db(
            `INSERT INTO "User" (name_user, registration_date) VALUES ($1, $2) RETURNING *`,
            [name_user, registration_date]
        );
        return NextResponse.json(result[0], { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.error();
    }
}
