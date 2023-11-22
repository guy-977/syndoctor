'use client'
import React, { useState } from 'react'
import Nav from "@/components/Nav"
import ModelView from '@/components/Model'


export default function Upload(){
    const [filePath, setFilePath] = useState('')


    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setFilePath(file.name)
        } else {
            setFilePath('No file chosen')
        }
    };
    


    return(
        <div>
            <Nav />
            <main className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold p-4">Upload DICOM page</h1>
                <input type="file" accept=".zip, .dcm" className="p-4" onChange={handleFileChange}></input>
                <p>{filePath}</p>
                {/* {gltfData ? (<ModelView gltfData={gltfData}/>) : <p>Upload a zipped file contains .gltf and .bin files</p>} */}
                <ModelView />
                
            </main>
        </div>
    )
}