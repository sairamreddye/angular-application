import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Document } from './document';

@Injectable()
export class RegistrationService {
	//URL for CRUD operations
	documentUrl = "http://localhost:3000/document";
	//Create constructor to get Http instance
	constructor(private http: HttpClient) {
	}

	//Fetch all documents


	getAllDocuments()
	// : Observable<Document[]> 
	{
		return this.http.get(this.documentUrl + "/get-document")
			// .pipe(
			// 	map(this.extractData),
			// 	catchError(this.handleError)
			// )
	}


	//Create document
	createDocument(document: Document)
	// : Observable<number> 
	{
		debugger
		let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
		return this.http.post(this.documentUrl + "/create-document", document, options)
			// .pipe(map(this.extractData).catchError());
			// .pipe(
			// 	map(this.extractData),
			// 	catchError(this.handleError)
			// )
	}
	//Fetch document by id
	getDocumentById(documentId: string)
	// : Observable<Document> 
	{
		let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
		return this.http.get(this.documentUrl + "/get-document-by-id?id=" + documentId)
			// .pipe(
			// 	map(this.extractData),
			// 	catchError(this.handleError)
			// )
	}
	//Update document
	updateDocument(document: Document)
	// : Observable<number> 
	{
		let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
		return this.http.put(this.documentUrl + "/update-document", document, options)
			// .pipe(
			// 	map(this.extractData),
			// 	catchError(this.handleError)
			// )
	}
	//Delete document	
	deleteDocumentById(documentId: string)
	// : Observable<number> 
	{
		let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
		return this.http.delete(this.documentUrl + "/delete-document?id=" + documentId)
			// .pipe(
			// 	map(this.extractData),
			// 	catchError(this.handleError)
			// )
	}
	// private extractData(res: HttpResponse<any>) {
	// 	let body = res.json();
	// 	return body;
	// }

	// private handleError(error: HttpErrorResponse) {
	// 	if (error.error instanceof ErrorEvent) {
	// 		console.error('An error occurred: ', error.error.message);
	// 	} else {
	// 		console.error(
	// 			`Backend returned code ${error.status}` + ` body was: ${error.message}`
	// 		);
	// 	}
	// 	return throwError('Something bad happened; please try again later.');
	// }
	// private handleError(error: Response) {
	//     console.log(error);
	//     return Observable.throw(error.json().error || 'Server error');
	// }
	// private extractData(res: Response) {
	// 	let body = res.json();
	// 	return body || {};
	// }
	// private handleError(error: HttpErrorResponse | any) {
	// 	let errMsg: string;
	// 	if (error instanceof Response) {
	// 		const body = error.json() || '';
	// 		const err = body.error || JSON.stringify(body);
	// 		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	// 	} else {
	// 		errMsg = error.message ? error.message : error.toString();
	// 	}
	// 	console.error(errMsg);
	// 	return Observable.throw(errMsg);
	// }
}