import UseModalUI from './modal.presenter';
import { Modalcontainer } from './modal.types';
import { useRouter } from 'next/router';

export default function UseModal(props: Modalcontainer){
  const router = useRouter()

  const handleCancel = () => {
    if(props.setIsModalOpen){ props?.setIsModalOpen(false); }
  };
  return <UseModalUI isModalOpen={props.isModalOpen}
                     handleCancel={handleCancel}
                     program={props.program}
                     reviewId={props.reviewId}
                     menuTitle={props.menuTitle}
                     applyId={props.applyId}/>
};

