import { abi as shuffleDAOABI } from "@/abi/ShuffleDAO";
import type { Address } from "viem";

export const shuffleDAOContract = {
  address: "0x913625F0BaF4796629e14a487eC1AF6a921D4F18",
  abi: shuffleDAOABI,
} as const;

export const useDaoFactory = (
  writeContract: ReturnType<typeof useWriteContract>["writeContract"]
) => {
  const addInstructor = (instructorAddress: Readonly<Address>, name: string) =>
    writeContract({
      ...shuffleDAOContract,
      functionName: "addInstructor",
      args: [instructorAddress, name],
    });

  const createLesson = (
    instructor: Readonly<Address>,
    style: string,
    start: Date,
    end: Date,
    maxParticipants: number,
    fee: number
  ) => {
    const newId = BigInt(crypto.randomUUID());
    const _start = BigInt(start.getTime());
    const _end = BigInt(end.getTime());
    const _maxParticipants = BigInt(maxParticipants);
    const _fee = BigInt(fee);
    writeContract({
      ...shuffleDAOContract,
      functionName: "createLesson",
      args: [newId, instructor, style, _start, _end, _maxParticipants, _fee],
    });
  };

  const removeInstructor = (instructorAddress: Readonly<Address>) =>
    writeContract({
      ...shuffleDAOContract,
      functionName: "removeInstructor",
      args: [instructorAddress],
    });

  const registerToLesson = (lessonId: string) => {
    const _lessonId = BigInt(lessonId);
    writeContract({
      ...shuffleDAOContract,
      functionName: "registerToLesson",
      args: [_lessonId],
    });
  };

  const modifyLesson = (
    lessonId: string,
    instructor: Readonly<Address>,
    style: string,
    start: Date,
    end: Date,
    maxParticipants: number,
    fee: number
  ) => {
    const _lessonId = BigInt(lessonId);
    const _start = BigInt(start.getTime());
    const _end = BigInt(end.getTime());
    const _maxParticipants = BigInt(maxParticipants);
    const _fee = BigInt(fee);
    writeContract({
      ...shuffleDAOContract,
      functionName: "modifyLesson",
      args: [
        _lessonId,
        instructor,
        style,
        _start,
        _end,
        _maxParticipants,
        _fee,
      ],
    });
  };

  const getParticipants = (lessonId: string) => {
    const _lessonId = BigInt(lessonId);
    return useReadContract({
      ...shuffleDAOContract,
      functionName: "getParticipants",
      args: [_lessonId],
    });
  };

  const verifyParticipant = (
    lessonId: string,
    participant: Readonly<Address>
  ) => {
    const _lessonId = BigInt(lessonId);
    return useReadContract({
      ...shuffleDAOContract,
      functionName: "verifyParticipant",
      args: [_lessonId, participant],
    });
  };

  return {
    addInstructor,
    createLesson,
    removeInstructor,
    registerToLesson,
    modifyLesson,
    getParticipants,
    verifyParticipant,
  };
};
