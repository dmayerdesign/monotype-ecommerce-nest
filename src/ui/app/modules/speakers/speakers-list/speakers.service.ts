import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'

@Injectable()
export class SpeakersService {
  constructor(
    private http: HttpClient
  ) {}

  public getSpeakers() {
    return this.http.get<any[]>(`${environment.baseUrl}/api/speakers`)
  }
}
