# jsonQuery

<h3>Getting started</h3>

<b>Add a reference to jQuery library.</b>

```html
<script src="js/jquery-2.1.4.min.js"></script>
```
<b>Add a reference to jsonQuery library.</b>

```html
<script src="js/jsonQuery.js"></script>
```

<h3>Options reference</h3>
<b>extend:</b> Add different json data
```javascript
myJsonObject.extend({ 'user': 'tom',  'age': 41, 'active': true , 'nSon':10});
```

<b>extendData:</b> Add different json data to other json
```javascript
myJsonObject.extendData({ 'user': 'tom',  'age': 41, 'active': true , 'nSon':10},otherJsonObject);
```

<b>find:</b> Find elements from json data matched with the json param
```javascript
myJsonObject.find({name:'sofia'})
```

<b>where:</b> return data matched with the json parameter. Each condition is  evaluated as a "where (condition 1 and condition 2 and ,...)" clause.
```javascript
myJsonObject.where(
{
	major:{'age':'0','nSon':4},
	equal:{'active':true},
	minor:{'nSon':40},
	majorOrEqual:{'nSon':10},
	minorOrEqual:{'nSon':40},
});
```
<b>whereOr:</b> return data matched with the json parameter. Each condition is  evaluated as a "where (condition 1 or condition 2 or ,...)" clause.
```javascript
myJsonObject.whereOr(
{
	major:{'age':'0','nSon':4},
	equal:{'active':true},
	minor:{'nSon':40},
	majorOrEqual:{'nSon':10},
	minorOrEqual:{'nSon':40},
});
```


<b>select:</b>Select object from json
```javascript
myJsonObject.select(['user','sSon']);
```


<h3>Executing queries in json</h3>

```javascript
	var users = [
					{ 'user': 'jon',  'age': 40, 'active': true , 'nSon':10},
					{ 'user': 'susan',    'age': 40, 'active': false , 'nSon':5},
					{ 'user': 'james', 'age': 1,  'active': true, 'nSon':8 }
					];	
```

<b>Initialize object:</b>
```javascript
var jq=new jsonQuery(users);
```
<b>1° example. Simple where query to filter json:</b>

```javascript
var re=jq.where(
{
	major:{'age':'20','nSon':7},
	equal:{'active':true}				
});
```
<b>Result:</b>
```json
[{"user":"jon","age":40,"active":true,"nSon":10}]
```

<b>2° example.  Where query to filter json:</b>

```javascript
	var re1=jq.where(
	{
		major:{'age':'0','nSon':4},
		equal:{'active':true},
		minor:{'nSon':40},
		majorOrEqual:{'nSon':10},
		minorOrEqual:{'nSon':40}
	});
```
<b>Result:</b>
```json
[
	{
		"user": "jon",
		"age": 40,
		"active": true,
		"nSon": 10
	}
]
	
```


<b>3° example. Add data to json if not exist:</b>

```javascript
var re2=jq.extendData({ 'user': 'carol',  'age': 40, 'active': true , 'nSon':10},users);
```
<b>Result:</b>
```json
[
	{
		"user": "jon",
		"age": 40,
		"active": true,
		"nSon": 10
	},
	{
		"user": "susan",
		"age": 40,
		"active": false,
		"nSon": 5
	},
	{
		"user": "james",
		"age": 1,
		"active": true,
		"nSon": 8
	},
	{
		"user": "carol",
		"age": 40,
		"active": true,
		"nSon": 10
	}
]
	
```


<b>4° example. Add data to json if not exist:</b>

```javascript
var re2_2=jq.extend({ 'user': 'tom',  'age': 41, 'active': true , 'nSon':10});
```
<b>Result:</b>
```json
[
	{
		"user": "jon",
		"age": 40,
		"active": true,
		"nSon": 10
	},
	{
		"user": "susan",
		"age": 40,
		"active": false,
		"nSon": 5
	},
	{
		"user": "james",
		"age": 1,
		"active": true,
		"nSon": 8
	},
	{
		"user": "tom",
		"age": 41,
		"active": true,
		"nSon": 10
	}
]
	
```



<b>5° example. whereOr each condition is evaluated as "or" to the following condition:</b>

```javascript
	var re3=jq.whereOr(
	{
		major:{'age':'20','nSon':7},
		equal:{'active':true}				
	});
```
<b>Result:</b>
```json
		
[
	{
		"user": "jon",
		"age": 40,
		"active": true,
		"nSon": 10
	},
	{
		"user": "susan",
		"age": 40,
		"active": false,
		"nSon": 5
	},
	{
		"user": "james",
		"age": 1,
		"active": true,
		"nSon": 8
	}
]
	
```


<b>6° example. whereOr each condition is evaluated as "or" to the following condition:</b>

```javascript
		var re4=jq.whereOr(
		{
			major:{'age':'39','nSon':10},
			equal:{'user':'fred'}				
		});
```
<b>Result:</b>
```json
		
[
	{
		"user": "jon",
		"age": 40,
		"active": true,
		"nSon": 10
	},
	{
		"user": "susan",
		"age": 40,
		"active": false,
		"nSon": 5
	}
]
	
```

<b>7° example.Select object from json:</b>

```javascript
	var re5=jq.select(['user','sSon']);
```
<b>Result:</b>
```json
[
	{
		"user": "jon"
	},
	{
		"user": "susan"
	},
	{
		"user": "james"
	}
]
	
```

<b>8° example.Select object from json and applying where clause:</b>

```javascript
	var re5=jq.select(['user','sSon']);
```
<b>Result:</b>
```json
[
	{
		"user": "jon",
		"age": 40
	}
]
	
```

<b>Complex json data</b>
```javascript
	var users2 = [
		{ "user": { "id": 100, "alias": "carol" }, "text": "good moring",name:"carol", age:20 },
		{ "user": { "id": 130, "alias": "jon" }, "text": "bay bay",name:"jon" , age:20},
		{ "user": { "id": 155, "alias": "maria" }, "text": "see you",name:"maria" , age:30},
		{ "user": { "id": 301, "alias": "lucas" }, "text": "helloo ..." ,name:"lucas", age:10}
	];
	
```
<b>Initialize object:</b>
```javascript
var jq2=new jsonQuery(users2);
```

<b>9° example.Select object from json:</b>

```javascript
	var rec1=jq2.select(['user','sSon']);
```
<b>Result:</b>
```json
[
	{
		"user": {
			"id": 100,
			"alias": "carol"
		},
		"name": "carol"
	},
	{
		"user": {
			"id": 130,
			"alias": "jon"
		},
		"name": "jon"
	},
	{
		"user": {
			"id": 155,
			"alias": "maria"
		},
		"name": "maria"
	},
	{
		"user": {
			"id": 301,
			"alias": "lucas"
		},
		"name": "lucas"
	}
]
	
```

<b>10° example.Where clause:</b>

```javascript
	var rec6=jq2.where(
	{
		major:{'user':{"id":100}},
		minor:{'user':{"id":300}, age:21},				  
	});
		
```
<b>Result:</b>
```json
			
[
	{
		"user": {
			"id": 130,
			"alias": "jon"
		},
		"text": "bay bay",
		"name": "jon",
		"age": 20
	}
]
```
<b>Other complex json data</b>
```javascript
var users3 = [
		{ "user": { "id": 301, "alias": "sofi",spouse:{age:50, name:'sofia'} }, "text": "hello" ,name:"sofia", age:10},
		{ "user": { "id": 100, "alias": "jon",spouse:{age:90, name:'jon'} }, "text": "bay bay",name:"jon", age:22 },
		{ "user": { "id": 101, "alias": "carol",spouse:{age:91, name:'carol'} }, "text": "see you",name:"carol", age:22 },
		{ "user": { "id": 130, "alias": "tom",spouse:{age:30, name:'tom'} }, "text": "bay",name:"tom" , age:20},
		{ "user": { "id": 155, "alias": "maria",spouse:{age:40, name:'mario'} }, "text": "good bay",name:"maria" , age:30}					  
];
					
	
```

<b>Initialize object:</b>
```javascript
var jq3=new jsonQuery(users3);
```

<b>11° example.Where clause:</b>

```javascript
	var rec8=jq3.where(
	{
		major:{'user':{"id":100}},
		minor:{'user':{"id":300,spouse:{age:40}}, age:21},
		equal:{'user':{spouse:{name:'sofia'}}},				  
	});
		
```
<b>Result:</b>
```json
	[]
```

<b>12° example.whereOr each condition is evaluated as "or" to the following condition:</b>

```javascript
	var rec11= jq3.whereOr(
	{ 
		major:{'user':{"id":101}},
		minor:{user:{id:31,spouse:{age:91}}, age:20},				  
	});
		
```
<b>Result:</b>
```json
[
	{
		"user": {
			"id": 301,
			"alias": "sofi",
			"spouse": {
				"age": 50,
				"name": "sofia"
			}
		},
		"text": "hello",
		"name": "sofia",
		"age": 10
	},
	{
		"user": {
			"id": 130,
			"alias": "tom",
			"spouse": {
				"age": 30,
				"name": "tom"
			}
		},
		"text": "bay",
		"name": "tom",
		"age": 20
	},
	{
		"user": {
			"id": 155,
			"alias": "maria",
			"spouse": {
				"age": 40,
				"name": "mario"
			}
		},
		"text": "good bay",
		"name": "maria",
		"age": 30
	},
	{
		"user": {
			"id": 100,
			"alias": "jon",
			"spouse": {
				"age": 90,
				"name": "jon"
			}
		},
		"text": "bay bay",
		"name": "jon",
		"age": 22
	}
]
```
