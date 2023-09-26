import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PreferencesComponent {
  selectedTime = '10';
  time = [
    { name: '10 min antes', value: '10' },
    { name: '20 min antes', value: '20' },
    { name: '30 min antes', value: '30' },
  ];
}
