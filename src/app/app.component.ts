import { Component } from "@angular/core";

@Component({
  
  // The selector searches the DOM for an element with the name of the selector, and then injects the component here.
  selector: "app-root",
  // template: `
  // <h1>My App</h1>
  // <p>Keeping track of the media I want to watch.</p>
  // `
  templateUrl: "./app.component.html",
  // styles: [`
  //   h1 {color: #ffffff}
  //   .description {
  //     font-style: italic;
  //     color: green;      
  //   }  
  // `],
  styleUrls: ["./app.component.css"]
  
})
export class AppComponent{
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  }
  
  onMediaItemDelete(mediaItem: any) {
    
  }
}