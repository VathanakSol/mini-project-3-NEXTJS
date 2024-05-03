"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Spinner } from "flowbite-react";

interface Product {
    price: number;
    description: string;
    image: string | undefined;
    id: number;
    title: string;
}

// const ENDPOINT = "https://store.istad.co/";
const ENDPOINT = "https://fakestoreapi.com/products";
// const ENDPOINT = "https://store.istad.co/api/products/";
const ITEMS_PER_PAGE = 4;

export const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${ENDPOINT}?_page=${currentPage}&_limit=${ITEMS_PER_PAGE}`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);

                const totalCountResponse = await fetch(ENDPOINT);
                const totalCountData = await totalCountResponse.json();
                const totalCount = totalCountData.length || 0;
                setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mr-3"></div>
            <div className="text-2xl">Loading...</div>
        </div>
        );
    }

    return (
        <div className="container mx-auto px-8 py-4">
            {loading ? (
                <div className="flex flex-wrap items-center gap-2 h-screen justify-center">
                    <h1>Loading</h1>
                    <Spinner aria-label="Large spinner example" size="lg" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.isArray(products) && products.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map(product => (
                        <div key={product.id} className="bg-gray-100 rounded p-4">
                            <img src={product.image} alt={product.title} className="mx-auto w-48 h-48 object-cover" />
                            <div className="flex flex-col justify-between h-[25vh]">
                                <div>
                                    <h2 className="text-center text-lg text-black font-semibold mt-2">{product.title}</h2>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-blue-500 text-center font-semibold mt-2">${product.price.toFixed(2)}</p>
                                    <button className="bg-gray-800 px-2 rounded-md text-gray-100">Detail</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md focus:bg-gray-800 focus:text-gray-100 ${currentPage === i + 1 ? 'bg-gray-800' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <p>Page {currentPage} of {totalPages}</p>
            </div>

            <div className="flex justify-center mt-8">
                {currentPage > 1 && (
                    <button onClick={handlePreviousPage} className="mr-4 bg-gray-800 text-gray-100 hover:opacity-80 transition-all ease-in-out px-4 py-2 rounded-md">
                        Previous
                    </button>
                )}
                {currentPage < totalPages && (
                    <button onClick={handleNextPage} className="bg-gray-800 hover:opacity-80 text-gray-100 transition-all ease-in-out px-4 py-2 rounded-md">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};
