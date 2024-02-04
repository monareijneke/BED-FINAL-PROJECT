import { PrismaClient } from "@prisma/client";

const getBookings = async () => {
  const prisma = new PrismaClient();
  const bookings = await prisma.booking.findMany({
    where: {},
  });
  return bookings;
};

export default getBookings;
