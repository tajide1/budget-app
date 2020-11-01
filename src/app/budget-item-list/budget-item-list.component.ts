import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { EditItemModComponent } from '../edit-item-mod/edit-item-mod.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item:BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModComponent, {
      width: "580px",
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.update.emit({
          old:item,
          new: result
        })
      }
    })
  }

}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem
}