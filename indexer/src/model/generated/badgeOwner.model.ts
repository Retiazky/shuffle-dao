import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class BadgeOwner {
    constructor(props?: Partial<BadgeOwner>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    owner!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    badgeId!: bigint

    @BigIntColumn_({nullable: false})
    amount!: bigint
}
