function generateRandomArray(size, min, max) {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return arr
}

function splitArray(arr) {
  const evenIndexArray = []
  const oddIndexArray = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndexArray.push(arr[i])
    } else {
      oddIndexArray.push(arr[i])
    }
  }
  return { evenIndexArray, oddIndexArray }
}

function calculateStats(arr) {
  let total = 0
  let min = arr[0]
  let max = arr[0]
  for (let curValue of arr) {
    total += curValue
    if (curValue < min) {
      min = curValue
    }
    if (curValue > max) {
      max = curValue
    }
  }
  const average = total / arr.length
  return { min, max, total, average }
}

function compareStats(statsEven, statsOdd) {
  let comparison = {}

  comparison.min =
    statsEven.min > statsOdd.min
      ? 'Array genap memiliki nilai Min lebih besar '
      : 'Array ganjil memiliki nilai Min lebih besar '
  comparison.max =
    statsEven.max > statsOdd.max
      ? 'Array genap memiliki nilai Max lebih besar'
      : 'Array ganjil memiliki nilai Max lebih besar'
  comparison.total =
    statsEven.total === statsOdd.total
      ? 'Total memiliki nilai sama antara array genap dan ganjil'
      : 'Total berbeda antara array genap dan ganjil'
  comparison.average =
    statsEven.average > statsOdd.average
      ? 'Array genap memiliki rata-rata lebih besar '
      : 'Array ganjil memiliki rata-rata lebih besar '

  return comparison
}

function main() {
  const randomArray = generateRandomArray(100, 1, 50)
  const { evenIndexArray, oddIndexArray } = splitArray(randomArray)

  const statsEven = calculateStats(evenIndexArray)
  const statsOdd = calculateStats(oddIndexArray)

  const comparison = compareStats(statsEven, statsOdd)

  console.log('Array 100 angka random:', randomArray)
  console.log('Array Index genap:', evenIndexArray)
  console.log('Array Index ganjil:', oddIndexArray)
  console.log('Statistik Array Index Genap:', statsEven)
  console.log('Statistik Array Index Ganjil:', statsOdd)
  console.log('Perbandingan nilai:', comparison)
}

main()
