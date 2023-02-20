// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {strings} from "./Strings.sol";

import {Test} from "forge-std/Test.sol";

import "hardhat/console.sol";

contract Utils is Test {
    using strings for *;

    bytes32 internal nextUser = keccak256(abi.encodePacked("user address"));

    function getNextUserAddress() external returns (address payable) {
        address payable user = payable(address(uint160(uint256(nextUser))));
        nextUser = keccak256(abi.encodePacked(nextUser));
        return user;
    }

    // create users with 100 ETH balance each
    function createUsers(uint256 userNum)
        external
        returns (address payable[] memory)
    {
        address payable[] memory users = new address payable[](userNum);
        for (uint256 i = 0; i < userNum; i++) {
            address payable user = this.getNextUserAddress();
            vm.deal(user, 100 ether);
            users[i] = user;
        }

        return users;
    }

    // mine n blocks
    function mineBlocks(uint256 numBlocks) external {
        uint256 targetBlock = block.number + numBlocks;
        vm.roll(targetBlock);
    }

    function concat(string memory a, string memory b)
        public
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(a, " ", b));
    }

    function stringToHex(bytes memory buffer)
        public
        pure
        returns (string memory)
    {
        // Fixed buffer size for hexadecimal convertion
        bytes memory converted = new bytes(buffer.length * 2);

        bytes memory _base = "0123456789abcdef";

        for (uint256 i = 0; i < buffer.length; i++) {
            converted[i * 2] = _base[uint8(buffer[i]) / _base.length];
            converted[i * 2 + 1] = _base[uint8(buffer[i]) % _base.length];
        }

        return string(converted);
    }

    function stringToHexBytes2(bytes[] memory _data)
        public
        pure
        returns (bytes memory)
    {
        bytes memory data1 = bytes(stringToHex(_data[0]));
        bytes memory data2 = bytes(stringToHex(_data[1]));
        return bytes(abi.encodePacked("0x", data1, data2));
    }

    function makeInvalidSig(string calldata _string, uint256 _times)
        external
        pure
        returns (string memory)
    {
        string memory newStr = "0x";
        for (uint256 ii; ii <= _times; ++ii) {
            newStr = newStr.toSlice().concat(_string.toSlice());
        }
        return newStr;
    }
}
