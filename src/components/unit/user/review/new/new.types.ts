import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface NewReview{
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickBtSubmit: (data: any) => void;
    onClickGetProgramValue: (e: ChangeEvent<HTMLInputElement>) => void;
    setImageUrl: Dispatch<SetStateAction<string>>;
}