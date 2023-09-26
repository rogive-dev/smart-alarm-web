import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }