'use client';
import { insImgFour, insImgOne, insImgThree, insImgTwo, } from "@/public";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PageProps {
    params : {name: string};
}
const Page: React.FC<PageProps> =  ({ params }) => {
    const { name } =  params;
    const [selectedImg, setSelectedImg] = useState<string | ''>('');

    useEffect(() => {
        const handleImg = async (name: string) => {
            const img = name == 'Nature' ?  insImgOne : name == 'Urban' ? insImgTwo : name == 'Photography' ? insImgThree : name == 'Motion' ? insImgFour : '';
            setSelectedImg(img);
        }
        handleImg(name);
      }, [name])

  return (
    <div className='relative flex justify-center items-center max-w-full min-h-fit'>
        <h1 className='text-9xl font-semibold shadow-2xl blur-sm absolute top-[50%] z-10'>{name}</h1>
        <Image src={selectedImg} width={500} height={100} alt="" className="w-full max-h-full bg-cover bg-center bg-no-repeat" />
    </div>
  )
}

export default Page
