import './App.css'
import Form from './components/Form'
import Info from './components/Info'
import Header from './components/Header'
import Footer from './components/Footer'
import useEdit from './hooks/useEdit.jsx'

function App() {
  const { edit } = useEdit();

  return (
    <>
      <Header/>
      {
        edit && <Form />
      }
      {
        !edit && <Info />
      }
      <Footer/>
    </>
  )
}

export default App;
