import { Schema, model, models } from 'mongoose';

const shortenedUrlSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ShortenedUrl = models.shortenedUrl || model('shortenedUrl', shortenedUrlSchema);

export default ShortenedUrl;
