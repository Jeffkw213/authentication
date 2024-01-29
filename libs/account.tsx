import mongoose, {Schema, mongo} from 'mongoose'

const accountSchema = new Schema({
    username: String,
    first: String,
    last: String,
    email: String,
    password: String
})

//Creating Models. 
//The OR operator is to ensure that the model is not created every single time we hit the API route in Nextjs
const Account = mongoose.models.Account || mongoose.model("Account", accountSchema)

export default Account