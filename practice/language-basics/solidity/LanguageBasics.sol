// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice A dependency-free syntax exercise for arrays, loops and conditions.
contract LanguageBasics {
    function summarize() external pure returns (uint256 count, int256 total) {
        int256[4] memory values;
        values[0] = 12;
        values[1] = -3;
        values[2] = 0;
        values[3] = 18;

        for (uint256 i = 0; i < values.length; i++) {
            if (values[i] >= 0) {
                count += 1;
                total += values[i];
            }
        }
    }
}
