// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Shuffle} from "src/Shuffle.sol";

contract ShuffleTest is Test {
  Shuffle public instance;

  function setUp() public {
    address initialOwner = vm.addr(1);
    instance = new Shuffle(initialOwner);
  }

  function testName() public view {
    assertEq(instance.name(), "Shuffle");
  }
}
