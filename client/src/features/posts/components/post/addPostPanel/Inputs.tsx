import { ChangeEvent } from "react";
import { ButtonRedXs } from "../../../../../components/buttons/ButtonXS/ButtonXS";

import AddImgIcon from "../../../../../assets/icons/addImgIcon.svg?react";
import DeleteIcon from "../../../../../assets/icons/deleteIcon.svg?react";

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
      className="w-full h-[280px] bg-[#101010] rounded-xl text-white p-4 outline-none text-sm"
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
    <div className="w-full h-[280px] bg-[#101010] rounded-xl text-white space-y-3 flex flex-col justify-center items-center text-xs ">
      {imageFile ? (
        <>
          <img
            src={imagePreview!}
            className="rounded-xl max-h-[150px] max-w-[300px] object-fill"
          ></img>
          <span>{imageFile?.name}</span>
          <ButtonRedXs icon={<DeleteIcon />} onClick={removeImagePreview} />
        </>
      ) : (
        <>
          <label
            htmlFor="image"
            className="hover:bg-[#171717] h-[75px] w-[170px] rounded-xl flex justify-center items-center cursor-pointer
        transition-all duration-300 ease-in-out font-arial text-sm space-x-2"
          >
            <span>dodaj obrazka</span>
            <AddImgIcon />
          </label>

          <input
            id="image"
            accept="image/*"
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
