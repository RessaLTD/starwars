import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IStarshipDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-starship-detail',
	templateUrl: './page-starship-detail.component.html',
	styleUrls: ['./page-starship-detail.component.less']
})

export class PageStarshipDetailComponent implements OnInit {
	private _data: IStarshipDto = null;

	@Input()
	set data(x: IStarshipDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
		dataChange = new EventEmitter<IStarshipDto>();

	constructor(
	) {
	}

	ngOnInit() {
	}

	get data(): IStarshipDto {
		return this._data;
	}
}
