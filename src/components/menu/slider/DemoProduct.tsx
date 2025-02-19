 interface ProductType {
     id:number,
     title:string,
     price:number,
     description:string,
     category:string,
     image:string,
     rating:{
         rate:number,
         count:number
     }
 }

export const demoProducts: ProductType[] = [
    {
      id: 1,
      title: "Product with Aesthetic Design",
      price: 100,
      description: "Product with aesthetic design",
      category: "Men's Clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Made in Nepal T-shirt",
      price: 150,
      description: "Made with pure 100% natural material",
      category: "Men's Clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: "High Speed SSD",
      price: 200,
      description: "High Speed SSD",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];