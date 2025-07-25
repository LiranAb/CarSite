

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({

   name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   carName: { type: String, required: true },
   createdAt: { type: Date, default: Date.now }
})





 userSchema.methods.comparePassword = async function(candidatePassword) {
   return await bcrypt.compare(candidatePassword, this.password)
 }

export default mongoose.model('User', userSchema,'users')

