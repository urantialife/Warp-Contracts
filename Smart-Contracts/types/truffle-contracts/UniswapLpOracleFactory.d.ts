/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface UniswapLpOracleFactoryContract
  extends Truffle.Contract<UniswapLpOracleFactoryInstance> {
  "new"(
    usdcAdd: string,
    _uniFactoryAdd: string,
    _uniRouterAddress: string,
    meta?: Truffle.TransactionDetails
  ): Promise<UniswapLpOracleFactoryInstance>;
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

type AllEvents = OwnershipTransferred;

export interface UniswapLpOracleFactoryInstance
  extends Truffle.ContractInstance {
  LPAssetTracker(
    arg0: string,
    arg1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  factory(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  uniswapRouter(txDetails?: Truffle.TransactionDetails): Promise<string>;

  usdc_add(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * createNewOracle allows the owner of this contract to deploy deploy two new asset oracle contracts when a new LP token is whitelisted. this contract will link the address of an LP token contract to two seperate oracles that are designed to look up the price of their respective assets in USDC. This will allow us to calculate the price of one at LP token token from the prices of their underlying assets
   * @param _lpToken is the address of the token that this oracle will provide a price feed for*
   * @param _tokenA is the address of the first token in an Liquidity pair
   * @param _tokenB is the address of the second token in a liquidity pair
   */
  createNewOracles: {
    (
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenA: string,
      _tokenB: string,
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * getUnderlyingPrice allows for the price calculation and retrieval of a LP tokens price
   * @param _lpToken is the address of the LP token  whos asset price is being retrieved
   */
  getUnderlyingPrice: {
    (_lpToken: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_lpToken: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;
    sendTransaction(
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * viewUnderlyingPrice allows for the price retrieval of a LP tokens price
   * @param _lpToken is the address of the LP token  whos asset price is being retrieved
   */
  viewUnderlyingPrice(
    _lpToken: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * example: LINK => Augur swap _tokenA would be LINK address while _tokenB would be Augur Address_amountOutMin will need to be atleast enough to cover the cost of collateral liquidation (loan amount +i nterest) and its liquidation fee amount.*
   * swapERC20 is an external function that swaps one ERC20 token for another using WETH as a medium of exchange.
   * @param _amountIn is the amount of _tokenA being exchanged
   * @param _amountOutMin is the minimum amount of _tokenB to be received
   * @param _to is the address of the MoneyMarketInstance calling this function
   * @param _tokenA is the address of the token being exchanged from
   * @param _tokenB is the address of the token being exchanged to
   */
  swapERC20: {
    (
      _tokenA: string,
      _tokenB: string,
      _to: string,
      _amountIn: number | BN | string,
      _amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _tokenA: string,
      _tokenB: string,
      _to: string,
      _amountIn: number | BN | string,
      _amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _tokenA: string,
      _tokenB: string,
      _to: string,
      _amountIn: number | BN | string,
      _amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _tokenA: string,
      _tokenB: string,
      _to: string,
      _amountIn: number | BN | string,
      _amountOutMin: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    LPAssetTracker(
      arg0: string,
      arg1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    factory(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    uniswapRouter(txDetails?: Truffle.TransactionDetails): Promise<string>;

    usdc_add(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * createNewOracle allows the owner of this contract to deploy deploy two new asset oracle contracts when a new LP token is whitelisted. this contract will link the address of an LP token contract to two seperate oracles that are designed to look up the price of their respective assets in USDC. This will allow us to calculate the price of one at LP token token from the prices of their underlying assets
     * @param _lpToken is the address of the token that this oracle will provide a price feed for*
     * @param _tokenA is the address of the first token in an Liquidity pair
     * @param _tokenB is the address of the second token in a liquidity pair
     */
    createNewOracles: {
      (
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenA: string,
        _tokenB: string,
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * getUnderlyingPrice allows for the price calculation and retrieval of a LP tokens price
     * @param _lpToken is the address of the LP token  whos asset price is being retrieved
     */
    getUnderlyingPrice: {
      (_lpToken: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _lpToken: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * viewUnderlyingPrice allows for the price retrieval of a LP tokens price
     * @param _lpToken is the address of the LP token  whos asset price is being retrieved
     */
    viewUnderlyingPrice(
      _lpToken: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * example: LINK => Augur swap _tokenA would be LINK address while _tokenB would be Augur Address_amountOutMin will need to be atleast enough to cover the cost of collateral liquidation (loan amount +i nterest) and its liquidation fee amount.*
     * swapERC20 is an external function that swaps one ERC20 token for another using WETH as a medium of exchange.
     * @param _amountIn is the amount of _tokenA being exchanged
     * @param _amountOutMin is the minimum amount of _tokenB to be received
     * @param _to is the address of the MoneyMarketInstance calling this function
     * @param _tokenA is the address of the token being exchanged from
     * @param _tokenB is the address of the token being exchanged to
     */
    swapERC20: {
      (
        _tokenA: string,
        _tokenB: string,
        _to: string,
        _amountIn: number | BN | string,
        _amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _tokenA: string,
        _tokenB: string,
        _to: string,
        _amountIn: number | BN | string,
        _amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _tokenA: string,
        _tokenB: string,
        _to: string,
        _amountIn: number | BN | string,
        _amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _tokenA: string,
        _tokenB: string,
        _to: string,
        _amountIn: number | BN | string,
        _amountOutMin: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}