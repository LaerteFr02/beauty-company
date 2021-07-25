import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TabelaItem {
  name: string;
  servico: string;
  data: string;
  hora: string;
  pagamento: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TabelaItem[] = [
  {name: 'Ana Paula Rodrigues', servico: 'Mão e pé', data: 'Segunda', hora: '9 as 10', pagamento: 'Cartão - Crédito'},
  {name: 'Cleiton Alves Feitosa', servico: 'Corte masculino', data: 'Quarta', hora: '15 as 16', pagamento: 'Cartão - Débito'},
  {name: 'David Oliveira de Carvalho', servico: 'Corte masculino', data: 'Sexta', hora: '17 as 18', pagamento: 'PIX'},
  {name: 'Karine Maria Gonçalves Cortez', servico: 'Corte de cabelo', data: 'Quarta', hora: '15 as 16', pagamento: 'Dinheiro'},
  {name: 'Gustavo Pereira dos Santos', servico: 'Corte masculino', data: 'Sexta', hora: '9 as 10', pagamento: 'Dinheiro'},
  {name: 'Daniel dos Santos Rocha', servico: 'Corte masculino', data: 'Segunda', hora: '17 as 18', pagamento: 'Cartão - Débito'},
  {name: 'Alcione Monteiro Lucas Germino', servico: 'Mão e pé', data: 'Segunda', hora: '11 as 12', pagamento: 'PIX'},
  {name: 'Cláudia de Lira Melo', servico: 'Mão e pé', data: 'Terça', hora: '9 as 10', pagamento: 'Cartão - Débito'},
  {name: 'Fabiana Flávia da Silva', servico: 'Tintura de cabelo', data: 'Quarta', hora: '15 as 16', pagamento: 'PIX'},
  {name: 'Jonas Augusto de Barros Chaves', servico: 'Corte masculino', data: 'Terça', hora: '15 as 16', pagamento: 'Cartão - Débito'}
];

/**
 * Data source for the Tabela view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TabelaDataSource extends DataSource<TabelaItem> {
  data: TabelaItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TabelaItem[]> {
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
  private getPagedData(data: TabelaItem[]): TabelaItem[] {
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
  private getSortedData(data: TabelaItem[]): TabelaItem[] {
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
