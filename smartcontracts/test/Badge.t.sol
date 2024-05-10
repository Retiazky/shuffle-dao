// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "forge-std/console2.sol";
import "../src/Badge.sol";


contract TokenTest is Test {
    Badge public instance;

    function setUp() public {
        address initialOwner = vm.addr(1);
        string memory uri = "https://vik.ink";
        instance = new Badge(initialOwner, uri);
        console2.log("Token deployed to %s", address(instance));
        // Token deployed to 0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f
    }

    function testUri() public view {
        uint256 id = 1;       
        assertEq(instance.uri(id), "https://vik.ink/1");
    }

}
