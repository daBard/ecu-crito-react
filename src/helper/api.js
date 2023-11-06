const apiUrl = 'https://win23-assignment.azurewebsites.net/api'

export async function getData() {
    const result = await fetch(`${apiUrl}/articles`)
    const data = await result.json()
    return data
}

export function other() {
    console.log('Din mamma')
    return "Ditt blåbär"
}