import { Hono } from "hono";
import { Env } from './core-utils';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    const contactSchema = z.object({
        name: z.string().min(2),
        phone: z.string().min(10),
        projectName: z.string().min(2),
        aboutProject: z.string().min(10),
    });
    app.post('/api/contact', zValidator('json', contactSchema), async (c) => {
        const body = c.req.valid('json');
        try {
            const emailPayload = {
                from: 'Portfolio Contact Form <onboarding@resend.dev>',
                to: ['jaswant5511246@gmail.com'],
                subject: `New Project Inquiry: ${body.projectName}`,
                html: `
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${body.name}</p>
                    <p><strong>Phone:</strong> ${body.phone}</p>
                    <p><strong>Project Name:</strong> ${body.projectName}</p>
                    <p><strong>About Project:</strong></p>
                    <p>${body.aboutProject}</p>
                `,
            };

            const resendApiKey = c.env.RESEND_API_KEY;
            if (!resendApiKey) {
                console.error('RESEND_API_KEY is not set in environment variables.');
                return c.json({ success: false, error: 'Server configuration error.' }, 500);
            }

            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${resendApiKey}`,
                },
                body: JSON.stringify(emailPayload),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error('Failed to send email:', response.status, errorBody);
                return c.json({ success: false, error: 'Failed to send message.' }, 500);
            }

            return c.json({ success: true, message: 'Message received successfully!' });
        } catch (error) {
            console.error('Error processing contact form:', error);
            return c.json({ success: false, error: 'An unexpected error occurred.' }, 500);
        }
    });
}