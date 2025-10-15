import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, required: true },
    tag: { type: [String], default: [] },
    gitUrl: { type: String, default: '' },
    previewUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);



