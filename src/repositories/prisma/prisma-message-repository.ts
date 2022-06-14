import { MessageEntity } from '../../entities/message-entity';
import { prisma } from '../../prisma/client';
import {
  MessageRepository,
  MessageCreateData,
  MessageFindWhere,
} from '../message-repository';

export class PrismaMessageRepository implements MessageRepository {
  async create({
    message,
    targetDate,
    targetEmail,
  }: MessageCreateData): Promise<void> {
    await prisma.message.create({
      data: {
        message,
        targetDate,
        targetEmail,
      },
    });
  }

  async findMany(where: MessageFindWhere): Promise<MessageEntity[]> {
    return prisma.message.findMany({
      where: {
        targetDate: where.targetDate,
      },
    });
  }
}
