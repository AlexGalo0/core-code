# OOP Glosary 

## Concepts


1. *Abstraction*: It consists in just selecting the important details about something, and only show those details, in order to avoid adding unnecesary complexity.
2. *Inheritance*: Is using previously defined classes as a base to create another class that shares all of the atributes and methods that the _parent_ class has.
    We define a class as a parent when that class is extended in another one.
3. *Polymorphism*:  Is the diferent behavior that some object may have with the same methods calls.
4. *Encapsulation*: Is to hide the atributes and methods of a class. 
5. *Class*: Is some form of "blueprint" that help us to instanciate objects.
6. *Object*: Is the instance of a class, that help us represent objects of real life.
7. *Instance* : Is a case or ocurrence of anything, if we create a object School named School1, School1 is an ocurrence of School, an instance.
8. *Interface*: Is a form that help us generalize attributes and methods in classes that implements the interface, like a "contract".
9. *Access modifiers* : Keywords that help us  change the access to properties of classes . 
10. *Constructor* : Is the method that is called when we create an object, that help us specify how we do it.

## Example  
In this section , we will see how to use all of this concepts applied in *Typescript.*

### ¿How to create a *class* in Typescript*?
```typescript
    class Nombre_de_Clase {
     //code   
    }
```
### How to create an *object* in Typescript? 
```typescript
    //After creating a class named Animal
    let dog = new Animal()
```
### How to use *encapsulation* in Typescript? 
```typescript
    class Account {
        accountNumber: num , 
        private balance: num
        /* Since we declare balance private, isn´t accessible by other classes, we're encapsulating balance. */
    }
```
### How to use *access modifiers* in Typescript
The previous example of encapsulation uses access modifiers to change the behavior of the class, with the keyword
_private_
There are n keywords that help us modify the access to values in a class. 
1. public : It means that the attribute is accesible and modifiable by other classes.
2. private: It means that the attribute isn´t accesible by other classes.
3. protected: It means that the attribute is only accesible by the class that has the attribute (as in private) but also is accesible in the child classes that came from the parent class.
### How to use a Interface in Typescript.
```typescript
    interface Person() {
        name : string,
        age: number,
        sex: string,
        alive?: boolean
    }
```
### Instances
```typescript
    class Animal() {
        name:string,
        age:number
    }
    let dog = new Animal("coco",25)
```




