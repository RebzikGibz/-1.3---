'use server';
import { connection } from 'next/server';

export async function greet(name: string) {
    await connection();
    const timestamp = new Date().toISOString();
    return `Привет, ${name}! Время на сервере: ${timestamp}`;
}