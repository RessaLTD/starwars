import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IResultDto } from '../../services/api/api-models';

@Component({
	selector: 'app-page-film-overview',
	templateUrl: './page-film-overview.component.html',
	styleUrls: ['./page-film-overview.component.less']
})

export class PageFilmOverviewComponent implements OnInit {
	private _data: IResultDto = null;

	@Input()
	set data(x: IResultDto) {
		this._data = x;
		this.dataChange.emit(this.data);
	}

	@Output()
	dataChange = new EventEmitter<IResultDto>();

	ngOnInit(){
	}

	get data(): IResultDto {
		return this._data;
	}
}




























