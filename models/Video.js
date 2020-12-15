import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  // n salvamos o video (arquivo) no banco de dados, só a url
  fileUrl: {
    type: String,
    required: 'File URl is required',
  },
  title: {
    type: String,
    required: 'Title is required',
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  coments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

//document shape
const model = mongoose.model('Video', VideoSchema);

export default model;
