import mongoose from 'mongoose'
import * as utils from '../utils'
import omit from 'lodash/omit'

const UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1
  },
  status: {
    type: Number,
    default: 1
  },
  rememberMe: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
})

// Methods
UserSchema.methods.clear = function () {
  return omit(this.toObject(), ['password', '_id', '__v', 'rememberMe'])
}

UserSchema.methods.generateId = function () {
  return new Promise(async (res, rej) => {
    const lastUser = await this.model('User').find({}, 'userId').sort('-userId').limit(1).lean()

    if (lastUser[0]) {
      const newUserId = lastUser[0].userId + 1
      return res(newUserId)
    }

    return res(1)
  })  
}

UserSchema.methods.checkPassword = function (password) {
  return new Promise(async (res, rej) => {
    const isValid = await utils.compare(password, this.password)
    if (isValid) {
      return res(true)
    }

    return rej({ type: 'wrong', messages: ['Wrong password'], name: 'password' })
  })
}
// Statics
UserSchema.statics.getById = function (userId) {
  return new Promise(async (res, rej) => {
    const arr = await this.find({ userId }).limit(1)

    if (arr[0]) {
      return res(arr[0])
    }

    return rej({ type: 'not_found', messages: ['User not found!'], name: 'userId' })
  })
}

UserSchema.statics.getByUsername = function (username) {
  return new Promise(async (res, rej) => {
    const match = await this.find({ username }).limit(1)

    if (match[0]) {
      return res(match[0])
    }

    return rej({ type: 'not_found', messages: ['User not found!'], name: 'username' })
  })
}

UserSchema.statics.getByEmail = function (email) {
  return new Promise(async (res, rej) => {
    const match = await this.find({ email }).limit(1)

    if (match[0]) {
      return res(match[0])
    }

    return rej({ type: 'not_found', messages: ['User not found!'], name: 'email' })
  })
}

UserSchema.statics.isAvailable = function ({ username, email }) {
  return new Promise(async (res, rej) => {
    const match = await this.find({$or: [{email: {$regex: new RegExp(`^${email}$`, 'i')}}, {username: {$regex: new RegExp(`^${username}$`, 'i')}}]}, 'email username').limit(2).lean()

    if (match.length === 0) {
      return res(true)
    }

    const errors = new Set()

    match.forEach(doc => {
      if (doc.email === email) {
        errors.add({ type: 'duplicate', messages: [`This email is not available: ${email}`], name: 'email' })
      }

      if (doc.username === username) {
        errors.add({ type: 'duplicate', messages: [`This username is not available: ${username}`], name: 'username' })
      }
    })

    return rej(Array.from(errors))
  })
}

// Hooks
UserSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await utils.encrypt(this.password)
    this.userId = await this.generateId()
  }
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
