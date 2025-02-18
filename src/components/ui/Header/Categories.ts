export interface Categories {
    id: number;
    name: string;
    submenu: string[];
}
export const categories: Categories[] = [
    {
      id: 1,
      name: "Men's Clothing",
      submenu: ["T-shirts", "Casual shirts", "Formal shirts", "Sweatshirts"],
    },
    {
      id: 2,
      name: "Jewelery",
      submenu: ["Necklaces", "Earrings", "Rings", "Bracelets"],
    },
    {
      id: 3,
      name: "Electronics",
      submenu: ["Laptops", "Smartphones", "Tablets", "Cameras"],
    },
    {
      id: 4,
      name: "Women's clothing",
      submenu: ["Dresses", "T-shirts", "Skirts", "Jeans"],
    },
  ];