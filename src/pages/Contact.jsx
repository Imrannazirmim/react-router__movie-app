import { Form } from "react-router-dom";




export const contactData = async ({request}) => {
  try {
   const response = await request.formData();
   const data = Object.fromEntries(response);
   console.log(data);
   return null
   
  } catch (error) {
    console.log(error.message);
    
  }
}



export const Contact = () => {
  return (
    <div className="flex flex-col gap-3 p-3 shadow-md w-[70%] border m-4">
      <h2 className="text-2xl text-center">Contact us</h2>
      <p className="text-center">Please enter your delails and form fill up</p>

     <Form method="POST" action="/contact">
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          placeholder="Enter your name"
          className="border w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Enter your email"
          className="border w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="border w-full h-32 p-2"
        ></textarea>
      </div>
      <button className="border p-3 w-32 rounded m-auto bg-purple-600 text-white">
        Send Message
      </button>
      </Form>
    </div>
  );
};
