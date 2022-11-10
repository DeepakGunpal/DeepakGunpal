import axios from 'axios'

class FileUpload {
    async create(formData) {
        const url = 'http://localhost:4000/upload';
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        const result = await axios.post(url,  formData)
        return result
    }
}

export default new FileUpload()