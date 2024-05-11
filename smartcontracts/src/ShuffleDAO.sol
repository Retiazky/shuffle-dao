// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IBadge} from "./interfaces/IBadge.sol";
contract ShuffleDAO {
    struct Instructor {
        address instructor;
        bool status;
        string name;
    }

    struct Lesson {
        uint256 id;
        address instructor;
        string style;
        uint256 startsAt;
        uint256 endsAt;
        uint256 maxParticipants;
        uint256 fee;
        uint256 participants;
    }

    address public governanceSC;
    IBadge public badgeSC;
    mapping(address => Instructor) public instructors;
    mapping(uint256 => Lesson) public lessons;
    mapping(uint256 => address[]) public participants;

    event InstructorSet(address instructor, string name, bool status);
    event LessonCreated(
        uint256 id,
        address instructor,
        string style,
        uint256 startsAt,
        uint256 endsAt,
        uint256 maxParticipants,
        uint256 fee
    );
    event ParticipantRegistered(uint256 id, address participant);

    constructor(address GovernanceSC) {
        governanceSC = GovernanceSC;
    }

    modifier onlyGovernance() {
        require(
            msg.sender == governanceSC,
            "ShuffleDAO: Only Governance can call this function"
        );
        _;
    }
    modifier onlyInstructor() {
        require(
            instructors[msg.sender].status == true,
            "ShuffleDAO: Only Instructors can call this function"
        );
        _;
    }

    function addInstructor(
        address _instructor,
        string memory _name
    ) public onlyGovernance {
        instructors[_instructor] = Instructor(_instructor, true, _name);
        emit InstructorSet(_instructor, _name, true);
    }

    function removeInstructor(address _instructor) public onlyGovernance {
        instructors[_instructor].status = false;
        emit InstructorSet(_instructor, instructors[_instructor].name, false);
    }

    function createLesson(
        uint256 _id,
        address _instructor,
        string memory _style,
        uint256 _startsAt,
        uint256 _endsAt,
        uint256 _maxParticipants,
        uint256 _fee
    ) public onlyInstructor {
        lessons[_id] = Lesson(
            _id,
            _instructor,
            _style,
            _startsAt,
            _endsAt,
            _maxParticipants,
            _fee,
            0
        );
        emit LessonCreated(
            _id,
            _instructor,
            _style,
            _startsAt,
            _endsAt,
            _maxParticipants,
            _fee
        );
    }

    function registerToLesson(uint256 _id) public payable {
        require(
            lessons[_id].participants < lessons[_id].maxParticipants,
            "ShuffleDAO: Lesson is full"
        );
        require(
            lessons[_id].fee == msg.value,
            "ShuffleDAO: Fee is not correct"
        );
        lessons[_id].participants++;
        participants[_id].push(msg.sender);
        emit ParticipantRegistered(_id, msg.sender);
    }

    function modifyLesson(
        uint256 _id,
        address _instructor,
        string memory _style,
        uint256 _startsAt,
        uint256 _endsAt,
        uint256 _maxParticipants,
        uint256 _fee
    ) public onlyGovernance {
        lessons[_id].instructor = _instructor;
        lessons[_id].style = _style;
        lessons[_id].startsAt = _startsAt;
        lessons[_id].endsAt = _endsAt;
        lessons[_id].maxParticipants = _maxParticipants;
        lessons[_id].fee = _fee;
    }

    function getParticipants(
        uint256 _id
    ) public view returns (address[] memory) {
        return participants[_id];
    }

    function verifyParticipant(
        uint256 _id,
        address _participant
    ) public view returns (bool) {
        for (uint256 i = 0; i < participants[_id].length; i++) {
            if (participants[_id][i] == _participant) {
                return true;
            }
        }
        return false;
    }

    function setGovernanceSC(address _governanceSC) public onlyGovernance {
        governanceSC = _governanceSC;
    }

    function assignBadge(address _who, uint256 _badgeId) public onlyInstructor {
        if (address(badgeSC) == address(0)) {
            revert("ShuffleDAO: Badges are not enabled");
        }

        uint256 balance = badgeSC.balanceOf(_who, _badgeId);

        if (balance > 0) {
            revert BadgeAlreadyAssigned(_who, _badgeId);
        }

        badgeSC.mint(_who, _badgeId, 1, "");
        emit BadgeAssigned(_who, _badgeId);
    }

    function enableBadges(address _badgeSC) public onlyGovernance {
        badgeSC = IBadge(_badgeSC);
    }

    event BadgeAssigned(address who, uint256 badgeId);

    error BadgeAlreadyAssigned(address who, uint256 badgeId);
}
