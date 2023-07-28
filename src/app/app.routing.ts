import { Routes, RouterModule } from "@angular/router";
import { MediaItemListComponent } from "./media-item-list.component";

// Order matters for these routes
// Fx the :medium parameter would be used if it was first, even if /add was accessed
const appRoutes: Routes = [
    {
        // Lazy load of new-item
        path: "add",
        loadChildren: () => import("./new-item/new-item.module").then(m => m.NewItemModule)
    },
    { path: ":medium", component: MediaItemListComponent }, // URL parameter
    { path: "", redirectTo: "all", pathMatch: "full"} // Default route
];

export const routing = RouterModule.forRoot(appRoutes);