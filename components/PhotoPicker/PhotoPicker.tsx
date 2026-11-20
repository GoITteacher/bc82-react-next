"use client";
import { ChangeEvent, useState } from "react";
import css from "./PhotoPicker.module.css";
import Image from "next/image";
interface Props {
  setFile: (file: File) => void;
}
const PhotoPicker = ({ setFile }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setError(null);

    if (!e.target.files?.length) {
      setError("Файл не обрано. Оберіть файл");
      return;
    }

    const file = e.target.files[0];

    console.log(file);

    if (!file.type.startsWith("image/")) {
      setError("Invalid format!");
      return;
    }

    setFile(file);

    //!=========================================
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    //!=========================================

    const reader = new FileReader();

    reader.onload = (reader) => {
      console.log(reader.target?.result);
      const url = (reader.target?.result as string) || null;
      setPreviewUrl(url);
    };

    reader.readAsDataURL(file);

    //!=========================================

    // console.log(previewUrl);
  };

  /* const handleClick = () => {
    const inputElem = document.createElement("input");
    inputElem.setAttribute("type", "file");
    inputElem.addEventListener("change", (e) => {
      setError(null);

      if (!e.target.files?.length) {
        setError("Файл не обрано. Оберіть файл");
        return;
      }

      const file = e.target.files[0];

      console.log(file);

      if (!file.type.startsWith("image/")) {
        setError("Invalid format!");
        return;
      }

      setFile(file);

      //!=========================================
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      //!=========================================

      const reader = new FileReader();

      reader.onload = (reader) => {
        console.log(reader.target?.result);
        const url = (reader.target?.result as string) || null;
        setPreviewUrl(url);
      };

      reader.readAsDataURL(file);
    });
    inputElem.click();
  }; */

  return (
    <div className={css["photoPicker"]}>
      {/* <button type="button" onClick={handleClick}>
        +
      </button> */}
      <input type="file" onChange={handleFileChange} multiple />

      {!error && previewUrl && (
        <Image src={previewUrl} alt="preview avatar" width={300} height={300} />
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default PhotoPicker;
