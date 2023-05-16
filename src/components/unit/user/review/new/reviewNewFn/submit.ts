import { UploadFiles } from "../../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"
import { createNewReviewMutation } from "./createNewReviewQuery"

interface Params {
    userId: string|undefined|string[],
    program:string|undefined|string[],
    files: File[];
    starValue: number;
    writer: string|undefined|string[];
    writerProfile: string|undefined|string[];
}

// 리뷰 등록 함수
export const useSubmitReview = ({userId,program,files,starValue,writer,writerProfile}:Params)=> {
    const submitresult = createNewReviewMutation()
    const onClcickSubmitReview = async(data:any)=>{
        const reviewData={...data,userId,program,starValue,writer,writerProfile,likeCount:0,dislikeCount:0}
        if(files.length>0) {
            const uploadImg = await UploadFiles('/newReview',files)
            const fileURL = uploadImg?.map((item)=>item.fullPath)
            const fileName = uploadImg?.map((item)=>item.name)
            reviewData.fileURL = fileURL
            reviewData.fileName = fileName
        } else{
            reviewData.fileURL = '등록된 파일이 없습니다.'
        }
        try{
            await submitresult.mutate(reviewData)
            alert('리뷰 등록이 완료되었습니다.')
        }catch(error){
            alert(error)
        }
    }
    return onClcickSubmitReview
}