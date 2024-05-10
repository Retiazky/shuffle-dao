// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {ShuffleToken} from "src/ShuffleToken.sol";
import {ShuffleGovernor} from "src/ShuffleGovernor.sol";
import {ShuffleDAO} from "src/ShuffleDAO.sol";

contract ShuffleScript is Script {
    function setUp() public {}

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployerAddress = vm.envAddress("ADDRESS");
        vm.startBroadcast(deployerPrivateKey);

        ShuffleToken token = new ShuffleToken(deployerAddress);
        console.log("Contract deployed to %s", address(token));

        ShuffleGovernor governor = new ShuffleGovernor(token);
        console.log("Contract deployed to %s", address(governor));

        ShuffleDAO dao = new ShuffleDAO(deployerAddress);
        console.log("Contract deployed to %s", address(dao));

        vm.stopBroadcast();
    }
}
