module.exports = class Data1715423262307 {
    name = 'Data1715423262307'

    async up(db) {
        await db.query(`CREATE TABLE "proposal" ("id" character varying NOT NULL, "proposer" text NOT NULL, "description" text NOT NULL, "against" numeric NOT NULL, "for" numeric NOT NULL, "abstain" numeric NOT NULL, "created_at" integer NOT NULL, "vote_start" numeric NOT NULL, "vote_end" numeric NOT NULL, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_08f784c7228e3721b5952756fc" ON "proposal" ("proposer") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "proposal"`)
        await db.query(`DROP INDEX "public"."IDX_08f784c7228e3721b5952756fc"`)
    }
}
