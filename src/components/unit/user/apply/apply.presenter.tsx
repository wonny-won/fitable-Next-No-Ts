import Head from 'next/head';
import * as S from './apply.style';
import { ApplyPresenterProps } from "./apply.types";
import { program } from './applyFn/programArr'

export default function ApplyUI(props:ApplyPresenterProps){
    return(
        <>
        <Head>
            <title> 프로그램 신청 | fitable </title>
            <meta charSet="UTF-8" />
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
            <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
            {/* 결제 script */}
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script> 
        </Head>
        <S.TitleWrap>
            <S.Title>APPLY&nbsp;&nbsp;&nbsp;PROGRAM</S.Title>
            <S.TitleImg src='/card.png'/>
        </S.TitleWrap>
        <S.Container>
            {
                program.map((item,index)=>(
                <S.ProgramCard key={index}>
                <S.ProgramTitle><S.ProgramTitleSpan>{item.programTitle}</S.ProgramTitleSpan></S.ProgramTitle>
                <S.ProgramSection>
                <S.GuideTitle> 프로그램을 선택해주세요.</S.GuideTitle>
                    <S.Text>
                        <S.ProgramText><input type="radio" name='program' id={item.item1} onChange={props.onChangeProgram}/> {item.item1}</S.ProgramText> 
                        <S.ProgramText id={item.item1Price}>{item.item1Price}</S.ProgramText>
                    </S.Text>
                    <S.Text>
                        <S.ProgramText ><input type="radio" name='program' id={item.item2} onChange={props.onChangeProgram}/> {item.item2}</S.ProgramText> 
                        <S.ProgramText id={item.item2Price}>{item.item2Price}</S.ProgramText>
                    </S.Text>
                    { item.item3 && 
                        <S.Text>
                            <S.ProgramText><input type="radio" name='program' id={item.item3} onChange={props.onChangeProgram}/>{item.item3}</S.ProgramText> 
                            <S.ProgramText id={item.item3Price}>{item.item3Price}</S.ProgramText>
                        </S.Text> }
                <S.GuideTitle>피드백 받으실 파일을 업로드해주세요.</S.GuideTitle>
                    <S.FileInput type='file' onChange={props.onChangeFile}/>
                    {item.programTitle==='이력서 피드백' && <S.Notification>* 이력서 작성 가이드를 선택하셨다면 업로드 하시지 않으셔도 됩니다.</S.Notification>}
                <S.GuideTitle>원하시는 피드백 방향성이 있으신가요?</S.GuideTitle>
                <S.TextArea rows={5} cols={10} id='userWantFeedbackGuide' onChange={props.onChangeInputs}/>
                </S.ProgramSection>
                <S.SubmitBt id="porfolioFeedback" onClick={props.onClickSubmit}>제출하기</S.SubmitBt>
                <S.Img src='/apply.png'/>
                </S.ProgramCard>
                ))
            }
         </S.Container>
        </>
    )
}