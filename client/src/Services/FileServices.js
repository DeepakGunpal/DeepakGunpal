<<<<<<< HEAD
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
=======
// import axios from  'axios'
// const url = 'http://localhost:4000/';


// class FileUpload {
//     async create (formData) {
   
//          const response = await axios.post(url+'upload', formData)
//          return response
//      }
//  }
//  export default new FileUpload()
>>>>>>> 03eeb6028d994157da799f106a39fc4d1d151a04
