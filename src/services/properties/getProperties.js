import { PrismaClient } from "@prisma/client";

const getProperties = async () => {
  const prisma = new PrismaClient();
  const property = await prisma.property.findMany({
    where: {},
  });
  return property;
};

export default getProperties;
