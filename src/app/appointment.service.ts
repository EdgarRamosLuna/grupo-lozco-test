import { Injectable } from '@angular/core';
import { Appointment } from './models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  createAppointment(appointment: Appointment): void {
    appointment.id = this.appointments.length + 1;
    this.appointments.push(appointment);
  }

  updateAppointment(appointment: Appointment): void {
    const index = this.appointments.findIndex(a => a.id === appointment.id);
    if (index !== -1) {
      this.appointments[index] = appointment;
    }
  }

  deleteAppointment(appointment: Appointment): void {
    const index = this.appointments.findIndex(a => a.id === appointment.id);
    if (index !== -1) {
      this.appointments.splice(index, 1);
    }
  }
}
