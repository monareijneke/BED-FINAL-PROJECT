import { PrismaClient } from "@prisma/client";

const deleteReview = async id => {
  const prisma = new PrismaClient();
  const review = await prisma.review.deleteMany({
    where: { id },
  });
  console.log(review.count);
  return review.count > 0 ? id : null;
};

export default deleteReview;
