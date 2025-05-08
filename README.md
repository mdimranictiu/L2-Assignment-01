# Assignment 01

 ## What are some differences between interfaces and types in TypeScript?

**Answer**
In typescript, type is used to define the shape of an object or data. To use it we use type the keyword.
Example: 

```
type Student={
name:string;
roll:number;
Id: number;
isPassed:boolean}

type UserID=string | number

```

By using interface keyword, in typescript is possible to define the shape of an object and data.
Example:
``` 
interface AuthorInfo {
name: string;
email: string:
AuthorID: number
}

```
### Difference between interface and type in Typescript 
1. Declaration Mergin: interface support mergining but type does not support mergining
2. Union: Union type is only able to define in type, not support in interface
3. extends and intersection: we can get another interface properties and method just using extends keyword like that interface X extends y{}. To occur same result in type, use intersection operator.
4. Primitive : In type we can use primitive directly but in interface we can not use it directly.

