import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IPlanetDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-planet-detail',
	templateUrl: './page-planet-detail.component.html',
	styleUrls: ['./page-planet-detail.component.less']
})

export class PagePlanetDetailComponent implements OnInit {
	private _data: IPlanetDto = null;

	@Input()
	set data(x: IPlanetDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<IPlanetDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IPlanetDto {
		return this._data;
	}
}
