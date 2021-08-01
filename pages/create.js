import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";

function Create() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  async function onChange(e) {
    console.log("on change");
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    console.log(file);
  }

  return (
    <div>
      <Navbar />
      <h1 className='page-heading'>Lets Create</h1>
      <div className='create-box'>
        <div className='image-holder'>
          {fileUrl && (
            <img className='rounded mt-4' width='350' src={fileUrl} />
          )}
          <input
            type='file'
            name='Asset'
            className='my-4 upload-btn'
            onChange={onChange}
          />
          <p>JPEG, MP4, PNG, GIF. Max 50 MB.</p>
        </div>
        <div className='input-fields'>
          <input placeholder='Name' className='mt-8 border rounded p-4' />
          <textarea
            placeholder='Description'
            className='mt-2 border rounded p-4'
          />
          <input
            placeholder='Price in Matic'
            className='mt-2 border rounded p-4'
          />
          <Link href='/homepage'>
            <button className='save-btn'>Save Changes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Create;
