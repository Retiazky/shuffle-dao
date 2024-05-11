import * as p from '@subsquid/evm-codec'
import { event, fun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    InstructorSet: event("0x33c127bbdef3da0f7e3f392c8c6588c5645e980dd9d2da85f96a67b0e3e2617f", {"instructor": p.address, "name": p.string, "status": p.bool}),
    LessonCreated: event("0xeae84c32d793e24e46192bba24100cebc059f3ccde2fe9d9a28a8df9935b7ebb", {"id": p.uint256, "instructor": p.address, "style": p.string, "startsAt": p.uint256, "endsAt": p.uint256, "maxParticipants": p.uint256, "fee": p.uint256}),
    ParticipantRegistered: event("0x78337b3a0cfc36faafab5a292dc7571f6bd68ba681c22e15c97b1e3469b51a02", {"id": p.uint256, "participant": p.address}),
}

export const functions = {
    addInstructor: fun("0x875ff37a", {"_instructor": p.address, "_name": p.string}, ),
    createLesson: fun("0x8630d990", {"_id": p.uint256, "_instructor": p.address, "_style": p.string, "_startsAt": p.uint256, "_endsAt": p.uint256, "_maxParticipants": p.uint256, "_fee": p.uint256}, ),
    getParticipants: fun("0xc1e3bd3e", {"_id": p.uint256}, p.array(p.address)),
    governanceSC: fun("0xe6827932", {}, p.address),
    instructors: fun("0x2a47d91c", {"_0": p.address}, {"instructor": p.address, "status": p.bool, "name": p.string}),
    lessons: fun("0xe1d1a841", {"_0": p.uint256}, {"id": p.uint256, "instructor": p.address, "style": p.string, "startsAt": p.uint256, "endsAt": p.uint256, "maxParticipants": p.uint256, "fee": p.uint256, "participants": p.uint256}),
    modifyLesson: fun("0x57703ee2", {"_id": p.uint256, "_instructor": p.address, "_style": p.string, "_startsAt": p.uint256, "_endsAt": p.uint256, "_maxParticipants": p.uint256, "_fee": p.uint256}, ),
    participants: fun("0x81fb1fb4", {"_0": p.uint256, "_1": p.uint256}, p.address),
    registerToLesson: fun("0x1326df50", {"_id": p.uint256}, ),
    removeInstructor: fun("0x9c566f2a", {"_instructor": p.address}, ),
    setGovernanceSC: fun("0x8e0186d7", {"_governanceSC": p.address}, ),
    verifyParticipant: fun("0x04f12669", {"_id": p.uint256, "_participant": p.address}, p.bool),
}

export class Contract extends ContractBase {

    getParticipants(_id: GetParticipantsParams["_id"]) {
        return this.eth_call(functions.getParticipants, {_id})
    }

    governanceSC() {
        return this.eth_call(functions.governanceSC, {})
    }

    instructors(_0: InstructorsParams["_0"]) {
        return this.eth_call(functions.instructors, {_0})
    }

    lessons(_0: LessonsParams["_0"]) {
        return this.eth_call(functions.lessons, {_0})
    }

    participants(_0: ParticipantsParams["_0"], _1: ParticipantsParams["_1"]) {
        return this.eth_call(functions.participants, {_0, _1})
    }

    verifyParticipant(_id: VerifyParticipantParams["_id"], _participant: VerifyParticipantParams["_participant"]) {
        return this.eth_call(functions.verifyParticipant, {_id, _participant})
    }
}

/// Event types
export type InstructorSetEventArgs = EParams<typeof events.InstructorSet>
export type LessonCreatedEventArgs = EParams<typeof events.LessonCreated>
export type ParticipantRegisteredEventArgs = EParams<typeof events.ParticipantRegistered>

/// Function types
export type AddInstructorParams = FunctionArguments<typeof functions.addInstructor>
export type AddInstructorReturn = FunctionReturn<typeof functions.addInstructor>

export type CreateLessonParams = FunctionArguments<typeof functions.createLesson>
export type CreateLessonReturn = FunctionReturn<typeof functions.createLesson>

export type GetParticipantsParams = FunctionArguments<typeof functions.getParticipants>
export type GetParticipantsReturn = FunctionReturn<typeof functions.getParticipants>

export type GovernanceSCParams = FunctionArguments<typeof functions.governanceSC>
export type GovernanceSCReturn = FunctionReturn<typeof functions.governanceSC>

export type InstructorsParams = FunctionArguments<typeof functions.instructors>
export type InstructorsReturn = FunctionReturn<typeof functions.instructors>

export type LessonsParams = FunctionArguments<typeof functions.lessons>
export type LessonsReturn = FunctionReturn<typeof functions.lessons>

export type ModifyLessonParams = FunctionArguments<typeof functions.modifyLesson>
export type ModifyLessonReturn = FunctionReturn<typeof functions.modifyLesson>

export type ParticipantsParams = FunctionArguments<typeof functions.participants>
export type ParticipantsReturn = FunctionReturn<typeof functions.participants>

export type RegisterToLessonParams = FunctionArguments<typeof functions.registerToLesson>
export type RegisterToLessonReturn = FunctionReturn<typeof functions.registerToLesson>

export type RemoveInstructorParams = FunctionArguments<typeof functions.removeInstructor>
export type RemoveInstructorReturn = FunctionReturn<typeof functions.removeInstructor>

export type SetGovernanceSCParams = FunctionArguments<typeof functions.setGovernanceSC>
export type SetGovernanceSCReturn = FunctionReturn<typeof functions.setGovernanceSC>

export type VerifyParticipantParams = FunctionArguments<typeof functions.verifyParticipant>
export type VerifyParticipantReturn = FunctionReturn<typeof functions.verifyParticipant>

