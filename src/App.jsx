import './App.css'
import AddVideoModal from './components/AddVideoModal'
import CardVideo from './components/CardVideo'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header name="MyyT" placeholder="Pesquisar"></Header>
      <CardVideo></CardVideo>
      <AddVideoModal />
    </>
  )
}

export default App
