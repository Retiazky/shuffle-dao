module.exports = class Data1715441256937 {
    name = 'Data1715441256937'

    async up(db) {
        await db.query(`CREATE TABLE "proposal" ("id" character varying NOT NULL, "proposer" text NOT NULL, "description" text NOT NULL, "against" numeric NOT NULL, "for" numeric NOT NULL, "abstain" numeric NOT NULL, "created_at" integer NOT NULL, "vote_start" numeric NOT NULL, "vote_end" numeric NOT NULL, "executed" boolean NOT NULL, "targets" text array NOT NULL, "values" text array NOT NULL, "calldatas" text array NOT NULL, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_08f784c7228e3721b5952756fc" ON "proposal" ("proposer") `)
        await db.query(`CREATE TABLE "participant" ("id" character varying NOT NULL, "lesson_id" character varying, CONSTRAINT "PK_64da4237f502041781ca15d4c41" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_93832686680c961a58b72110b6" ON "participant" ("lesson_id") `)
        await db.query(`CREATE TABLE "lesson" ("id" character varying NOT NULL, "style" text NOT NULL, "starts_at" numeric NOT NULL, "ends_at" numeric NOT NULL, "max_participants" numeric NOT NULL, "fee" numeric NOT NULL, "instructor_id" character varying, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b9d174502df46e4b5fd2387bf7" ON "lesson" ("instructor_id") `)
        await db.query(`CREATE TABLE "instructor" ("id" character varying NOT NULL, "name" text NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3aaed760d717a2b3d969b03570" ON "instructor" ("name") `)
        await db.query(`CREATE TABLE "badge_owner" ("id" character varying NOT NULL, "owner" text NOT NULL, "badge_id" numeric NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_f154e608da8338dca2dcb8f1f91" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6a7c38361a336f8c103898c760" ON "badge_owner" ("owner") `)
        await db.query(`CREATE INDEX "IDX_28950fceaac7a92cdef283d0f1" ON "badge_owner" ("badge_id") `)
        await db.query(`ALTER TABLE "participant" ADD CONSTRAINT "FK_93832686680c961a58b72110b6a" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_b9d174502df46e4b5fd2387bf7e" FOREIGN KEY ("instructor_id") REFERENCES "instructor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "proposal"`)
        await db.query(`DROP INDEX "public"."IDX_08f784c7228e3721b5952756fc"`)
        await db.query(`DROP TABLE "participant"`)
        await db.query(`DROP INDEX "public"."IDX_93832686680c961a58b72110b6"`)
        await db.query(`DROP TABLE "lesson"`)
        await db.query(`DROP INDEX "public"."IDX_b9d174502df46e4b5fd2387bf7"`)
        await db.query(`DROP TABLE "instructor"`)
        await db.query(`DROP INDEX "public"."IDX_3aaed760d717a2b3d969b03570"`)
        await db.query(`DROP TABLE "badge_owner"`)
        await db.query(`DROP INDEX "public"."IDX_6a7c38361a336f8c103898c760"`)
        await db.query(`DROP INDEX "public"."IDX_28950fceaac7a92cdef283d0f1"`)
        await db.query(`ALTER TABLE "participant" DROP CONSTRAINT "FK_93832686680c961a58b72110b6a"`)
        await db.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_b9d174502df46e4b5fd2387bf7e"`)
    }
}
