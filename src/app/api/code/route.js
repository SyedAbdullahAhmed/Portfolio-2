import { NextResponse } from 'next/server';

const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;
const JUDGE0_API_URL = 'https://judge0-ce.p.sulu.sh';

export async function POST(request) {
  try {
    const { code, language } = await request.json();
    
    // Submit code
    const submitResponse = await fetch(`${JUDGE0_API_URL}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JUDGE0_API_KEY}`
      },
      body: JSON.stringify({
        language_id: language === 'python' ? '71' : '63',
        source_code: code
      })
    });

    const { token } = await submitResponse.json();

    // Wait for a second
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get results
    const resultResponse = await fetch(`${JUDGE0_API_URL}/submissions/${token}`, {
      headers: {
        'Authorization': `Bearer ${JUDGE0_API_KEY}`
      }
    });

    const result = await resultResponse.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error running code' },
      { status: 500 }
    );
  }
} 