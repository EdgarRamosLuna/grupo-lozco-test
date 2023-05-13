import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  appointments: Appointment[] = [];
  newAppointment: Appointment = {
    title: '',
    date: '',
    time: '',
    clientName: '',
    responsibleDoctor: ''
  };
  selectedAppointment: Appointment | null = null;

  onSubmit() {
    if (
      this.newAppointment.title &&
      this.newAppointment.date &&
      this.newAppointment.time &&
      this.newAppointment.clientName &&
      this.newAppointment.responsibleDoctor
    ) {
      if (this.selectedAppointment) {
        // Update existing appointment
        this.selectedAppointment.title = this.newAppointment.title;
        this.selectedAppointment.date = this.newAppointment.date;
        this.selectedAppointment.time = this.newAppointment.time;
        this.selectedAppointment.clientName = this.newAppointment.clientName;
        this.selectedAppointment.responsibleDoctor = this.newAppointment.responsibleDoctor;
        this.selectedAppointment = null; // Clear selected appointment after update
      } else {
        // Create new appointment
        this.appointments.push(this.newAppointment);
      }
      this.newAppointment = {
        title: '',
        date: '',
        time: '',
        clientName: '',
        responsibleDoctor: ''
      };
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    this.selectedAppointment = null; // Clear selected appointment after deletion
  }

  editAppointment(index: number) {
    this.selectedAppointment = this.appointments[index];
    // Copy appointment values to the form fields
    this.newAppointment = { ...this.selectedAppointment };
  }

  cancelEdit() {
    this.selectedAppointment = null; // Clear selected appointment
    this.newAppointment = {
      title: '',
      date: '',
      time: '',
      clientName: '',
      responsibleDoctor: ''
    };
  }
}
