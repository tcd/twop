import axios from "axios"

const JsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/users"

export const exampleRequest = async () => {
    try {
        const response = await axios.get(JsonPlaceholderUrl)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}
