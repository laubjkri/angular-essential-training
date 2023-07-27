import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent /*implements OnInit*/ {
  public form: FormGroup = new FormGroup({
    medium: new FormControl("Movies"),
    name: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern("[\\w\\-\\s\\/]+")
    ])),      
    category: new FormControl(""),
    year: new FormControl("", (control) => this.yearValidator(control as FormControl))
  });

  ngOnInit(): void {
    this.form = new FormGroup({
      medium: new FormControl("Movies"),
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      category: new FormControl(""),
      year: new FormControl("", (control) => this.yearValidator(control as FormControl))
    });
  }
  
  // OnInit will do certain stuff at the right "angular time"

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
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
