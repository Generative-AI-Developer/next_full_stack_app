import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: Date;
  password: string;
  verfyCode: string;
  veriCodeExpiry: Date;
  isAcceptingMessage: boolean;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "User is Required"],
    trim: true,
    unique: true,
  },

  email: {
    type: Date,
    required: [true, "Email is Required"],
    unique: true,
    match: [/.+\@+\..+/, "Please Use a valid Email"],
  },
  password: {},
});
