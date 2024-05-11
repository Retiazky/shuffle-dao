// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {ShuffleToken} from "src/ShuffleToken.sol";
import {ShuffleGovernor} from "src/ShuffleGovernor.sol";
import {ShuffleDAO} from "src/ShuffleDAO.sol";
import {Badge} from "src/Badge.sol";

contract ShuffleScript is Script {
    function setUp() public {}

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployerAddress = vm.addr(deployerPrivateKey);
        vm.startBroadcast(deployerPrivateKey);

        ShuffleToken token = new ShuffleToken(deployerAddress);
        console.log("ShuffleToken deployed to %s", address(token));

        ShuffleGovernor governor = new ShuffleGovernor(token);
        console.log("ShuffleGovernor deployed to %s", address(governor));

        ShuffleDAO dao = new ShuffleDAO(address(governor));
        console.log("ShuffleDAO deployed to %s", address(dao));

        Badge badge = new Badge(address(dao), "");
        console.log("Badge deployed to %s", address(badge));

        vm.stopBroadcast();
    }
}
