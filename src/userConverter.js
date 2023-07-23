const NewUser = require('../src/newUser')
class UserConverter{
  constructor(){

  }

  convert(user){
    const newUser = new NewUser()

    newUser.name = this.capitalize(user.name)
    newUser.duration = this.minuteConverter(user.duration)
    newUser.description = this.truncate(user.description)
    newUser.startDateTime = this.dateFormatte(user.startDate, user.startTime)
    newUser.endDateTime = this.dateFormatte(user.endDate, user.endTime)

    return newUser

    
  }

  capitalize(name){

    return name.split(" ").map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1)

    }).join(" ")
  }

  minuteConverter(minutes){
    let hours = Math.floor(minutes / 60)
    let remainder = minutes % 60

    if(hours < 10){
      hours = '0' + hours
    }

    if(remainder < 10){
      remainder = '0' + remainder
    }

    return hours + ":" + remainder
  }
  truncate(word){
    if(word.length > 40){
     return word.slice(0,38) + ".."
      
    }
    return word
  }

  dateFormatte(date, time){
    return date + "T" + time
  }
}

module.exports = UserConverter
