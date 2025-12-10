-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "keyword" TEXT[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
