import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Num() {
    const [inputvalue, setinputvalue] = useState({ firstvalue: "", secondvalue: "", thirdvalue: "" })

    const handleSubmit = (e) => {
        const { name, value } = e.target
        setinputvalue({ ...inputvalue, [name]: value })
    }
    const submitValue = (e) => {
        e.preventDefault()
        const serviceID = "service_qqcqc6t";
        const templateID = "template_wkvwxp9";
        const userID = "q2_RxnxEOd_UfttSm";
        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log("Email successfully sent!", result.text);

            }, (error) => {
                console.error("Email failed to send!", error.text);
            });
        Swal.fire({
            title: "Good job!",
            text: "Your task has been added !",
            icon: "success"
        });

        setinputvalue({ firstvalue: "", secondvalue: "", thirdvalue: "" })
    }



    return (
        <>
            <div className="  min-vh-100 d-flex justify-content-center align-items-center flex-column  ">
                <h3 className=' top-heading text-uppercase '>E-mail JS</h3>
                <div className=" outer-box">
                    <h2 className=' head-top font-monospace mb-3'>Sign Up</h2>
                    <form onSubmit={submitValue}>
                        <div className="d-flex gap-2 ">
                            <input type="text" value={inputvalue.firstvalue} name='firstvalue' className=' input-box' required onChange={handleSubmit} placeholder="First Name" />
                            <input type="text" value={inputvalue.secondvalue} name='secondvalue' className=' input-box' required onChange={handleSubmit} placeholder="Last Name" />
                        </div>
                        <input type='text' value={inputvalue.thirdvalue} name='thirdvalue' className=' email-box mt-3' required onChange={handleSubmit} placeholder="About" />
                        <div className=""><button className='sub-btn font-monospace text-uppercase  mt-3 '>submit</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Num