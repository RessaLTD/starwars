import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IResultDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-pilot-overview',
	templateUrl: './page-pilot-overview.component.html',
	styleUrls: ['./page-pilot-overview.component.less']
})

export class PagePilotOverviewComponent implements OnInit {
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
