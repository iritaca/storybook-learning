import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Button label="click" variant="link" href="https://www.google.com" />
      <Modal
        title="header"
        buttons={{ variant: "multiple", actions: { onPrimary: () => {} } }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        mollitia velit culpa? Dolor aspernatur laboriosam error ad recusandae
        sunt repellat. A, sunt ad officiis fugiat quia expedita officia id quas?
      </Modal>
    </>
  );
}

export default App;
