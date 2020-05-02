const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let petSchema = new Schema(
    {
        microchip: {
            type: String,
            required: true
        },
        petName: {
            type: String,
            required: true
        },
        petSpecies: {
            type: String,
            required: true
        },
        petBreed: {
            type: String,
            required: true
        },
        petColor: {
            type: String,
            required: true
        },
        petGender: {
            type: String,
            required: true
        },
        petBirth: {
            type: Date,
            required: true
        },
        specialNeeds: {
            type: String
        },
        vetInfo: {
            type: String
        },
        dateRV: {
            type: Date
        },
        implantedCompany: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        ownerName: {
            type: String,
            required: true
        },
        ownerPhone1: {
            type: String,
            required: true
        },
        membership: {
            type: String,
            default: "platinum",
            required: true
        }
    },
    {
        collection: 'pets',
        timestamps: {
            createdAt: 'create_at',
            updatedAt: 'updated_at'
        }
    }
);
module.exports = mongoose.model('petSchema', petSchema);