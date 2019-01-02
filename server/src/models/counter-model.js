import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true,
    unique: true
  },
  sequence: {
    type: Number,
    required: true,
    default: 1
  }
})

CounterSchema.statics.generateSeq = async function (collectionName) {
  return new Promise(async (res) => {
    const arr = await this.find({ collectionName }).limit(1)

    if (arr[0]) {
      arr[0].sequence++
      await arr[0].save()
      return res(arr[0].sequence)
    }

    await this.create({ collectionName })

    return res(1)
  })
}

const CounterModel = mongoose.model('Counter', CounterSchema)

export default CounterModel
