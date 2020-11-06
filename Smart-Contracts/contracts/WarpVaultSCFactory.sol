pragma solidity ^0.6.0;

import "./WarpVaultSC.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

////////////////////////////////////////////////////////////////////////////////////////////
/// @title WarpVaultLPFactory
/// @author Christopher Dixon
////////////////////////////////////////////////////////////////////////////////////////////
/**
The WarpVaultLPFactory contract is designed to produce individual WarpVaultLP contracts
This contract uses the OpenZeppelin contract Library to inherit functions from
  Ownable.sol
**/

contract WarpVaultSCFactory is Ownable {
    function createNewWarpVaultSC(
        address _InterestRate,
        address _StableCoin,
        uint256 _initialExchangeRate
    ) public onlyOwner returns (address) {
        address _WVSC = address(
            new WarpVaultSC(
                _InterestRate,
                _StableCoin,
                msg.sender,
                _initialExchangeRate
            )
        );

        return _WVSC;
    }
}