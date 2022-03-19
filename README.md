## На backend реализовано rest api:

GET /users

Request: {}
Response: [{
	'id': 1,
	'skills': [{'id':1,’skill’:'javascript'},{'id':2,'skill':'reactJs'},{'id':3,'skill':’vueJs’}],
	'is_real_account': true
},
{
	'id': 2,
	'skills': [{'id':1,’skill’:'javascript'},{'id':4,'skill':'laravel'},{'id':5,'skill':’symfony’}],
	'is_real_account': true
}]
 
GET /products

Request: {}
Response: [{
	'id': 1,
	'title':'Good tea',
	'price': 10,
	'count': 13
},
{
	'id': 1,
	'title':'Good coffee,
	'price': 15,
	'count': 31
}]

## Задача: Реализовать вывод в табличном виде, используя Redux или Vuex.
### P.S. Для реакт в идеале компоненты должны быть разбиты на умные и глупые, чисто репрезентационные, и компоненты, в которых хранится логика.
