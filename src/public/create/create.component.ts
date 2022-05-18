import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Creation } from './models/creation';
import { CreationsService } from './service/creations.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  formValue!: FormGroup;
  creation: Creation = new Creation();
  message: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: CreationsService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  uploadCreation() {
    this.creation.name = this.formValue.value.name;
    this.creation.status = this.formValue.value.status;
    this.creation.image = this.formValue.value.image;

    this.api.postCreation(this.creation).subscribe(() => {
      this.message = true;
      new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        this.message = false;
      });
    });
  }
}
