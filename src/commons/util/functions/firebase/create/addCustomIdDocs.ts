import { doc, setDoc } from "firebase/firestore";
import { DB } from "../../../../../../pages/_app";
import { v4 as uuidv4} from 'uuid'

//  collection id를 userUId로 생성 & 하위 컬렉션을 배치
export const addCustomIdDoc = (collection:string,userUID:string,middleCollection:string,Data:any)=>{
    const subcollection = uuidv4()
    setDoc(doc(DB,collection,userUID,middleCollection,subcollection),Data)
    return subcollection
}
