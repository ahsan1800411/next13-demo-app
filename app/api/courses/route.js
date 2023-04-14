import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET() {
    return NextResponse.json(courses);
}


// This is how we  do a POST request in Nextjs 13
export async function POST(request) {
    const { title, description, level, link } = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    };

    courses.push(newCourse);

    return NextResponse.json(courses);
}
