const UserConverter = require('../src/userConverter')
const User = require('../src/user')
const NewUser = require('../src/newUser')

describe("UserConverter",()=>{

  let user;

  beforeAll(()=>{
    user = new UserConverter()
  })

  it("should return the user  name capitalized",()=>{
    expect(user.capitalize("ana rodrigues")).toBe("Ana Rodrigues")
  })

  it("should convert the duration of the interview to hh:mm format",()=>{
    expect(user.minuteConverter("90")).toBe("01:30")
  })

  it("should convert the duration of the interview to hh:mm format",()=>{
    expect(user.minuteConverter("65")).toBe("01:05")
  })

  it("should convert the duration of the interview to hh:mm format",()=>{
    expect(user.minuteConverter("665")).toBe("11:05")
  })

  it("should truncated the description to 40 chacaracters", ()=>{

    expect(user.truncate("hello word, my name is Ana and Im 20 years old"))
    .toBe("hello word, my name is Ana and Im 20 y..")
  })

  it("should return the word as-is when is less than 40 character", ()=>{

    expect(user.truncate("hello word"))
    .toBe("hello word")
  })

  it("should received date and time and return in a DateTime Formatte",()=>{

    expect(user.dateFormatte("2022-05-20", "01:30")).toBe("2022-05-20T01:30")
  })

  it("should received date and time and return in a DateTime Formatte",()=>{

    expect(user.dateFormatte("2022-09-20", "05:30")).toBe("2022-09-20T05:30")
  })

  it("should convert user to a new user",()=>{

    const oldUser = new User("ana rodrigues", "60", "hello", "2022-07-20", "13:00", "2022-07-20", "13:30")
    const userExpected = new NewUser("Ana Rodrigues", "01:00", "hello", "2022-07-20T13:00", "2022-07-20T13:30" )

    expect(user.convert(oldUser)).toEqual(userExpected)

  })
})