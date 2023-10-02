import Image from "next/image";
import EditIcon from '@/assets/Form/edit.svg';
import EditQuestion from "@/components/EditQuestion";
import { QUESTION_LABELS_TYPE, QUESTION_TYPES_REV } from "@/constants/form";

export default function AdditionalQuestion({ question, onEdit, edit, type}: any) {
    console.log(question, type)
    return (
        <div className="pb-[25px] border-b-[1px] border-gray-400">
            <span className="text-sm text-[#979797]">{question.type}</span>
            <div className="flex gap-4">
                <p className="flex-1 text-md font-bold text-justify">{question.question}</p>
                <button className="w-[30px] pt-2 flex items-start" type="button" onClick={()=>{onEdit(!edit)}}>
                    <Image src={EditIcon} alt="edit icon" height={18} />
                </button>
                
            </div>
            {edit && <EditQuestion question={question} quesId={question.id} varient={type} type={QUESTION_TYPES_REV[QUESTION_LABELS_TYPE[question.type.toLowerCase()]]} />}
        </div>
    )
}