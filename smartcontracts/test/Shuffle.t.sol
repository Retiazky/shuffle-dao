// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {ShuffleToken} from "src/ShuffleToken.sol";
import {ShuffleGovernor} from "src/ShuffleGovernor.sol";
import {ShuffleDAO} from "src/ShuffleDAO.sol";

contract ShuffleTest is Test {
    ShuffleToken public token;
    ShuffleGovernor public governor;
    ShuffleDAO public dao;

    function setUp() public {
        address initialOwner = vm.addr(1);
        console.log("Initial owner: %s", initialOwner);
        token = new ShuffleToken(initialOwner);
        governor = new ShuffleGovernor(token);
        dao = new ShuffleDAO(address(governor));
    }

    function testVoteNewInstructor() public {
        address instructor = vm.addr(1);

        vm.prank(vm.addr(1));
        console.log("Instructor: %s", instructor);
        uint256 tokenBalance = token.balanceOf(instructor);
        console.log("Token balance: %d", tokenBalance);
        vm.prank(instructor);
        token.delegate(instructor);
        uint256 votes = token.getVotes(instructor);
        console.log("Votes: %d", votes);

        // address[] memory addrs = new address[](1);
        // addrs[0] = address(dao);

        // uint256[] memory values = new uint256[](1);
        // values[0] = 0;

        // string memory name = "Alice";
        // bytes memory callData = abi.encodeWithSignature(
        //     "addInstructor(address,string)",
        //     instructor,
        //     name
        // );
        // bytes[] memory callDatas = new bytes[](1);
        // callDatas[0] = callData;

        // governor.propose(
        //     addrs,
        //     values,
        //     callDatas,
        //     "Add Alice as an instructor"
        // );
    }
}
