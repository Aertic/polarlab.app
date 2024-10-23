'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import discordLogin from '@lib/auth/sessionManagement/discordLogin';
import { useRouter } from 'next/navigation';
import { triggerToast } from '@/components/core/toastNotifications';

export default function Page() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const router = useRouter();
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    useEffect(() => {
        async function handleLogin() {
            if (code && !hasLoggedIn) {
                setHasLoggedIn(true);
                try {
                    const res = JSON.parse(await discordLogin(code));
                    triggerToast(res.h, res.d, res.c);
                    if (res.s == true) {
                        router.push('/personal');
                    } else {
                        router.push('/login');
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                    router.push('/login');
                }
            } else {
                router.push('/login');
            }
        }
        handleLogin();
    }, [code, router, hasLoggedIn]);

    return (
        <>
            <h1>Please Wait...</h1>
            <p>Please wait while we log you in...</p>
        </>
    );
}
