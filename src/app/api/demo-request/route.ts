import { NextRequest, NextResponse } from 'next/server';

interface DemoRequestData {
    fullName: string;
    email: string;
    companyName: string;
    phone: string;
    solutionInterest: string;
    message: string;
    contactMethod: 'email' | 'phone';
}

export async function POST(request: NextRequest) {
    try {
        const data: DemoRequestData = await request.json();

        // Validate required fields
        if (!data.fullName || !data.email) {
            return NextResponse.json(
                { error: 'Full name and email are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Log the demo request (in production, you'd save to database or send to CRM)
        console.log('Demo Request Received:', {
            fullName: data.fullName,
            email: data.email,
            companyName: data.companyName,
            phone: data.phone,
            solutionInterest: data.solutionInterest,
            contactMethod: data.contactMethod,
            message: data.message,
            timestamp: new Date().toISOString()
        });

        // TODO: Future integrations
        // 1. Send email notification to team
        // 2. Send confirmation email to user
        // 3. Create contact in GHL
        // 4. Store in database

        // For now, return success
        return NextResponse.json(
            {
                success: true,
                message: 'Demo request received successfully'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing demo request:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
