import './App.css'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Student from './Student'

function App() {
  const handleSave = () => alert("Saved!");
  const handleCancel = () => alert("Cancelled!");

  return (
    <>
      <Header></Header>
      <hr></hr>
      <Student name="John Cena" course="BSIT"></Student>
      <Student name="Kate Miller" course="BSIT"></Student>
      <Student name="Jack Sparrow" course="BSIT"></Student>
      <Student name="Tery Crews" course="BSIT"></Student>
      <hr></hr>
      <Button label="Save" onClick={handleSave}></Button>
      <Button label="Cancel" onClick={handleCancel}></Button>
      <hr></hr>
      <Footer></Footer>
    </>
  )
}

export default App