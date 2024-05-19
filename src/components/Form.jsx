import { useContext } from "react";
import { EditContext } from "../context/editProvider";
import Alert from './Alert';

const Form = () => {

  const { name, setName, email, setEmail, major, setMajor, birth, setBirth, setEdit, alert, setAlert } = useContext(EditContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if([name, email, major, birth].includes('')) {
      setAlert({
        type: 'alert',
        msg: 'All fields are required'
      });
      return;
    }
    setEdit(false);
    setAlert('');
  }

  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-16 gap-12 p-5 items-center">
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">Add and show your <span className="text-black">Info</span></h1>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {
            alert && <Alert type={alert.type} msg={alert.msg} />
          }
          <form onSubmit={handleSubmit}>
            <div className="my-6">
              <label htmlFor="name" className="uppercase text-gray-600 block text-xl font-bold">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} type="name" id="name" placeholder="Register name" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <div className="my-6">
              <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Register email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <div className="my-6">
              <label htmlFor="major" className="uppercase text-gray-600 block text-xl font-bold">Major</label>
              <input value={major} onChange={e => setMajor(e.target.value)} type="text" id="major" placeholder="Your major" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <div className="my-6">
              <label htmlFor="birth" className="uppercase text-gray-600 block text-xl font-bold">Birthday</label>
              <input value={birth} onChange={e => setBirth(e.target.value)} type="date" id="birth" placeholder="Your birthday" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
            </div>
            <input type="submit" value="Add" className="bg-indigo-700 text-white font-bold rounded-xl w-full py-3 uppercase mt-5  hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-16" />
          </form>
        </div>
      </main>
    </>
  )
}

export default Form
