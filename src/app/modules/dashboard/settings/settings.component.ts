import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {
  selectedRegion = 'colombia';
  regions = [
    { name: 'Argentina', value: 'argentina' },
    { name: 'Colombia', value: 'colombia' },
    { name: 'Perú', value: 'peru' },
  ];
  selectedLanguage = 'español';
  languages = [
    { name: 'Español', value: 'español' },
    { name: 'Inglés', value: 'ingles' },
    { name: 'Alemán', value: 'aleman' },
  ];
}
