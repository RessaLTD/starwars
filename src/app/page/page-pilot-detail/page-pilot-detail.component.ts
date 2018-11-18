import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IPilotDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-pilot-detail',
	templateUrl: './page-pilot-detail.component.html',
	styleUrls: ['./page-pilot-detail.component.less']
})

export class PagePilotDetailComponent implements OnInit {
	private _data: IPilotDto = null;

	@Input()
	set data(x: IPilotDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<IPilotDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IPilotDto {
		return this._data;
	}
}
