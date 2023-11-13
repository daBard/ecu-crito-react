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

export async function createNewUser(_user) {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(_user)
    })

    switch(true) {
        case (result.status >= 200 && result.status <= 299):
            console.log(`Message posted - ${result.status}`)
            return (result.ok)
            break
        case (result.status >= 400 && result.status <= 499):
            console.log(`User error - ${result.status}`)
            break
        case (result.status >= 500 && result.status <= 599):
            console.log(`Server error - ${result.status}`)
            break
        default:
            console.log(`Unknown error - ${result.status}`)
    }
}