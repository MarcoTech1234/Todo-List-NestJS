import { Comment } from '@/todo-list/domain/entities/comment.entity';
import { TicketStatus } from '@/todo-list/domain/enums/ticket-status.enum';

export class Ticket {
  constructor(
    public id: string,
    public topic: string,
    public date: Date,
    public createAt: Date,
    public status: TicketStatus,
    public comments: Comment[],
  ) {}
}
