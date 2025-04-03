var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)

//FOR IN(valores q estão em a)
console.log('for in')
console.log("----------")
for (let val in a)
  console.log('--> ' + val)
console.log("---------- \n")

//FOR OF valores de a
console.log('for of')
console.log("----------")
for (let val of a)
  console.log('--> ' + val)
console.log("---------- \n")

//forma indexada
console.log('for (;;))-')
console.log("----------")
for (let i=0; i<a.length; i++)
  console.log('--> ' + i + " : " + a[i])
console.log("---------- \n")
