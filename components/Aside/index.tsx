import React from 'react';
import Image from 'next/image';
import ListIcon from '@/assets/aside/list2.svg';
import MenuIcon from '@/assets/aside/menu.svg';
import HomeIcon from '@/assets/aside/home.svg';
import './style.css'

export default function Aside() {
  return (
    <nav className='flex h-full flex-col gap-[46px] items-center px-[20px] py-[50px]'>
        <li>
            <button>
                <Image src={MenuIcon} alt='menu icon' height={20}/>
            </button>
        </li>
        <li>
            <button>
                <Image src={HomeIcon} alt='home icon' height={30}/>
            </button>
        </li>
        <li>
            <button>
                <Image src={ListIcon} alt='list icon' height={30}/>
            </button>
        </li>
    </nav>
  )
}
