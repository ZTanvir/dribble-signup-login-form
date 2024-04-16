import "./App.css";
import Form from "./Components/Form";
import SignInFormData from "./Components/FormData/SignInFormData";

function App() {
    return (
        <>
            <Form formInputData={SignInFormData} />
        </>
    );
}

export default App;
