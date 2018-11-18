import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IVehicleDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-vehicle-detail',
	templateUrl: './page-vehicle-detail.component.html',
	styleUrls: ['./page-vehicle-detail.component.less']
})

export class PageVehicleDetailComponent implements OnInit {
	private _data: IVehicleDto = null;

	@Input()
	set data(x: IVehicleDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<IVehicleDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IVehicleDto {
		return this._data;
	}
}
