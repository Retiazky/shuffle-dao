import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, BooleanColumn as BooleanColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {Lesson} from "./lesson.model"

@Entity_()
export class Instructor {
    constructor(props?: Partial<Instructor>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @StringColumn_({nullable: false})
    name!: string

    @BooleanColumn_({nullable: false})
    active!: boolean

    @OneToMany_(() => Lesson, e => e.instructor)
    lessons!: Lesson[]
}
