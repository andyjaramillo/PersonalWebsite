import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        const title = request.query.title as string;
        const content = request.query.content as string;
        const count = await sql`SELECT * FROM blog_post;`;
        if (!title || !content) throw new Error('Pet and owner names required');
        await sql`INSERT INTO blog_post (title, content, Date_posted, User_Id) VALUES (${title}, ${content}, ${Date().toLocaleString()}, ${count.rowCount + 1});`;
    } catch (error) {
        return response.status(500).json({ error });
    }

    const pets = await sql`SELECT * FROM blog_post;`;
    return response.status(200).json({ pets });
}