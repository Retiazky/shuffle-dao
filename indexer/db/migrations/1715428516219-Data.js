module.exports = class Data1715428516219 {
    name = 'Data1715428516219'

    async up(db) {
        await db.query(`ALTER TABLE "proposal" ADD "executed" boolean NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "proposal" DROP COLUMN "executed"`)
    }
}
