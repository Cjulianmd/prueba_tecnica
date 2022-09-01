import React from 'react';
import Mentores from '../components/Home/Mentores'
import Monitoria from '../components/Home/Monitoria'
import Btncerrarseccion from '../components/Home/Cerrarseccion'
import CreateMentor from '../components/Home/CreateMentor'
import CreateMonitoria from '../components/Home/CreateMonitoria'
function Home() {
    document.body.style = 'background: #1F233E; '
    return (
        <div>
            <Btncerrarseccion/>
            <CreateMonitoria/>
            <CreateMentor/>
            <Mentores/><Monitoria/>
        </div>
    );
}

export default Home;