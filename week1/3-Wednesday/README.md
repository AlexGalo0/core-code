# Week Challenges (Wednesday)

1.Learn about binary, decimal and hexadecimal numbers.
```javascript
Done.
```
2.Translate the year you were born to binary, decimal and hexadecimal (2001).
````
1.Binary: 11111010001
2.Hexadecimal:7D1
3.Decimal:2001
````
3.Translate 51966 into hexadecimal and binary

      	1. Binary: 1100101011111110
      	2. Hexadecimal: CAFE


4.Use the MIPS assembler.
  		
		 Done.

5.Make two programs.

	1. Create a program to add two numbers given by the user:
				.data
			number1: .asciiz "\nIngrese el primer numero: "
			number2: .asciiz "\nIngrese el segundo numero: "
			result_message: .asciiz "\nEl resultado es: "
		.text
			main:
			li $v0, 4
				la $a0, number1
				syscall

				li $v0, 5
				syscall

				move $t0, $v0

				li $v0, 4
				la $a0, number2
				syscall

				li $v0, 5
				syscall

				move $t1, $v0
				
				add $t2,$t0,$t1
				
				li $v0,4
				la $a0,result_message 
				syscall
				
				li $v0, 1
				move $a0, $t2
				syscall

	2. Make a program that prints my name.
				.data
			message: .asciiz "\Alex Galo!\n"
		.text
			main:
			li $v0, 4
			la $a0, message
			syscall
		