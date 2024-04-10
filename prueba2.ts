import {
  Stores,
  ShoppingList,
  AvailableProduct,
  ProductDetails,
} from "./interfaces";

function availableProducts(
  stores: Stores,
  shoppingList: ShoppingList
): AvailableProduct {
  let maxPurchase: any = 0;
  let minPurchase: any = 0;
  const availableProduct: AvailableProduct = {};

  Object.keys(stores).forEach((tienda: string) => {
    const productsD: string[] = Object.keys(stores[tienda]).filter(
      (product: string) => shoppingList.includes(product)
    );
    const hasAllProducts: boolean = productsD.length === shoppingList.length;

    availableProduct[tienda] = {
      products: productsD.reduce((obj: ProductDetails, product: string) => {
        obj[product] = stores[tienda][product];
        return obj;
      }, {}),

      status: hasAllProducts,
      totalCompra: productsD.reduce((total: number, product: string) => {
        total += stores[tienda][product];
        return total;
      }, 0),
    };

    if (hasAllProducts) {
      if (availableProduct[tienda].totalCompra > maxPurchase) {
        maxPurchase = availableProduct[tienda];
      }

      if (
        minPurchase > availableProduct[tienda].totalCompra ||
        availableProduct[tienda].totalCompra !== 0
      ) {
        minPurchase = availableProduct[tienda];
      }
    }
  });

  availableProduct.maxPurchase = maxPurchase;
  availableProduct.minPurchase = minPurchase;

  return availableProduct;
}

const stores = {
  d1: {
    papitasBQ: 3500,
    papitasLimon: 3200,
    mani: 800,
    cafe: 8000,
    azucar: 3500,
    papel: 3000,
  },

  olimpica: {
    papitasBQ: 3600,
    papitasPollo: 3500,
    mani: 850,
    cafe: 8010,
    azucar: 3200,
    papel: 3500,
  },
  exito: {
    papitasBQ: 3650,
    papitasLimon: 3200,
    mani: 790,
    cafe: 8000,
    azucar: 3500,
    papel: 3000,
    gomitas: 4520,
  },
  otra: {
    papitasBQ: 3700,
    papitasLimon: 3200,
    cafe: 7000,
    azucar: 3000,
    papel: 3200,
    gomitas: 4320,
  },
  ara: {
    papitasBQ: 3700,
    papitasPollo: 3200,
    cafe: 7000,
    azucar: 3000,
    mani: 3200,
    gomitas: 4320,
  },
  isimo: {
    papitasBQ: 3700,
    papitasPollo: 3200,
    cafe: 800,
    azucar: 3000,
    mani: 1800,
    gomitas: 4320,
  },
  dolarcity: {
    papitasBQ: 3700,
    papitasPollo: 3200,
    cafe: 800,
    azucar: 3000,
    mani: 500,
    gomitas: 4320,
  },
};

const shoppingList: ShoppingList = [
  "papitasPollo",
  "papitasBQ",
  "cafe",
  "gomitas",
  "mani",
];
const result:AvailableProduct = availableProducts(stores, shoppingList);

console.log("Resumen:", result);

