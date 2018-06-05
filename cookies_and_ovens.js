// Answer These Questions:
//
// - What are essential classes? class oven and class cakeDetail
// - What attributes will each class have? class oven will have attribute that contain object from cakeDetail and cake detail will have attribute cakeNmae and bakingTime
// - What interface will each class provide? 
// - How will the classes interact with each other? 
// - Which classes will inherit from others, if any?
//
//
// Your code here


class Cake{
	constructor(cakeName, cookedTime){
		this.cakeName = cakeName,
		this.cookedTime = cookedTime
	}
}

class Oven{
	constructor(cakeDetail){
		this.cake = cakeDetail
	}

	bake(time){
		let minute = 5
		for(let i = 5; i <= time; i+=5){
			if(minute < this.cake.cookedTime-5){
				console.log(`Kue ${this.cake.cakeName}, menit ke ${minute} : mentah`)
			} else if(minute === this.cake.cookedTime-5){
				console.log(`Kue ${this.cake.cakeName}, menit ke ${minute} : hampir matang`)
			} else if(minute === this.cake.cookedTime){
				console.log(`Kue ${this.cake.cakeName}, menit ke ${minute} : matang`)
			} else {
				console.log(`Kue ${this.cake.cakeName}, menit ke ${minute} : hangus`)
			}

			minute += 5
		}
	}
}

var chocolateCake = new Cake('coklat', 20)
var nutCake = new Cake('kacang', 30)
var cheeseCake = new Cake('keju', 35)


var bakingcoklat = new Oven(chocolateCake)
bakingcoklat.bake(30)
console.log()
var bakingkacang = new Oven(nutCake)
bakingkacang.bake(30)
console.log()
var bakingkeju = new Oven(cheeseCake)
bakingkeju.bake(30)
