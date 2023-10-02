'use client'
import './style.css'
import React, { useState } from 'react';
import Image from 'next/image';
import UploadIcon from '@/assets/Upload/uploadIcon.svg';
import CrossIcon from '@/assets/Form/cross.svg';


export default function Upload() {
    const [img, setImg] = useState(null);
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>): void {
        if(!event.target.files) return;

        const file = event.target.files[0];
        
        if(file) {
            const reader = new FileReader();
            reader.onload = (e:any) => {
                setImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }  
    }

    return (
        <div>
            {img ? <Image src={img} alt='uploaded image' width={200} height={80}/> : 
            <label htmlFor='uploadFile' className='uploadLabel'>
                <Image src={UploadIcon} alt='upload icon'/>
                <h3 className='font-bold'>Upload cover image</h3>
                <p>
                    16:9 ratio is recommended. Max image size 1mb
                </p>
            </label>}
            <input className="hidden" type='file' id='uploadFile' onChange={handleFileUpload}/>
            {img && <div className='bg-white pt-2 pb-0'>
                <button className='text-red-800 text-bold flex text-sm items-center gap-2' onClick={()=>{
                    setImg(null)
                }}>
                    <Image src={CrossIcon} alt='' height={30}/>
                    Delete & Re-upload
                </button>
            </div>}
        </div>
    )
}
