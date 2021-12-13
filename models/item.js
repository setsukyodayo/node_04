exports.values =[
 {id:1,name:'コーヒー',price:150},
 {id:2,name:'レッドブル',price:180},
 {id:3,name:'カルピス',price:120},
]


exports.find = (id) => {
    return this.values.find(value => value.id == id)
}