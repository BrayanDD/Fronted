import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/services/technology/technology';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { ListAddService } from 'src/app/services/list-add.service'; // Importa el servicio ListAddService

@Component({
  selector: 'app-select-add',
  templateUrl: './select-add.component.html',
  styleUrls: ['./select-add.component.scss']
})
export class SelectAddComponent implements OnInit {

  items: any[] = [];
  itemsSelect: any[] = [];
  selectedItem: any; // Propiedad para rastrear el elemento seleccionado
  currentOrder: string = 'asc';
  filteredItems: any[] = [];
  constructor(private listAddService: ListAddService,private technologyService: TechnologyService) { } // Inyecta el servicio ListAddService

  ngOnInit(): void {
    this.technologyService.getAllTechnology(this.currentOrder).subscribe(
      (technologies: Technology[]) => {
        this.items = technologies;
        this.filteredItems = technologies;
      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
    this.listAddService.item.subscribe(any =>{
      this.itemsSelect = any;
    })
  }

  filterItems(value: string) {
    if (!value) {
      // Si no hay valor de búsqueda, mostramos todos los items
      this.filteredItems = this.items;
      return;
    }

    // Filtramos los items basados en el valor de búsqueda
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  onClick() {
    if (this.selectedItem) { // Asegúrate de que haya un elemento seleccionado
      this.listAddService.addNewItem(this.selectedItem); // Añade el elemento seleccionado al servicio ListAddService
    }
  }
  onClickDelete(indice:number){
    this.listAddService.deleteItem(indice);
  }

  idList(){
    console.log(this.listAddService.idItemsAdd());

  }
}
