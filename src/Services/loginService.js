import axios from "axios"

async function loginService (username, password) {
     return await axios.get(`ApiLogin/dang_nhap?user=${username}&pass=${password}`)
}

export default loginService