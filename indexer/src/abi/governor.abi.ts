export const ABI_JSON = [
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernorAlreadyCastVote",
        "inputs": [
            {
                "type": "address",
                "name": "voter"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorAlreadyQueuedProposal",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorDisabledDeposit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernorInsufficientProposerVotes",
        "inputs": [
            {
                "type": "address",
                "name": "proposer"
            },
            {
                "type": "uint256",
                "name": "votes"
            },
            {
                "type": "uint256",
                "name": "threshold"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorInvalidProposalLength",
        "inputs": [
            {
                "type": "uint256",
                "name": "targets"
            },
            {
                "type": "uint256",
                "name": "calldatas"
            },
            {
                "type": "uint256",
                "name": "values"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorInvalidSignature",
        "inputs": [
            {
                "type": "address",
                "name": "voter"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorInvalidVoteType",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernorInvalidVotingPeriod",
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPeriod"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorNonexistentProposal",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorNotQueuedProposal",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorOnlyExecutor",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorOnlyProposer",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorQueueNotImplemented",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GovernorRestrictedProposer",
        "inputs": [
            {
                "type": "address",
                "name": "proposer"
            }
        ]
    },
    {
        "type": "error",
        "name": "GovernorUnexpectedProposalState",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "current"
            },
            {
                "type": "bytes32",
                "name": "expectedStates"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidAccountNonce",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "currentNonce"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidShortString",
        "inputs": []
    },
    {
        "type": "error",
        "name": "QueueEmpty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "QueueFull",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SafeCastOverflowedUintDowncast",
        "inputs": [
            {
                "type": "uint8",
                "name": "bits"
            },
            {
                "type": "uint256",
                "name": "value"
            }
        ]
    },
    {
        "type": "error",
        "name": "StringTooLong",
        "inputs": [
            {
                "type": "string",
                "name": "str"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EIP712DomainChanged",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProposalCanceled",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProposalCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "proposer",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "targets",
                "indexed": false
            },
            {
                "type": "uint256[]",
                "name": "values",
                "indexed": false
            },
            {
                "type": "string[]",
                "name": "signatures",
                "indexed": false
            },
            {
                "type": "bytes[]",
                "name": "calldatas",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "voteStart",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "voteEnd",
                "indexed": false
            },
            {
                "type": "string",
                "name": "description",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProposalExecuted",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ProposalQueued",
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "etaSeconds",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "VoteCast",
        "inputs": [
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "support",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "weight",
                "indexed": false
            },
            {
                "type": "string",
                "name": "reason",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "VoteCastWithParams",
        "inputs": [
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "proposalId",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "support",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "weight",
                "indexed": false
            },
            {
                "type": "string",
                "name": "reason",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "params",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "BALLOT_TYPEHASH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "CLOCK_MODE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "COUNTING_MODE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "EXTENDED_BALLOT_TYPEHASH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "cancel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "targets"
            },
            {
                "type": "uint256[]",
                "name": "values"
            },
            {
                "type": "bytes[]",
                "name": "calldatas"
            },
            {
                "type": "bytes32",
                "name": "descriptionHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "castVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "support"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "castVoteBySig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "support"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "castVoteWithReason",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "support"
            },
            {
                "type": "string",
                "name": "reason"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "castVoteWithReasonAndParams",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "support"
            },
            {
                "type": "string",
                "name": "reason"
            },
            {
                "type": "bytes",
                "name": "params"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "castVoteWithReasonAndParamsBySig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "uint8",
                "name": "support"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "string",
                "name": "reason"
            },
            {
                "type": "bytes",
                "name": "params"
            },
            {
                "type": "bytes",
                "name": "signature"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "clock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint48"
            }
        ]
    },
    {
        "type": "function",
        "name": "eip712Domain",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes1",
                "name": "fields"
            },
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "version"
            },
            {
                "type": "uint256",
                "name": "chainId"
            },
            {
                "type": "address",
                "name": "verifyingContract"
            },
            {
                "type": "bytes32",
                "name": "salt"
            },
            {
                "type": "uint256[]",
                "name": "extensions"
            }
        ]
    },
    {
        "type": "function",
        "name": "execute",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "targets"
            },
            {
                "type": "uint256[]",
                "name": "values"
            },
            {
                "type": "bytes[]",
                "name": "calldatas"
            },
            {
                "type": "bytes32",
                "name": "descriptionHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVotes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "timepoint"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVotesWithParams",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "timepoint"
            },
            {
                "type": "bytes",
                "name": "params"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "hasVoted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "hashProposal",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "targets"
            },
            {
                "type": "uint256[]",
                "name": "values"
            },
            {
                "type": "bytes[]",
                "name": "calldatas"
            },
            {
                "type": "bytes32",
                "name": "descriptionHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "nonces",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "onERC1155BatchReceived",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address"
            },
            {
                "type": "address"
            },
            {
                "type": "uint256[]"
            },
            {
                "type": "uint256[]"
            },
            {
                "type": "bytes"
            }
        ],
        "outputs": [
            {
                "type": "bytes4"
            }
        ]
    },
    {
        "type": "function",
        "name": "onERC1155Received",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address"
            },
            {
                "type": "address"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            },
            {
                "type": "bytes"
            }
        ],
        "outputs": [
            {
                "type": "bytes4"
            }
        ]
    },
    {
        "type": "function",
        "name": "onERC721Received",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address"
            },
            {
                "type": "address"
            },
            {
                "type": "uint256"
            },
            {
                "type": "bytes"
            }
        ],
        "outputs": [
            {
                "type": "bytes4"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalDeadline",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalEta",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalNeedsQueuing",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalProposer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalSnapshot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "proposalThreshold",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "propose",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "targets"
            },
            {
                "type": "uint256[]",
                "name": "values"
            },
            {
                "type": "bytes[]",
                "name": "calldatas"
            },
            {
                "type": "string",
                "name": "description"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "queue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "targets"
            },
            {
                "type": "uint256[]",
                "name": "values"
            },
            {
                "type": "bytes[]",
                "name": "calldatas"
            },
            {
                "type": "bytes32",
                "name": "descriptionHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "quorum",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "timepoint"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "relay",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "state",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "proposalId"
            }
        ],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "votingDelay",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "votingPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    }
]
