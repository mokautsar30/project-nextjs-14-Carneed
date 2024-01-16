'use server'


import { Product } from "@/db/models/products";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function removeWishlist(id: number) {
    const res = await fetch('http://localhost:3001/products/' + id, {
        method: 'DELETE'
    })

    const result = await res.json()
    console.log(result);
    
}

export async function handleLogout() {
    cookies().delete("Authorization")
    cookies().delete("Username")
    redirect("/login")
}


export async function fetchProducts(page: number, perPage: number): Promise<Product[]> {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?page=${page}&per_page=${perPage}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        const products = data.data || [];


        return products as Product[];
    } catch (error) {
        console.error("Error fetching data", error);

        return [];
    }
}