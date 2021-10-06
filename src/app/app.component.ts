import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formHash!: FormGroup;

  title = 'cifrado';

  messageHash: any;

  md5 = new Md5();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.createForm();

  }

  ngDoCheck(): void {
    // console.log("Sin hashear -->",this.formHash.get('message')?.value);
    // console.log("Con hashear -->",this.md5.appendStr(this.formHash.get('message')?.value).end());
    this.messageHash = this.md5.appendStr(this.formHash.get('message')?.value).end()
  }

  createForm(): void {
    this.formHash = this.fb.group({
      message: [''],
      messageDecrpit: [{value: '', disabled: true}],
    });
  }


}
