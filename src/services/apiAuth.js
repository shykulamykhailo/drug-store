import supabase from './supabase';

export async function signup({ fullName, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //     data: {
        //         fullName,
        //         avatar: '',
        //     },
        // },
    });
    if (error) throw new Error(error.message);

    return data;
}

export async function login({ email, password }) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data;
}

export async function loginGoogle() {
    // Аутентифікація через Google
    let { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:5173/auth/callback',
        },
    });

    if (error) throw new Error(error.message);

    // Отримуємо поточну сесію
    const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
    if (sessionError) throw new Error(sessionError.message);

    // Отримуємо дані користувача
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError) throw new Error(userError.message);

    // Повертаємо і сесію, і користувача

    return {
        session: sessionData.session,
        user: userData.user,
    };
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.getUser();

    if (error) throw new Error(error.message);
    console.log('from get current user');
    return data?.user;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}
