import React, {useState} from 'react'
import  FileServices from '../../Services/FileServices'
import './UploadFile.css'
import {singleFile} from '../../data/api'

// ,getUploadedFiles

export default function UploadFile() {
    const [file, setFile] = useState('')

    const handleSubmit = async(event)=>{
        event.preventDefault()

        const formData = new FormData()
        formData.append('file', file)

        const response = await FileServices.create(formData)
        console.log(response)

        event.target.reset()

    }


  return (
    <div className='file-uploader-box'>
      <h1 className='heading'>File Uploader</h1>
        <form className ='form' onSubmit={handleSubmit}>
            <input type="file" name='file' onChange={event => setFile(event.target.files[0])} required/>
        <button type='button' className="btn-primary">Upload</button>
        </form>
    </div>
  )
}
