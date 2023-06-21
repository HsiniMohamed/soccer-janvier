import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() matchInput:any;
  constructor() { }

  ngOnInit() {
  }
scoreStyle(scoreOne,scoreTwo){
if(scoreOne>scoreTwo){
  return ["greenyellow","Win"]
}else if(scoreOne<scoreTwo){
  return ["orange","Loss"]
}else {
  return ["blue","Draw"]
}
}

}
