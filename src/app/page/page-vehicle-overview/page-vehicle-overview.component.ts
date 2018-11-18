import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IResultDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-vehicle-overview',
	templateUrl: './page-vehicle-overview.component.html',
	styleUrls: ['./page-vehicle-overview.component.less']
})

export class PageVehicleOverviewComponent implements OnInit {
	private _data: IResultDto = null;

	@Input()
	set data(x: IResultDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<IResultDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IResultDto {
		return this._data;
	}
}
