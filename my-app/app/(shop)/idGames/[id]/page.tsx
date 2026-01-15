"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "next/navigation";
import { Header } from "@/app/components/Header/Header";
import { Nav } from "@/app/components/Nav/Nav";
import { IdGame } from "@/app/components/IdGame/IdGame";
import { Item } from "@/app/types/idGame";


export default function IdGamePage() {
    const { id } = useParams<{ id: string }>();

    const [idGames, setIdGames] = useState([]);

    const fetchIdGame = async () => {
        try {
            const response = await axios.get(`/api/idGames/${id}`);
            setIdGames(response.data);
        } catch (error) {
            console.error('Error fetching idGame:', error);
        }
    }

    useEffect(() => {
        if (id) {
            fetchIdGame();
        }
        console.log(idGames);
    }, [id]);

    return (
        <>
            <div className="sticky top-0 z-10">
                <Header />
                <Nav />
            </div>
            <main className="product-grid grid grid-cols-1 px-50 py-10 md:grid-cols-2 xl:grid-cols-3 justify-items-center">

                {idGames.map((idGame: Item) => {
                    return <IdGame key={idGame.id} idGame={idGame} />;
                })}
            </main>

        </>
    );
}
