import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { EBOOKS_APIS } from '../../../core/apis/e-books.api';
import { IListResponseInterface } from '../../../core/interfaces/response.interface';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-e-books-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './e-books-list.component.html',
  styleUrl: './e-books-list.component.scss'
})
export class EBooksListComponent implements OnInit {

  // #region declare & init. variables

  API = inject(ApiService);
  listOfEBooks: any[] = [];

  // #endregion

  // #region ngOnInit

  ngOnInit(): void {
    this.getListOfEBooks();
  }

  // #endregion

  // #region load controls

  getListOfEBooks() {
    this.API.getDataFromServer(EBOOKS_APIS.GET_EBOOKS_LIST).subscribe((res: IListResponseInterface) => {
      this.listOfEBooks = res.data;
    })
  }

  // #endregion
}
