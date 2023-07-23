class User{
  constructor(name, duration, description, startDate, startTime, endDate, endTime ){
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
  }
}

module.exports = User;