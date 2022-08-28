import React from 'react';
import Mentores from '../components/Home/Mentores'
import Monitoria from '../components/Home/Monitoria'
import Btncerrarseccion from '../components/Home/Cerrarseccion'
import CreateMentor from '../components/Home/CreateMentor'
import CreateMonitoria from '../components/Home/CreateMonitoria'
import Search from '../components/Home/filtrosearch'
function Home() {
    return (
        <div>
            <Btncerrarseccion/>
            <CreateMonitoria/>
            <CreateMentor/>
            <Search/>
            <Mentores/>
            <Monitoria/>
        </div>
    );
}

export default Home;