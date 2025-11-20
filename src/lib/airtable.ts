
export interface LeadData {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    message: string;
}

export async function createLead(data: LeadData) {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!apiKey || !baseId || !tableName) {
        throw new Error('Missing Airtable configuration');
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fields: {
                Name: data.name,
                Email: data.email,
                Phone: data.phone,
                'Project Type': data.projectType,
                Message: data.message,
                Status: 'New', // Default status
            },
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Airtable API Error: ${errorData.error?.message || response.statusText}`);
    }

    return await response.json();
}
