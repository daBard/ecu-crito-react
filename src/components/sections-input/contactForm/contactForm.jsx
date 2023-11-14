import React, { useEffect, useState } from 'react'

import { useFormik } from 'formik'

import Button from '../../utilities/button/Button'
import { useContact } from '../../../helper/contactContext'


const contactForm = () => {
    //const nameRegex = /^[a-zA-Z\s\-\*]+$/ //I DON't JUDGE
    const emailRegex = new RegExp(/(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)
    
    const [nameErrorText, setNameErrorText] = useState('')
    const [emailErrorText, setEmailErrorText] = useState('')
    const [messageErrorText, setMessageErrorText] = useState('')
    const [buttonText, setButtonText] = useState('')

    const {postContact} = useContact() // USES CONTEXT

    let errorArray = []

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async () => {
            errorArray = []

            for(let inp in form.values) {
                validationSwitch(inp)
            }

            if (!errorArray.includes(true)) {
                if (await postContact(form.values)) {
                    setButtonText('User created')
                    form.resetForm()
                    setTimeout(() => setButtonText(''), 3500)
                }
            }
        }
    })

    const validationSwitch = (inp) => {
        switch(inp) {
            case 'name':
                if (form.values.name == '') {
                    setNameErrorText('Name is required')
                    errorArray.push(true)
                }
                // I DON'T JUDGE
                // else if (!nameRegex.test(form.values.name)) {
                //     setNameErrorText('Must be a valid name')
                //     errorArray.push(true)
                // }
                break
            case 'email':
                if (form.values.email == '') {
                    setEmailErrorText('Email is required')
                    errorArray.push(true)
                }
                else if (!emailRegex.test(form.values.email)) {
                    setEmailErrorText('Must be a valid email')
                    errorArray.push(true)
                }
                break
            case 'message':
                if (form.values.message == '') {
                    setMessageErrorText('Message is required')
                    errorArray.push(true)
                }
                break
            default:
                console.log("You're not supposed to be here... validationSwitch error")
                errorArray.push(true)
                break
        }
    }

  return (
    <section className="contact-form w-100 m-small">
        <div className="container">
            <form onSubmit={(e) => {
                form.handleSubmit(e)
                //form.resetForm() THIS WORKS
            }} id="contact-form" noValidate>
                <fieldset>
                    <legend><h2>Leave us a message for any information.</h2></legend>
                    <label htmlFor="name" className={ nameErrorText != '' ? 'error shake' : ''}>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name*" 
                            onChange={(e) => {
                                form.handleChange(e)
                                setNameErrorText('')
                                }} 
                            value={form.values.name} 
                        />
                        <i className="icon"></i>
                        <div className='error-text'>{nameErrorText}</div>
                    </label>
                    <label htmlFor="email" className={ emailErrorText != '' ? 'error shake' : ''}>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email*" 
                            onChange={(e) => {
                                form.handleChange(e)
                                setEmailErrorText('')
                            }} 
                            value={form.values.email} 
                        />
                        <i className="icon"></i>
                        <div className='error-text'>{emailErrorText}</div>
                    </label>
                    <label htmlFor="message" className={ messageErrorText != '' ? 'error shake' : ''}>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Your message*" 
                            onChange={(e) => {
                                form.handleChange(e)
                                setMessageErrorText('')
                                }} 
                            rows="4" 
                            value={form.values.message}>
                        </textarea>
                        <i className="icon top"></i>
                        <div className='error-text'>{messageErrorText}</div>
                    </label>
                    <Button type="submit" form="contact-form" value="Send message" color="color" title="Send message" />
                    <div className={buttonText != '' ? 'btn-text active' : 'btn-text'}>{buttonText}</div>
                </fieldset>
            </form>
        </div>
    </section>
  )
}

export default contactForm