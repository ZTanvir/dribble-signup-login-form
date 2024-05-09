import "./App.css";
import Form from "./Components/Form";
import SignInFormData from "./Components/FormData/SignInFormData";
import SignUpSection from "./Components/SignUpSection";

function App() {
    return (
        <main className="">
            <Form formInputData={SignInFormData} btnName="Submit" />
            <SignUpSection />
        </main>
    );
}

export default App;
