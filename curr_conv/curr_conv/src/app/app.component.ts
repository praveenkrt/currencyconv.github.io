import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_conveter';

  public num1!:number;
  public result?:number;
  
  calculate(from:string,to:string){
    if(from=="Usd" && to=="Inr")
    {
      this.result=this.num1*82.34
    }
    else if(from=="Inr" && to=="Usd")
    {
      this.result=this.num1*0.012
    }
    else if(from=="Inr" && to=="Eur")
    {
      this.result=this.num1*0.013
    }
   
    else if(from=="Usd" && to=="Eur")
    {
      this.result=this.num1*1.03
    }
    else if(from=="Eur" && to=="Inr")
    {
      this.result=this.num1*79.86
    }
    else if(from=="Eur" && to=="Usd")
    {
      this.result=this.num1*0.97
    }
    else if(from=="Inr"&& to=="Inr" || from=="Usd"&& to=="Usd" ||from=="Eur"&& to=="Eur" )
    {
      this.result=this.num1
    }

  }
}