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

async function main() {
    await exampleRequest()
    // process.exit(0)
}

(async () => {
    main()
        .then((res) => {
            console.log(res)
            process.exit(0)
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
})()
