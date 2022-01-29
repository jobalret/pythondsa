
// Javascript program to generate power set
	
	// str : Stores input string
	// curr : Stores current subset
	// index : Index in current subset, curr
	function powerSet(str,index,curr)
	{
		let n = str.length;

		// base case
		if (index == n)
		{
			return;
		}

		// First print current subset
		console.log(curr);

		// Try appending remaining characters
		// to current subset
		for (let i = index + 1; i < n; i++)
		{
			curr += str[i];
			powerSet(str, i, curr);

			// Once all subsets beginning with
			// initial "curr" are printed, remove
			// last character to consider a different
			// prefix of subsets.
			curr = curr.substring(0, curr.length - 1);
		}
	}
	
	// Driver code
	let str = "abc";
	let index = -1;
	let curr = "";
	powerSet(str, index, curr);
	
