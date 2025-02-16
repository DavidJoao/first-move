import axios from "axios"

export const sendData = async (data) => {
    try {
        const response = await axios.post("/api/sendData", { data }, { headers: { "Content-Type":"application/json" } })
        return response;
    } catch (error) {
        return error;
    }
}