import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaDataSource } from './tabela-datasource';
import { FormularioService } from '../formulario/formulario.service';
import { Formulario } from '../formulario/formulario.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Formulario>;
  dataSource: TabelaDataSource;

  clients!: Formulario[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'servico', 'data', 'hora', 'pagamento'];

  constructor(private formularioService: FormularioService) {
    this.dataSource = new TabelaDataSource();
  }

  ngOnInit(){
    this.formularioService.read().subscribe(clients =>{
      this.clients = clients
    })
    this.dataSource = new TabelaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}