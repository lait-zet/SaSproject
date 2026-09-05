let table = [
  [0, 1, 3],
  [5, 3, 6],
  [6, 4, 0]
];
let max = table[0][0]
for (let i = 0 ; i < table.length ; i++)
{
    for (j = 0 ; j < table.length ; j++)
    {
        if(table[i][j] > table[i][j + 1])
        {
            temp = table[i][j]
            table[i][j + 1] = table[i][j]
            table[i][j] = temp
        }
    }
}
console.log(table)