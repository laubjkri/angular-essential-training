// KL: This file lets angular know which modules are in the project

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemService } from "./media-item.service";
import { lookupListToken, lookupLists } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { MockXHRBackend } from "./mock-xhr-backend";
import { routing } from "./app.routing";
import { CategoryListComponent } from "./category-list.component";

@NgModule({
  imports: [
    BrowserModule,    
    HttpClientModule,
    routing
    // new-item.module has been changed to lazy loading via routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    CategoryListComponent,
    FavoriteDirective,
    CategoryListPipe,    
  ],
  providers: [
    // MediaItemService // Will instantiate an instance of this service (no longer needed since we use the @Injectable in the class)
    { provide: lookupListToken, useValue: lookupLists }, // value type service
    { provide: HttpXhrBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ],
  // Services

})
export class AppModule {}