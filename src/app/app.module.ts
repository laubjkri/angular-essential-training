// KL: This file lets angular know which modules are in the project



import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemService } from "./media-item.service";
import { lookupListToken, lookupLists } from "./providers";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    // MediaItemService // Will instantiate an instance of this service (no longer needed since we use the @Injectable in the class)
    { provide: lookupListToken, useValue: lookupLists} // value type service
  ],
  bootstrap: [
    AppComponent
  ],
  // Services

})
export class AppModule {}