import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: "1",
      image: "assets/images/camiseta.png",
      title: "Camiseta",
      price: 80000,
      description:
        "Es una camiseta unisex que se adapta a todo tipo de tamaños",
    },
    {
      id: "2",
      image: "assets/images/hoodie.png",
      title: "Hoodie",
      price: 80000,
      description: "Tela de excelente calidad",
    },
    {
      id: "3",
      image: "assets/images/mug.png",
      title: "Mug",
      price: 80000,
      description: "Puedes enviar tu diseño para personalizar",
    },
    {
      id: "4",
      image: "assets/images/pin.png",
      title: "Pin",
      price: 80000,
      description: "Para decorar",
    },
    {
      id: "5",
      image: "assets/images/stickers1.png",
      title: "Stickers",
      price: 80000,
      description: "Tamaño mediano",
    },
    {
      id: "6",
      image: "assets/images/stickers2.png",
      title: "Stickers",
      price: 80000,
      description: "Tamaño pequeño por 6 unidades",
    },
  ];
  constructor() {}

  ngOnInit() {}
  
  clickProduct(id: number) {
    console.log("product");
    console.log(id);
  }
}
