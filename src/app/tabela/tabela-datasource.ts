import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Formulario } from '../formulario/formulario.model';

// TODO: Replace this with your own data model type

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Formulario[] = [
  {name: 'Ana Paula Rodrigues', service: 'Mão e pé', date: 'Segunda', time: '9 as 10', payment: 'Cartão - Crédito'},
  {name: 'Cleiton Alves Feitosa', service: 'Corte masculino', date: 'Quarta', time: '15 as 16', payment: 'Cartão - Débito'},
  {name: 'David Oliveira de Carvalho', service: 'Corte masculino', date: 'Sexta', time: '17 as 18', payment: 'PIX'},
  {name: 'Karine Maria Gonçalves Cortez', service: 'Corte de cabelo', date: 'Quarta', time: '15 as 16', payment: 'Dinheiro'},
  {name: 'Gustavo Pereira dos Santos', service: 'Corte masculino', date: 'Sexta', time: '9 as 10', payment: 'Dinheiro'},
  {name: 'Daniel dos Santos Rocha', service: 'Corte masculino', date: 'Segunda', time: '17 as 18', payment: 'Cartão - Débito'},
  {name: 'Alcione Monteiro Lucas Germino', service: 'Mão e pé', date: 'Segunda', time: '11 as 12', payment: 'PIX'},
  {name: 'Cláudia de Lira Melo', service: 'Mão e pé', date: 'Terça', time: '9 as 10', payment: 'Cartão - Débito'},
  {name: 'Fabiana Flávia da Silva', service: 'Tintura de cabelo', date: 'Quarta', time: '15 as 16', payment: 'PIX'},
  {name: 'Jonas Augusto de Barros Chaves', service: 'Corte masculino', date: 'Terça', time: '15 as 16', payment: 'Cartão - Débito'},
  {name: 'Cleiton Alves Feitosa', service: 'Corte masculino', date: 'Quarta', time: '15 as 16', payment: 'Cartão - Débito'},
  {name: 'David Oliveira de Carvalho', service: 'Corte masculino', date: 'Sexta', time: '17 as 18', payment: 'PIX'},
  {name: 'Karine Maria Gonçalves Cortez', service: 'Corte de cabelo', date: 'Quarta', time: '15 as 16', payment: 'Dinheiro'},
  {name: 'Gustavo Pereira dos Santos', service: 'Corte masculino', date: 'Sexta', time: '9 as 10', payment: 'Dinheiro'},
  {name: 'Daniel dos Santos Rocha', service: 'Corte masculino', date: 'Segunda', time: '17 as 18', payment: 'Cartão - Débito'},
  {name: 'Alcione Monteiro Lucas Germino', service: 'Mão e pé', date: 'Segunda', time: '11 as 12', payment: 'PIX'},
  {name: 'Cláudia de Lira Melo', service: 'Mão e pé', date: 'Terça', time: '9 as 10', payment: 'Cartão - Débito'},
  {name: 'Fabiana Flávia da Silva', service: 'Tintura de cabelo', date: 'Quarta', time: '15 as 16', payment: 'PIX'},
  {name: 'Jonas Augusto de Barros Chaves', service: 'Corte masculino', date: 'Terça', time: '15 as 16', payment: 'Cartão - Débito'}
];

/**
 * Data source for the Tabela view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TabelaDataSource extends DataSource<Formulario> {
  data: Formulario[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Formulario[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Formulario[]): Formulario[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Formulario[]): Formulario[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
