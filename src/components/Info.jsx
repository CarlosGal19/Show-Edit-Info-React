import useEdit from '../hooks/useEdit'

const Info = () => {

  const { name, email, major, birth, setName, setEmail, setMajor, setBirth, setEdit, setAlert } = useEdit();

  const handleRemove = () => {
    setName('');
    setEmail('');
    setMajor('');
    setBirth('');
    setAlert({
      type: 'Success',
      msg: 'Your info has been removed successfully!'
    });
    setEdit(true);
  }

  const handleEdit = () => {
    setEdit(true);
  }

  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-16 gap-12 p-5 items-center">
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">Show or edit your <span className="text-black">Info</span></h1>
        </div>
        <div className='mt-20 md:mt-5 md:shadow-lg px-5 py-10 rounded-xl bg-white'>
          <div className="my-6">
            <h1 className="text-4xl font-bold">Name:</h1><span className='uppercase text-xl'>{name}</span>
          </div>
          <div className="my-6">
            <h1 className="text-4xl font-bold">Email:</h1><span className='uppercase text-sm md:text-xl'>{email}</span>
          </div>
          <div className="my-6">
            <h1 className="text-4xl font-bold">Major:</h1><span className='uppercase text-xl'>{major}</span>
          </div>
          <div className="my-6">
            <h1 className="text-4xl font-bold">Birthday:</h1><span className='uppercase text-xl'>{birth}</span>
          </div>
          <div className='md:flex justify-evenly items-center'>
            <button className="bg-indigo-700 text-white font-bold rounded-xl w-full py-3 uppercase mt-5  hover:cursor-pointer hover:bg-indigo-900 md:w-auto px-16" onClick={handleEdit}>Edit</button>
            <button className="bg-red-600 text-white font-bold rounded-xl w-full py-3 uppercase mt-5  hover:cursor-pointer hover:bg-red-900 md:w-auto px-16" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Info
