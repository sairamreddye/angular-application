import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalRoutingModule } from "./portal-routing.module";
import { PortalComponent } from "./portal.component";
import { CoreModule } from "../core/core.module";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        PortalRoutingModule,
        CoreModule,
        FormsModule
    ],

    declarations: [
        PortalComponent,
        DashboardComponent,
    ],
    providers: [],
    exports: []
})
export class PortalModule { }
