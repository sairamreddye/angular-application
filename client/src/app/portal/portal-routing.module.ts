import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PortalRoutingModule { }
