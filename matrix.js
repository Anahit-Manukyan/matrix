// Using ES6
// The function will return 2d array, or a matrix (NxN) 

const matrix = (n) => { // Step 1: create an arrow function (ES6 format)
	const finalMatrix = []; // let's create an array

	// Step 2: initialize the variables
	let values = 1; // The values for the matrix from 1 to n*n 
	let startRow = 0; // start with 0 for the indexes 
	let startColumn = 0;   
	let endRow = n-1; // end with n-1 for the indexes  
	let endColumn = n-1; 

	// Step 3: make the array a matrix, for each element of an array add an array 
  	for (let i = 0; i < n; i++) {
	  finalMatrix.push([]); 
	}

	/* 
	Step 4: We go to the directions in the following order: 
		right -> down -> left -> up 
	In other words, we initialize the (only for the first loop) (n- initialized number; 
		Let i and j are indexes: i = 0, 1, ..., n-1; j = n-1, n-2, ..., 1, 0)
			1) top row- matrix[0][i]
			2) right column- matrix[i][n]
			3) bottom row- matrix[n][j]  
			4) left/first coulmn-matrix[0][j]
	*/ 


	// Step 4: the big loop; until the end of the initialized matrix 
	while (startColumn <= endColumn && startRow <= endRow) { // we loop until there is no "square" left to fill 
	
	// Step 5. go to the directions with separate loops and fill the numbers

	// Top row 
		for (let i = startColumn; i <= endColumn; i++) { // loop until get from the first to the last column 
			finalMatrix[startRow][i] = values; // take the first row and columns from 1 to n (same as indexes from 0 to n-1)
			values++; // the most important thing is to increase the values 
	  	}
	  	startRow++; // change to the 2nd row 

 	// Right column
		for (let i = startRow; i <= endRow; i++) { // loop until get from the first to the last row 
			finalMatrix[i][endColumn] = values; // take the first column, and rows from 1 to n-1  
			values++;
	  	}
	  	endColumn--; // change to the 2nd coulmn 

	// Bottom row
	  	for (let j = endColumn; j >= startColumn; j--) { // loop until get from the last coulmn to first column 
			// we loop from the biggest to smallest value 
			finalMatrix[endRow][j] = values; // take the last row as fixed, and all the coulmns of the row 
			values++;
	 	}
	  	endRow--;

	// Start column
	  	for (let j = endRow; j >= startRow; j--) {
			finalMatrix[j][startColumn] = values;  // take the first column and the all the rows (from last to first)
			values++;
		}
	  	startColumn++;
	} // end of the while loop 

	console.log(finalMatrix);
 	return finalMatrix; // end the function by returning the final matrix and  
}



  matrix(4); 


