import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  parentMsg:string= 'msg coming from the parent component'

  childMsg:string= 'msg coming from the child component via output '


  @Input() fromParent: any;

  @Output() parentFunction:EventEmitter<any>=new EventEmitter();

  form:any
  constructor(fb:FormBuilder){
    this.form=fb.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      password:['',[Validators.required]],

    })
  }

  get fc(){
    return this.form.controls;

  }

  ngOnInit(): void {
    
  }
  sendmsg(){
    let data={name:'dipin',age:27}
    this.parentFunction.emit(data)
  }
 




}
