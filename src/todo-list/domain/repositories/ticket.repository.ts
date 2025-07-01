import { Ticket } from '@/todo-list/domain/entities/ticket.entity';

export interface ITicketRepository {
  save(ticket: Ticket): void;
  delete(id: string): void;
  get(id: string): Ticket;
}
