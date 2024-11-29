import React from "react";

const Contact = () => {
  return (
    <>
    <h2 className="font-black text-[38px] w-[screen] text-center font-dance text-white">Contact Us</h2>
    <div className="flex w-full items-center justify-evenly">
    <p className="h-[300px] w-[300px] m-10 text-white font-dance text-[38px] rounded-lg">Got any query? Write to us with your name or contact us via our email...📧</p>
    <div className="flex flex-col items-center h-[60vh] mx-2  text-[19px] text-white p-4 font-dance justify-center">
      <form className="flex flex-col justify-center items-center gap-4">
        <label htmlFor="name" className="text-[27px]">
          Name:
          <input type="text" className="rounded-lg h-[27px] w-[380px] m-4 text-center" id="name" name="name" placeholder="Your Name" />
        </label>
        <label htmlFor="email" className="text-[27px]">
          Email:
          <input type="email" className="rounded-lg h-[27px] w-[380px] m-4 text-center" id="email" name="email" placeholder="Your Email" />
        </label>
        <label htmlFor="query" className="flex text-[27px] items-center">
          Query:
          <textarea id="query" className="rounded-lg w-[380px] m-4 text-center" name="query" placeholder="Your Message"></textarea>
        </label>
        <button type="submit" className="shadow-[inset_0_0_0_2px_#133621]  text-white p-2 rounded-xl tracking-widest font-dance font-bold text-[27px] bg-transparent hover:bg-slate-50 hover:text-green-900  transition duration-200">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Contact;
