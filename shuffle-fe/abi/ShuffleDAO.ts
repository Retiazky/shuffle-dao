export const abi = [
  {
    type: "constructor",
    inputs: [
      { name: "GovernanceSC", type: "address", internalType: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addInstructor",
    inputs: [
      { name: "_instructor", type: "address", internalType: "address" },
      { name: "_name", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createLesson",
    inputs: [
      { name: "_id", type: "uint256", internalType: "uint256" },
      { name: "_instructor", type: "address", internalType: "address" },
      { name: "_style", type: "string", internalType: "string" },
      { name: "_startsAt", type: "uint256", internalType: "uint256" },
      { name: "_endsAt", type: "uint256", internalType: "uint256" },
      {
        name: "_maxParticipants",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_fee", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getParticipants",
    inputs: [{ name: "_id", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "governanceSC",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "instructors",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "instructor", type: "address", internalType: "address" },
      { name: "status", type: "bool", internalType: "bool" },
      { name: "name", type: "string", internalType: "string" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lessons",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
      { name: "instructor", type: "address", internalType: "address" },
      { name: "style", type: "string", internalType: "string" },
      { name: "startsAt", type: "uint256", internalType: "uint256" },
      { name: "endsAt", type: "uint256", internalType: "uint256" },
      {
        name: "maxParticipants",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "fee", type: "uint256", internalType: "uint256" },
      { name: "participants", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "modifyLesson",
    inputs: [
      { name: "_id", type: "uint256", internalType: "uint256" },
      { name: "_instructor", type: "address", internalType: "address" },
      { name: "_style", type: "string", internalType: "string" },
      { name: "_startsAt", type: "uint256", internalType: "uint256" },
      { name: "_endsAt", type: "uint256", internalType: "uint256" },
      {
        name: "_maxParticipants",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "_fee", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "participants",
    inputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerToLesson",
    inputs: [{ name: "_id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "removeInstructor",
    inputs: [{ name: "_instructor", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyParticipant",
    inputs: [
      { name: "_id", type: "uint256", internalType: "uint256" },
      { name: "_participant", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "InstructorSet",
    inputs: [
      {
        name: "instructor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LessonCreated",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "instructor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "style",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "startsAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endsAt",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "maxParticipants",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "fee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ParticipantRegistered",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "participant",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;
