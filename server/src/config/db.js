import mongoose from 'mongoose'

export const connect = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true
  })

  mongoose.connection.once('open', () => console.log('DB connection successful!'))
}
