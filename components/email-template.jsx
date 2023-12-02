import * as React from "react";

export const EmailTemplate = ({ name, email, message }) => (
  <>
    <div className='mx-auto p-10'>
      <div className='max-w-md shadow-2xl rounded-2xl'>
        <h1 className='text-2xl text-center font-extrabold pt-3'>
          Hi Adam, you have a new client!{" "}
        </h1>
        <div className=' p-8'>
          <h3 className='font-bold mb-2'>Client Details:</h3>
          <h4>
            <b>Name:</b> {name}
          </h4>
          <h4>
            <b>Email:</b> {email}
          </h4>
          <p className='font-semibold mt-1'>"{message}"</p>
        </div>
      </div>
    </div>
  </>
);
