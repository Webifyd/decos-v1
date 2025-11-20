import { NextResponse } from 'next/server';
import { createLead, LeadData } from '@/lib/airtable';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, projectType, message } = body;

        // Basic validation
        if (!name || !email || !projectType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const leadData: LeadData = {
            name,
            email,
            phone: phone || '',
            projectType,
            message: message || '',
        };

        await createLead(leadData);

        return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });
    } catch (error: any) {
        console.error('Error submitting quote:', error);
        return NextResponse.json(
            { error: 'Failed to submit quote request. Please try again later.' },
            { status: 500 }
        );
    }
}
