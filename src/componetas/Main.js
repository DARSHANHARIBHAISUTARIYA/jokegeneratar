// import {}
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme CSS (choose any theme)
import 'primereact/resources/primereact.min.css';        
import { useState } from 'react';
// PrimeIcons
import 'primeicons/primeicons.css';   
import './style.css';
const Main = () => {
    const [Joke,setJoke] = useState('');
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    return(
        <>
            <div className="main-div text-center">
                <h1 className="text-center">React Joke Generatar App</h1>
                <Button onClick={fetchApi}  label='Click Geneta Joke'/>
                <p>{Joke}</p>
            </div>
        </>
    );
}
export default Main;