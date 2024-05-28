-- CreateTable
CREATE TABLE "carta" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_carta" TEXT NOT NULL,
    "poder_ataque" INTEGER NOT NULL,
    "poder_defesa" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carta_pkey" PRIMARY KEY ("id")
);
