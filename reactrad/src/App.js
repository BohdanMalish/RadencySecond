import './App.css';
import Notes from './components/Notes/Notes';
import Modal from './components/Modals/Modals';
import Summary from './components/Summary/Summary';
function App() {
  return (
    <>
      <Modal />
      <Notes />
      <Summary />
    </>
  );
}

export default App;
