import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories , setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Hunter']);
    // }

    return (
        <div>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category  => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </div>
    )
}
