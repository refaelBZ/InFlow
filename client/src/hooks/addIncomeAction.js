'use server';

export async function addIncomeAction(incomeData) {
    const response = await fetch('http://localhost:5000/income', {
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
