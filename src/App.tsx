import React, {useState} from 'react';
// import AppointmentOverview from './Components/AppointmentOverview';
import AppointmentForm from './Components/AppointmentForm';

interface AppointmentList {
  appointments: Array<object>
}

const App = () => {
  const [appointments, setAppointments] = useState<Array<object>>([]);

  return (
    <React.Fragment>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="left-container">
      <h2>CREAR CITA</h2>
        <AppointmentForm ></AppointmentForm>
      </div>
      <div className="right-container">
      <h2>{appointments.length ? 'ADMINISTRA TUS CITAS' : 'NO HAY CITAS'}</h2>
        {/* {appointments.map( appointment => <AppointmentOverview data={appointment}></AppointmentOverview>)} */}
      </div>
    </React.Fragment>
  );
}

export default App;
