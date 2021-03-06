﻿import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IResultDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-starship-overview',
	templateUrl: './page-starship-overview.component.html',
	styleUrls: ['./page-starship-overview.component.less']
})

export class PageStarshipOverviewComponent implements OnInit {
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
