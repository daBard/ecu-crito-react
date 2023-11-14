import { useContext, createContext, useState, useEffect } from "react"

const ContactContext = createContext()
export const useContact = () => useContext(ContactContext)

export const ContactProvider = ({children}) => {

    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform'

    const postContact = async (_user) => {
        const result = await fetch(apiUrl, {
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

    return (
        <ContactContext.Provider value={{postContact}}>
            {children}
        </ContactContext.Provider>
    )
}