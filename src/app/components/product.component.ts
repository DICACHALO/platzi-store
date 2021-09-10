import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  //Cuando hacemos new EventEmitter() entre los paréntesis del constructor NO va un valor por defecto, va un boolean que indica si el evento es asincrono (true) o sincrono (false), la defecto es “false”.
  addCart(){
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id)
    
  }
}
