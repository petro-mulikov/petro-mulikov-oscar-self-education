import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getRandomDrink(){
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe(data => {
      console.log(data)
    })
  }


}
