import { Suspense } from 'react';
import { connection } from 'next/server';

async function ServerTime() {
    await connection();
    const time = new Date().toISOString();
    console.log('Это сообщение появится в терминале, а не в браузере');
    return (
        <div>
            <h1>Server Component</h1>
            <p>Время на сервере: {time}</p>
        </div>
    );
}

export default function ServerDemo() {
    return (
        <Suspense fallback={<div>Загрузка времени...</div>}>
            <ServerTime />
        </Suspense>
    );
}