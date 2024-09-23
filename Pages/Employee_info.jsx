import React from 'react';
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/header';
import Title from '../src/Components/Title';
import Form from '../src/Components/Form';
import Employee from '../src/Components/Employee/Employee';

const Employee_info = () => {
    return (
        <div className='container-fluid home min-vh-100'>
            <div className="row">
                <div className="col-2 bg-white min-vh-100">
                    <Sidebar />
                </div>
                <main className="col">
                    <Header />
                    <Title subTitle='Welcome to our dashboard' title='Employee Registration' />

                    <div className="row">


                        <div>
                            <Employee />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Employee_info;
