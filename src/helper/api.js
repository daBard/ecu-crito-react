const apiUrl = 'https://win23-assignment.azurewebsites.net/api'

export async function getData() {
    const result = await fetch(`${apiUrl}/articles`)
    const data = await result.json()
    return data
}

export async function getDataById(_id) {
    const result = await fetch(`${apiUrl}/articles/${_id}`)
    const data = await result.json()
    return data
}