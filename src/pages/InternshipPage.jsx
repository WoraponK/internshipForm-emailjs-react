import React, { useRef} from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

const InternshipPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wukuanq', 'template_zof2q8l', form.current, 'MgTzToHw18e54SFSM')
    .then((result) => {
        Swal.fire({
          title: 'Sent Email Successfully',
          icon: 'success'
        }).then(res => {
          window.location.reload();
        })

    }, (error) => {
      Swal.fire({
        title: 'Sent Email Failed',
        icon: 'error'
      })
    });
  }


  return (
    <div className='grid place-items-center'>
      <div className='w-1/2 py-8'>
        <h1 className='uppercase text-2xl text-center'>We are <span className='text-primary font-bold'>Hiring</span><br />Internship Students</h1>
        <div>
          <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 w-full space-y-4'>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>Name</span>
              </div>
              <input
                id='user_name'
                type="text"
                name='user_name'
                className='input input-bordered'
                placeholder='John Doe'
                required
              />
            </label>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className='input input-bordered'
                placeholder='email@example.com'
                required
              />
            </label>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>Message</span>
              </div>
              <textarea
                id="message"
                name="message"
                className='input input-bordered h-fit py-3 resize-none'
                rows={15}
                placeholder='Introduce yourself here...'
                required
              />
            </label>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>Resume Link (Google Drive)</span>
              </div>
              <input
                id='user_resume'
                type="text"
                name='user_resume'
                className='input input-bordered'
                placeholder='https://drive.google.com/file/d/***'
                required
              />
            </label>
            <div className='justify-self-end'>
              <button type="submit" className='btn btn-primary mt-2 px-4'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InternshipPage