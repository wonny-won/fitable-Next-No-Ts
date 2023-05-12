import { onClickPayment } from "../../../../../commons/util/functions/payments"
import { useRoutingPageHooks } from "../../../../../commons/util/hooks/routing"
import { UploadFiles } from "../../../../../commons/util/functions/firebase/uploadFiles/uploadFiles"

export const onClickApplySubmit = (inputs:any,program:any,file:File[])=> {
    const routerhooks = useRoutingPageHooks()
    return async () => {
            alert('결제 후 프로그램을 신청하시하시겠습니까?')
            const data = {...inputs,program}
            if(file){
                const fileURL:any[] = []
                fileURL.push(file[file.length-1])
                const uploadfile = await UploadFiles('/applyFile',fileURL)
                const allFileURL = uploadfile?.map((item)=>item.fullPath)
                data.fileURL = allFileURL
            }
            try{
                const paymentResult = await onClickPayment(data)()
                if(paymentResult==="결제완료")routerhooks('/mypage')()    
            }catch(error){
                alert(error)
            }
    }
}
