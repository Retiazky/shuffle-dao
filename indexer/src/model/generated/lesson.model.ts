import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Instructor} from "./instructor.model"
import {Participant} from "./participant.model"

@Entity_()
export class Lesson {
    constructor(props?: Partial<Lesson>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    style!: string

    @Index_()
    @ManyToOne_(() => Instructor, {nullable: true})
    instructor!: Instructor

    @BigIntColumn_({nullable: false})
    startsAt!: bigint

    @BigIntColumn_({nullable: false})
    endsAt!: bigint

    @BigIntColumn_({nullable: false})
    maxParticipants!: bigint

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @OneToMany_(() => Participant, e => e.lesson)
    participants!: Participant[]
}
