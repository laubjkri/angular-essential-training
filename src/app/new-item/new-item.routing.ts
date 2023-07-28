import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";

const newItemRoutes: Routes = [
    {path: "", component: MediaItemFormComponent} // empty path since we already specified /add in app.routing.ts
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);