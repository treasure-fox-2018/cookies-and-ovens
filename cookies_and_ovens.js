// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
let fs = require('fs')


"use strict"

class Cookie {
  constructor() {
    this.status = 'mentah'
  }

  bake() {
    this.status = 'sedang dimasak'
  }
}

class PeanutButter extends Cookie {
  constructor() {
    this.peanut_count = 100
  }
}

class Cohocolatechip extends Cookie {
  constructor() {
    this.choc_chip_count = 200
  }
}