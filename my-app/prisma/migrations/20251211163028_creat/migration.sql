-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "sold" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
