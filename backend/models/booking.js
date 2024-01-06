const mongoose=require('mongoose')
const bookingSchema=mongoose.Schema({
    vehicle:{
        type: String,required:true
    },
    vehicleid:{
        type:String,required:true
    },
    userid:{
        type:String,required:true
    },
    fromdate:{
        type:String,required:true
    },
    todate:{
        type:String,required:true
    },totalamount:{
        type:Number,required:true
    },
    totaldays:{
        type:Number,required:true
    },
    transcationId:{
        type:String,required:true
    },
    status:{
        type:String,required:true,default:'booked'
    }
},
{
    timestamps:true,

})
const bookingmodel=mongoose.model('bookings',bookingSchema);
module.exports=bookingmodel


