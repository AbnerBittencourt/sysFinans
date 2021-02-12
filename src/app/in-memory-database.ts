import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/01/2019", amount: "70,80", type: "expense" } as Entry,
      { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: false, date: "14/01/2019", amount: "15,00", type: "expense" } as Entry,
      { id: 3, name: 'Salário na Empresa X', categoryId: categories[3].id, category: categories[3], paid: true, date: "15/01/2019", amount: "4405,49", type: "revenue" } as Entry,
      { id: 4, name: 'Netlfix', categoryId: categories[2].id, category: categories[2], paid: true, date: "16/01/2017", amount: "15,00", type: "expense" } as Entry,
      { id: 5, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/02/2017", amount: "30,00", type: "expense" } as Entry,
      { id: 6, name: 'PlayStation 5', categoryId: categories[2].id, category: categories[2], paid: false, date: "17/02/2020", amount: "1500,00", type: "expense" } as Entry,
      { id: 11, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/02/2020", amount: "30,00", type: "expense" } as Entry,
      { id: 12, name: 'Aluguel', categoryId: categories[2].id, category: categories[2], paid: false, date: "23/01/2020", amount: "15,00", type: "expense" } as Entry,
      { id: 13, name: 'Gás de Cozinha', categoryId: categories[1].id, category: categories[1], paid: false, date: "25/01/2021", amount: "30,00", type: "expense" } as Entry,
      { id: 14, name: 'Pagamento Pelo Projeto XYZ', categoryId: categories[4].id, category: categories[4], paid: true, date: "25/01/2021", amount: "2980,00", type: "revenue" } as Entry,
      { id: 19, name: 'Netlfix', categoryId: categories[2].id, category: categories[2], paid: false, date: "07/07/2021", amount: "15,00", type: "expense" } as Entry,
      { id: 21, name: 'PlayStation 5', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/07/2021", amount: "3000,00", type: "expense" } as Entry,
      { id: 22, name: 'Cinema', categoryId: categories[2].id, category: categories[2], paid: true, date: "18/06/2021", amount: "15,00", type: "expense" } as Entry,
      { id: 23, name: 'Jiu Jitsu', categoryId: categories[1].id, category: categories[1], paid: false, date: "21/06/2021", amount: "130,00", type: "expense" } as Entry,
      { id: 44, name: 'Uber', categoryId: categories[2].id, category: categories[2], paid: true, date: "28/11/2021", amount: "15,00", type: "expense" } as Entry,
      { id: 55, name: 'Cinema', categoryId: categories[1].id, category: categories[1], paid: false, date: "28/11/2021", amount: "30,00", type: "expense" } as Entry
    ]

    return { categories, entries }
  }
}