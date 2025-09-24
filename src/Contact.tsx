import React from "react";

// Create a section with title "Contant". Use Tainlwind CSS for styling. Include a form with fields for name, email, phone number, and message.
export default function Contact() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [message, setMessage] = React.useState('');

    // State items to store error messages
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [phoneNumberError, setPhoneNumberError] = React.useState('');
    const [messageError, setMessageError] = React.useState('');

    // State items to sore form is valid
    const [isFormValid, setIsFormValid] = React.useState(false);

    // function to validate the form fields and set the isFormValid state. The form is valid if all fields are non-empty and there are no error messages. If the fields are empty, set the corresponding error message. check this only when the user tries to submit the form.
    const validateForm = () => {
        if (name && email && phoneNumber && message && !nameError && !emailError && !phoneNumberError && !messageError) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
            if(!name){
                setNameError('Name is required');
            }
            if(!email){
                setEmailError('Email is required');
            }
            if(!phoneNumber){
                setPhoneNumberError('Phone number is required');
            }
            if(!message){
                setMessageError('Message is required');
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 mt-16">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-lg font-medium mb-1" htmlFor="name">Name</label>
                    <input className="w-full border border-gray-300 p-2 rounded" type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => {
                        setName(e.target.value);
                        // Regex to check if the name contains only letters and spaces
                        const nameRegex = /^[a-zA-Z\s]*$/;
                        if (nameRegex.test(e.target.value)) {
                            setNameError('');
                        } else {
                            setNameError('Name can only contain letters and spaces');
                        }
                    }} />
                    {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1" htmlFor="email">Email</label>
                    <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => {

                        // Regex to check if the email is valid
                        setEmail(e.target.value);
                        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        if (emailRegex.test(e.target.value)) {
                            setEmailError('');

                        } else {
                            setEmailError('Invalid email address');
                        }
                    }} />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1" htmlFor="phone">Phone Number</label>
                    <input className="w-full border border-gray-300 p-2 rounded" type="tel" id="phone" name="phone" placeholder="Your Phone Number" value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        // Regex to check if the phone number is valid
                        const phoneRegex = /^[0-9]{10}$/;
                        if (phoneRegex.test(e.target.value)) {
                            setPhoneNumberError('');
                        } else {
                            setPhoneNumberError('Invalid phone number');
                        }
                    }} />
                    {phoneNumberError && <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>}
                </div>
                <div>
                    <label className="block text-lg font-medium mb-1" htmlFor="message">Message</label>
                    <textarea className="w-full border border-gray-300 p-2 rounded" id="message" name="message" rows={4} placeholder="Your Message" value={message} onChange={(e) => {
                        setMessage(e.target.value);
                        if (e.target.value.trim() === '') {
                            setMessageError('Message is required');
                        } else {
                            setMessageError('');
                        }
                    }}></textarea>
                    {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit" onClick={(e)=>{
                    e.preventDefault();
                    validateForm();
                    if(isFormValid){
                        alert('Form submitted successfully');
                        //clear the form
                        setName('');
                        setEmail('');
                        setPhoneNumber('');
                        setMessage('');
                    }
                    
                }}>Send Message</button>
            </form>
        </div>
    )
}