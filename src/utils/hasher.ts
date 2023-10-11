import { Md5 } from 'ts-md5'

const publicKey = import.meta.env.VITE_PUBLIC_KEY
const privateKey = import.meta.env.VITE_PRIVATE_KEY

export const createHash = () => {
    const timestamp = Date.now().toString()
    const hash = Md5.hashStr(timestamp + privateKey + publicKey)  
    
    return {
        ts:timestamp,
        hash,
        apikey:publicKey
    }
} 