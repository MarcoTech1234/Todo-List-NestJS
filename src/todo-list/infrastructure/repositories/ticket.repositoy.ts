import { Ticket } from '@/todo-list/domain/entities/ticket.entity';
import { ITicketRepository } from '@/todo-list/domain/repositories/ticket.repository';
import { prismaClient } from '@/todo-list/infrastructure/configs/prisma.config';

export class TicketRepositoy implements ITicketRepository {
  async save(ticket: Ticket): Promise<void> {
    await prismaClient.ticket.upsert({
      where: { id: ticket.id },
      create: {
        id: ticket.id,
        date: ticket.date,
        status: ticket.status,
        topic: ticket.topic,
        createAt: ticket.createAt,
      },
      update: { status: ticket.status, topic: ticket.topic },
    });
  }
  delete(id: string): void {
    throw new Error('Method not implemented.');
  }
  get(id: string): Ticket {
    throw new Error('Method not implemented.');
  }
}
