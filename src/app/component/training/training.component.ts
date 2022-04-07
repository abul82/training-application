import { Component, OnInit } from '@angular/core';


interface TrainingModel{
  trainingRequestNo: number,
  trainingName:string,
  trainingMode:string,
  duration:number
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  promiseString: Promise<string>
  sorted=false
  constructor() {
   
   }
  reverseString = ''
  trainingArray : TrainingModel[]=[
    {trainingRequestNo:1,trainingName:"Angular",trainingMode:"online",duration:2},
    {trainingRequestNo:2,trainingName:"SAP",trainingMode:"online",duration:2},
    {trainingRequestNo:3,trainingName:"TIBCO",trainingMode:"offline",duration:2},
    {trainingRequestNo:4,trainingName:"Spring",trainingMode:"online",duration:2},
    {trainingRequestNo:5,trainingName:"Microservice",trainingMode:"offline",duration:2},
    {trainingRequestNo:6,trainingName:"Android",trainingMode:"offline",duration:2},
    {trainingRequestNo:7,trainingName:"IOS",trainingMode:"offline",duration:2},
    {trainingRequestNo:8,trainingName:"BBD",trainingMode:"online",duration:2},
  ]

  ngOnInit(): void {
  }

  sort(){
    if (!this.sorted) {
      this.sorted=true
      this.trainingArray = this.trainingArray.sort((a,b)=> a.trainingName.localeCompare(b.trainingName))
    } else {
      this.sorted=false
      this.trainingArray = this.trainingArray.sort((a,b)=> b.trainingName.localeCompare(a.trainingName))
    }
   
  }
  callPromise(){
    this.promiseString = this.getPromise(); 
  }
  getPromise():Promise<string>{
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Message From Promise!!"), 2000);//2000 represent 2-Seconds
    });
  }
}
