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
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
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
  password: {
    type: String,
    required: [true, "Password is Required"],
  },

  verifyCode: {
    type: String,
    required: [true, "Verify code is Required"],
  },

  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code Expiry is Required"],
  },

  isVerified: {
    type: Boolean,
    default: true,
  },

  messages: [MessageSchema],
});
