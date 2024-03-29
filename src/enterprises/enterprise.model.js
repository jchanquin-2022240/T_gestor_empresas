import mongoose from 'mongoose';

const EnterpriseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required"]
    },
    impact: {
        type: String,
        required: [true, "The impact is required"]
    },
    experience: {
        type: Number,
        required: [true, "The experience is required"]
    },
    category: {
        type: String,
        required: [true, "The category is required"]
    },
    partner: {
        type: String,
        required: [true, "The partner is required"]
    },
    status: {
        type: Boolean,
        default: true
    }

});

export default mongoose.model('Enterprise', EnterpriseSchema);