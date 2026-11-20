"use client";

import { useState } from "react";
import PhotoPicker from "../PhotoPicker/PhotoPicker";
import css from "./UpdateUserForm.module.css";

const UpdateUserForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (formData: FormData) => {
    // const newUserData = new FormData();
    // newUserData.set('firstname', formData.get('firstname') as string)
    // newUserData.set('lastname', formData.get('lastname') as string)
    // newUserData.set('avatar', file)
  };

  return (
    <div className={css["updateUserForm"]}>
      <form action="">
        <input type="text" name="firstname" />
        <input type="text" name="lastname" />

        <PhotoPicker setFile={setFile} />

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
