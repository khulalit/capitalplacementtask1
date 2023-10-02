import Image from "next/image";
import EditIcon from '@/assets/Form/edit.svg';
import EditQuestion from "@/components/EditQuestion";
import { QUESTION_LABELS_TYPE, QUESTION_TYPES_REV } from "@/constants/form";
import { useContext, useState } from "react";
import CrossIcon from '@/assets/Form/cross.svg';
import { PostData } from "@/utils/Postdata";
import { useDataContext } from "@/context/Formcontext";

export default function SpecialQuestion({ question, varient }: any) {
    const [isOpen, setOpen] = useState(false);
    const {data, metadata} = useDataContext();

    const handleSave = ()=>{
        PostData(data, metadata)
    }
    console.log('Edit state is ', isOpen)
    return (
        question.map((_question: any) =>
            <div className="pb-[25px] border-b-[1px]  border-gray-400" key={_question.id}>
                <span className="text-sm text-[#979797]">{_question.type}</span>
                <div className="flex gap-4">
                    <p className="flex-1 text-md font-bold text-justify">{_question.question}</p>
                    <button className="w-[30px] pt-2 flex items-start" type="button" onClick={() => { setOpen(!isOpen) }}>
                        <Image src={EditIcon} alt="edit icon" height={18} />
                    </button>
                </div>
                {isOpen && <>
                    <EditQuestion question={_question} quesId={_question} varient={varient} type={QUESTION_TYPES_REV[QUESTION_LABELS_TYPE[_question.type.toLowerCase()]]} />
                    <div className='w-full flex justify-between py-4 px-4'>
                        <button className='flex items-center text-red-800 font-bold' onClick={()=>{}}>
                            <Image src={CrossIcon} alt='cross' />
                            Delete Question
                        </button>
                        <button className='font-bold text-white bg-green-800 px-4 rounded-lg' type="button" onClick={handleSave}>
                            Save
                        </button>
                    </div>

                </>}
            </div>
        )
    )
}
