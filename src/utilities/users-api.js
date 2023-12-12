const BASE_URL = '/api/users';

export async function signUp(userData) {
    const res = await fetch(BASE_URL,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (res.ok){
        const data = await res.json();
        console.log(data);
    }
}