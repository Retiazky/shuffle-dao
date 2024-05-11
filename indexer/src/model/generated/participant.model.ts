import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Lesson} from "./lesson.model"

@Entity_()
export class Participant {
    constructor(props?: Partial<Participant>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Lesson, {nullable: true})
    lesson!: Lesson
}
