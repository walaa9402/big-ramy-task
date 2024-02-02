import { Component, Input, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { EBOOKS_APIS } from '../../../core/apis/e-books.api';
import { IDetailsResponse } from '../../../core/interfaces/response.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-books-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './e-books-details.component.html',
  styleUrl: './e-books-details.component.scss'
})
export class EBooksDetailsComponent {

  // #region declare & init. variables

  @Input({ required: true }) id!: number;

  API = inject(ApiService);
  model: any;

  // #endregion

  // #region ngOnInit

  ngOnInit(): void {
    this.getEBookById(this.id);
  }

  // #endregion

  // #region load controls

  getEBookById(id: number) {
    this.API.getDataFromServerById(EBOOKS_APIS.GET_EBOOK_BY_ID, id).subscribe((res: IDetailsResponse) => {
      this.model = res.data;
    })
  }

}
