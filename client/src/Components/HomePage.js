import React, { useEffect, useState } from "react";
import { getByName } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import './HomePage.css'


function HomePage() {

    const [filtro, setFiltro] = useState('');
    const [region, setRegion] = useState('');
    const [user, setUser]=useState('');

    let namesPage = useSelector(state => state.names);

    const dispatch = useDispatch();

    function speak(text){
        speechSynthesis.speak(new SpeechSynthesisUtterance(text))
    };

    useEffect(() => {
        dispatch(getByName(filtro))
    }, [dispatch, filtro]);

    
    let handleSubmit = (e) => {
        e.preventDefault();
        let change = e.target.value;
        let text;
        switch(change){
            case 'Saludar':
                setUser(filtro);
                if(namesPage.find(e => e.name ===filtro)){
                    if(region === 'English'){
                        text = `Hello, ${filtro}`;
                        speak(text); 
                    }else {
                        text = `Hola, ${filtro}`;
                        speak(text);
                    }
                }
                else
                alert('no existe usuario');    
                break;
            case 'Despedir':
                if(region === 'English'){
                    text = `Good Bye, ${user}`;
                    speak(text); 
                }else {
                    text = `Adios, ${user}`;
                    speak(text);
                }
                let val = document.getElementById('name');
                    val.value = '';
                setFiltro('');
                setUser('')
                break;
            default:
                if(region === 'English'){
                    text = `My name is , ${user}`;
                    speak(text); 
                }else {
                    text = `Mi nombre es , ${user}`;
                    speak(text);
                }
                break;
        }     
    };
   
    return(
        <div className="homepage">
            <div className="card">
                <section>
                    <h2>Nombres</h2>
                    <input
                            id = 'name'
                            placeholder = 'Put your name'
                            type = 'text'
                            name = 'username'
                            onChange = {(e) => setFiltro( e.target.value)}
                            value = {filtro.name}
                    />
                    <div className="radios">
                            <input 
                                id ='English'
                                className ='radio' 
                                type = 'radio'
                                name="language" 
                                value='English'
                                onChange={(e) => setRegion(e.target.value)}/>
                            <label htmlFor ='English'>Ingles</label>
                            <input 
                                id ='Spanish'
                                className ='radio' 
                                type = 'radio' 
                                name="language"
                                value='Spanish'
                                onChange={(e) => setRegion(e.target.value)}/>
                            <label htmlFor ='Spanish'>Espanol</label>
                    </div>
                    <div className="btns">
                        <button
                            className="btn"
                            value='Saludar' 
                            onClick={handleSubmit}>Saludar</button>
                        <button 
                            className="btn"
                            value='Name' 
                            onClick={handleSubmit}>Nombre</button>
                        <button 
                            className="btn"
                            value='Despedir' 
                            onClick={handleSubmit}>Despedir</button>
                    </div>
                        {namesPage.find(e => e.name === user)?
                                                       
                            <div>
                                {region === 'English'? 
                                <h3>
                                    My name is {user}
                                </h3>
                                :
                                <h3>
                                    Mi nombre es {user}
                                </h3>
                                }
                            </div>
                        :
                        <div/>
                        }
                </section>
            </div>
        </div>
    );
}
export default HomePage;