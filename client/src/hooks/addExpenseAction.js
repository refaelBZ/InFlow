'use server';

export async function addExpenseAction(expenseData) {
    const response = await fetch('http://localhost:5000/expense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'שגיאה בלתי צפויה');
    }

    return await response.json();
}
