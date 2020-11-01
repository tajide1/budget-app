import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-edit-item-mod',
  templateUrl: './edit-item-mod.component.html',
  styleUrls: ['./edit-item-mod.component.scss']
})
export class EditItemModComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<EditItemModComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {};

  ngOnInit(): void {};

  onsubmitted(updatedItem:BudgetItem) {
      this.dialogRef.close(updatedItem);
  };

}
