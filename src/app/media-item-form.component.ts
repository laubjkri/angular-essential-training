import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import { lookupListToken } from "./providers";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    medium: new FormControl("Movies"),
    name: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern("[\\w\\-\\s\\/]+")
    ])),      
    category: new FormControl(""),
    year: new FormControl("", (control) => this.yearValidator(control as FormControl))
  });


  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService, // angular will pass the media item service here when instantiated
    @Inject(lookupListToken) public lookupLists: any // value based injection
  ) { }


  // OnInit will do constructor stuff at the right "angular time"
  ngOnInit(): void {
    this.form = this.formBuilder.group({ // new FormGroup({
      medium: this.formBuilder.control("Movies"), // new FormControl("Movies")
      name: this.formBuilder.control("", Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      category: this.formBuilder.control(""),
      year: this.formBuilder.control("", (control) => this.yearValidator(control as FormControl))
    });
  }
  

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }

  yearValidator(control: FormControl) {
    
    // Validators return error objects if there are any errors
    // Dont return any errors if input field is empty.
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    }
    else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      }      
    }

  }



}
