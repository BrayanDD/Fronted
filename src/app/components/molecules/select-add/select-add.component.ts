import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/services/technology/technology';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { ListAddService } from 'src/app/services/list-add.service'; // Importa el servicio ListAddService
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-add',
  templateUrl: './select-add.component.html',
  styleUrls: ['./select-add.component.scss']
})
export class SelectAddComponent implements OnInit {
  @Input() control?: FormControl;
  @Input() items: any[] = [];
  itemsSelect: any[] = [];
  selectedItem: any;
  currentOrder: string = 'asc';

  constructor(private listAddService: ListAddService,private technologyService: TechnologyService) { }

  ngOnInit(): void {

    this.listAddService.item.subscribe(any =>{
      this.itemsSelect = any;
    })
  }


  onClick() {
    if (this.selectedItem) {
      this.listAddService.addNewItem(this.selectedItem);
    }
  }
  onClickDelete(indice:number){
    this.listAddService.deleteItem(indice);
  }

  idList(){
    console.log(this.listAddService.idItemsAdd());

  }
}
