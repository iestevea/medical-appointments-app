import React from 'react';

const AppointmentForm = () => {
  return (
    <form>
      <div>
        <label>
          Nombre Mascota:
          <input name="pet_name"/>
        </label>
        <label>
          Nombre Dueño:
          <input name="owner_name"/>
        </label>
        <label>
          Fecha:
          <input type="date" name="date"/>
        </label>
        <label>
          Hora:
          <input type="hour" name="hour"/>
        </label>
        <label>
          Síntomas:
          <input name="sintoms"/>
        </label>
        <input type="submit" value="Agregar cita"/>
      </div>
    </form>
  );
}

export default AppointmentForm;