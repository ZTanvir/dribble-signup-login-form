import "./App.css";
import Form from "./Components/Form";
import SignInFormData from "./Components/FormData/SignInFormData";
import SignUpSection from "./Components/SignUpSection";

function App() {
    return (
        <>
            <Form formInputData={SignInFormData} btnName="Submit" />
            <SignUpSection />
        </>
    );
}

export default App;
