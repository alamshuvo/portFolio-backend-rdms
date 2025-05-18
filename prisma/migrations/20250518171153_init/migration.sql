-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
