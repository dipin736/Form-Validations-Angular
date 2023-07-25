import { Component} from '@angular/core';
import { NgForm ,FormControl,FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'myapp';

  parentMsg:string= 'msg coming from the parent component';
  name=''
  receivemsg(data:any){
    console.log(data)
    this.name=data.name

  }
  
  bool:boolean=true;

  postTitle:any;
  postDetails:any;
  imageUrl:any;
  postUrl:any;
  addBackground:boolean=true;

  name1:string=''
  email:string=''
  address:string=''

  userArry:Array<any>=[];

  onClk(){
    this.userArry.push({
      'name1':this.name1,
      'email':this.email,
      'address':this.address

    })
    console.log(this.userArry)

}
onDlt(i:any){
  this.userArry.splice(i,1)
}


onSubmit(f:NgForm){
  console.log(f.value)
}







form: FormGroup;

emailreg:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

constructor() {
  this.form = new FormGroup({
    FullName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailreg)
    ]),
    Address: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    skills:new FormArray([])
  });
} 

onSubmit1(){
  console.log(this.form.value)
}

get Skills(){
  return (this.form.get("skills") as FormArray)
}
addskills(skills:HTMLInputElement){
  this.Skills.push(
    new FormControl(skills.value)
  )
  skills.value=''
  console.log(this.form.value)
}

Remove(i:any){
  this.Skills.removeAt(i)
}

}
