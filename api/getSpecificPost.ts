import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        console.error("made it here")
        const result = await sql`SELECT * FROM blog_post WHERE id=${request.query.toLocaleString()};`;
        const rows = result.rows
        return response.status(200).json({ rows });
    } catch (error) {
        return response.status(500).json({ error });
    }
}