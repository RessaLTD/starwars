import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageOverviewComponent } from './page-overview/page-overview.component';
import { PageFilmDetailComponent } from './page-film-detail/page-film-detail.component';
import { PageFilmOverviewComponent } from './page-film-overview/page-film-overview.component';
import { PagePilotDetailComponent } from './page-pilot-detail/page-pilot-detail.component';
import { PagePilotOverviewComponent } from './page-pilot-overview/page-pilot-overview.component';
import { PagePlanetDetailComponent } from './page-planet-detail/page-planet-detail.component';
import { PagePlanetOverviewComponent } from './page-planet-overview/page-planet-overview.component';
import { PageSpecieDetailComponent } from './page-specie-detail/page-specie-detail.component';
import { PageSpecieOverviewComponent } from './page-specie-overview/page-specie-overview.component';
import { PageStarshipDetailComponent } from './page-starship-detail/page-starship-detail.component';
import { PageStarshipOverviewComponent } from './page-starship-overview/page-starship-overview.component';
import { PageVehicleDetailComponent } from './page-vehicle-detail/page-vehicle-detail.component';
import { PageVehicleOverviewComponent } from './page-vehicle-overview/page-vehicle-overview.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PageRoutingModule,
		AppCommonModule
	],
	declarations: [
		PageSearchComponent,
		PageDetailComponent,
		PageOverviewComponent,
		PageFilmDetailComponent,
		PageFilmOverviewComponent,
		PagePilotDetailComponent,
		PagePilotOverviewComponent,
		PagePlanetDetailComponent,
		PagePlanetOverviewComponent,
		PageSpecieDetailComponent,
		PageSpecieOverviewComponent,
		PageStarshipDetailComponent,
		PageStarshipOverviewComponent,
		PageVehicleDetailComponent,
		PageVehicleOverviewComponent
	]
})

export class PageModule {
}