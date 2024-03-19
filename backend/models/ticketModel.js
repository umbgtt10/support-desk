const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    nameuser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },    
    product: {
        type: String,
        require: [true, 'Please select a product'],
        enum: ['iPhone', 'MacBookPro', 'iMac', 'iPad']
    },    
    description: {
        type: String,
        require: [true, 'Please enter a description of the issue'],
    },    
    status: {
        type: String,
        enum: ['new', 'open', 'closed'],
        default: 'new',
    },        
}, 
 {
     timestamps: true
 }
)

module.exports = mongoose.model('Ticket', ticketSchema)