import {Component, ViewChild} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FlightFormComponent} from '../flight-form/flight-form.component';
import {FlightsService} from '../../core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {
  @ViewChild('flightForm', {static: false}) flightForm: FlightFormComponent;

  constructor(private dialogRef: MatDialogRef<NewFlightComponent>,
              private toast: MatSnackBar,
              private flightService: FlightsService) {
  }

  createFlight() {
    this.flightService.addFlight(this.flightForm.form.value).then(this.onCreatingSucces.bind(this), this.onCreatingFailure.bind(this));
  }

  private onCreatingSucces() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfullt created!', '', {panelClass: 'toast-success'});
  }

  private onCreatingFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }


}
