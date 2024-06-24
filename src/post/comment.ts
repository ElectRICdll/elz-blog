import { User } from '@blog/user'
import { Post } from './post'

export interface Comment {
  id: number
  author: User
  content: string
  created_at: string
  edited_at: string
  parentPost: Post
  parentComment?: Comment
  replies?: Comment[]
}
