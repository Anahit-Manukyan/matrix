# matrix




By Anahit Manukyan 

 Need to print a 2d array, with the following order (for 4x4 matrix): 

 1  2  3 4			
12 13 14 5
11 16 15 6
10  9  8 7

--- The algorithm --- 

To understand it easier, we can imagine the matrix as a square inside a square inside a square... 
As a result, the most challenging step is to print a square. 
We can think of steps as drawing it from the upper left corner to the right, down, left, up. 
For making the square, we need to take the 4 sides by using rows and columns. 
	

Let i and j are indexes: 
			i = 0, 1, ..., n-1; 
			j = n-1, n-2, ..., 1, 0)
	1) top row- matrix[0][i]
	2) right column- matrix[i][n]
	3) bottom row- matrix[n][j]  
	4) left/first coulmn-matrix[0][j]


Let's think of the outermost "square" as the 1st one. After printing it, we can access to 2nd one, after the 2nd to the 3rd, and so on... 
As a result, we have one other loop for the squares. 


--- Steps --- 

Step 1: 
Since the matrix is NxN, we understand that our function needs to get one parameter- n, representing both columns and rows. 
As a result, for step one, we create a function. 


Step 2: 
Initialize the variables with their corresponding values for the start and endpoints. 
And, of course, the values that the empty array needs to get. 
The range of the values is from 1 to n*n, but we do not need it to be in an array form, not to have another loop, which will cost a running time. 
The list of variables: vales, startRow, startColumn, endRow, endColumn. 


Step 3: 
For the next step, we need to create an empty array, which later needs to become a matrix. So, we iterate through all the indexes, and instead of a value, 
add an array. 
 Here we get: 
	funalMatrix = [
		[], [], [],....,[] 
	] 

Step 4: 
Create a loop that ends if we access all the "squares," in other words, when the start column and end column are equal and start and end rows are equal.


Step 5: 
Inside the while loop, we make small loops for each side. 

	Top row: 
		loop until get from the first to the last column 
			fix the 1st row and all the cloumns columns from 1 to n (same as indexes from 0 to n-1)
			increase the values 
	change to the 2nd row 

	Right column: 
		loop until get from the first to the last row 
			fix the first column, and all the rows from 1 to n-1  
			increase the values 
	change to the 2nd coulmn 

	Bottom row: 
		loop until get from the last column to the first column (we loop from the biggest to smallest value)
			fix the last row, and go through all the coulmns of the row (from last to first)
			increase the vales
	change to the (n-1)-th row (index n-2)

	Start column 
		loop until get from the last to first row 
			fix the first column and the all the rows (from last to first)
			increase the vales
	change to the (n-1)-th column  (index n-2)

