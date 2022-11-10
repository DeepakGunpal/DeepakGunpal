import axios from 'axios';
import { saveAs } from 'file-saver';

const apiURL = 'http://localhost:4000/'


export const singleFile = async (data) => {
    try {
        await axios.post(apiURL + 'upload', data)

    } catch (error) {
        throw error

    }
}

export const getFiles = async () => {
    try {
        const { data } = await axios.get(apiURL + 'getFiles')
        return data;

    } catch (error) {
        throw error;

    }

}

export const download = async () => {
    try {
        console.log('download executed');
        const res = await axios.get(apiURL + 'download', { responseType: 'blob' })
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'download.jpg');

    } catch (error) {
        throw error;
    }
}
