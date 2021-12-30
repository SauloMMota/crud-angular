import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //Chamada HTTP get no Angular com RXJS
  private readonly API = 'api/courses';

  //HttpClient é usado para fazer a comunicação entre cliente e servidor
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //Para testar o spinner loading
      //delay(5000),
      tap(courses => console.log(courses))
    );
  }
} 
