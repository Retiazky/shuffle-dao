import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class Proposal {
    constructor(props?: Partial<Proposal>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    proposer!: string

    @StringColumn_({nullable: false})
    description!: string

    @BigIntColumn_({nullable: false})
    against!: bigint

    @BigIntColumn_({nullable: false})
    for!: bigint

    @BigIntColumn_({nullable: false})
    abstain!: bigint

    @IntColumn_({nullable: false})
    createdAt!: number

    @BigIntColumn_({nullable: false})
    voteStart!: bigint

    @BigIntColumn_({nullable: false})
    voteEnd!: bigint
}
