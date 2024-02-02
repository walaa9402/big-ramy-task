import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    // loadComponent: () => import("./pages/layout/layout.component").then(m => m.LayoutComponent),
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      { path: "home", loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent) },
      {
        path: "e-books",
        children: [
          {
            path: "list",
            loadComponent: () => import("./pages/e-books/e-books-list/e-books-list.component").then(m => m.EBooksListComponent)
          },
          {
            path: "details/:id",
            loadComponent: () => import("./pages/e-books/e-books-details/e-books-details.component").then(m => m.EBooksDetailsComponent)
          },
        ]
      }
    ]
  },
];
