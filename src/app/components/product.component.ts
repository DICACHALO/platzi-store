import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  // Cuando hacemos new EventEmitter() entre los paréntesis del constructor NO va un valor por defecto, va un boolean que indica si el evento es asincrono (true) o sincrono (false), la defecto es “false”.

  constructor() {
    console.log("1. Constructor");
  }

  // ngOnChanges detecta los cambios: el estado anterior y el nuevo
  ngOnChanges(changes: SimpleChanges) {
    console.log("2. ngOnChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log(" 3. ngOnInit");
  }

  // Con este método hacemos cambios de forma forzada o a nuestra manera
  ngDoCheck() {
    console.log("4. ngDoCheck");
  }

  // Para apagar cualquier cosa dentro de nuestro componente, ayudandoa limpiar procesos de memoria
  ngOnDestroy() {
    console.log("5. ngOnDestroy");
  }

  addCart() {
    console.log("añadir al carrito");
    this.productClicked.emit(this.product.id);
  }
}
