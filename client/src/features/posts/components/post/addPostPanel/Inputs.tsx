import { ChangeEvent } from "react";
import { ButtonRedXs } from "../../../../../components/buttons/ButtonXS/ButtonXS";
import deleteIcon from "../../../../../assets/icons/deleteIcon.svg";

import AddImgIcon from "../../../../../assets/icons/addImgIcon.svg?react";

export const StringInput = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <textarea
      onChange={onChange}
      placeholder={placeholder}
      className="w-[470px] h-[280px] bg-[#101010] rounded-xl text-white p-4 outline-none text-sm"
    ></textarea>
  );
};

export const ImageInput = ({
  onChange,
  imagePreview,
  imageFile,
  removeImagePreview,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
  imageFile?: File;
  removeImagePreview: () => void;
}) => {
  return (
    <div className="w-[470px] h-[280px] bg-[#101010] rounded-xl text-white space-y-3 flex flex-col justify-center items-center text-xs ">
      {imageFile ? (
        <>
          <img
            src={imagePreview!}
            className="w-[145px] rounded-xl max-h-[200px]"
          ></img>
          <span>{imageFile?.name}</span>
          <ButtonRedXs imgPath={deleteIcon} onClick={removeImagePreview} />
        </>
      ) : (
        <>
          <label
            htmlFor="image"
            className="hover:bg-[#171717] h-[75px] w-[170px] rounded-xl flex justify-center items-center cursor-pointer
        transition-all duration-300 ease-in-out font-roboto font-bold text-base space-x-2"
          >
            <span>dodaj obrazka</span>
            <AddImgIcon />
          </label>

          <input
            id="image"
            onChange={onChange}
            placeholder="IMAGE"
            type="file"
            className="hidden"
          ></input>
        </>
      )}
    </div>
  );
};
