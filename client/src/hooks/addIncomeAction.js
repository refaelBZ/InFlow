'use server';

export async function addIncomeAction(incomeData) {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${BASE_URL}/income`, {           
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(incomeData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'שגיאה בלתי צפויה');
    }

    return await response.json();
}
