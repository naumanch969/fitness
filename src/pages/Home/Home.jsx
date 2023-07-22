import { useState } from "react"
import Categories from "./Categories"
import Hero from "./Hero"
import Exercises from "./Exercises"

const Home = () => {




    return (
        <div className="flex flex-col md:gap-[2rem] " >
            <Hero />
            <div className="flex flex-col " >
                <Categories />
                <Exercises />
            </div>
        </div>
    )
}

export default Home
