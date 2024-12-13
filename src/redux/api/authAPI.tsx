const API_URL = 'http://localhost:3000/users';

export const registerAPI = async (data: object) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to register');
    return response.json();
};

export const loginAPI = async (email: string) => {
    const response = await fetch(`${API_URL}?email=${email}`);
    const users = await response.json();
    if (users.length === 0) throw new Error('User not found');
    return users[0];
};
