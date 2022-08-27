import React from 'react';
import Mentores from '../components/Home/Mentores'
import Monitoria from '../components/Home/Monitoria'
import Btncerrarseccion from '../components/Home/Cerrarseccion'
import CreateMentor from '../components/Home/CreateMentor'
import CreateMonitoria from '../components/Home/CreateMonitoria'
function Home() {
    return (
        <div>
            <CreateMonitoria/>
            <CreateMentor/>
            <Btncerrarseccion/>
            <Mentores/>
            <Monitoria/>
        </div>
    );
}

export default Home;