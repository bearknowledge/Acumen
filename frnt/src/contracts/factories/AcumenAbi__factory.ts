/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { AcumenAbi, AcumenAbiInterface } from "../AcumenAbi";
const _abi = [
  {
    type: "function",
    name: "borrow",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "u64",
        name: "amount",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "claim_quarterly_payout",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "create_pool",
    inputs: [
      {
        type: "bool",
        name: "pool_is_staking",
      },
      {
        type: "str[15]",
        name: "pool_name",
      },
      {
        type: "u64",
        name: "apy",
      },
      {
        type: "bool",
        name: "qrt_payout",
      },
      {
        type: "u64",
        name: "duration",
      },
      {
        type: "u64",
        name: "start_time",
      },
      {
        type: "u64",
        name: "end_time",
      },
      {
        type: "u64",
        name: "max_utilization",
      },
      {
        type: "u64",
        name: "capacity",
      },
      {
        type: "u64",
        name: "limit_per_user",
      },
    ],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "u64",
        name: "amount",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "edit_pool",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "str[15]",
        name: "pool_name",
      },
      {
        type: "bool",
        name: "pause",
      },
      {
        type: "u32",
        name: "apy",
      },
      {
        type: "u64",
        name: "max_utilization",
      },
      {
        type: "u64",
        name: "capacity",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "get_contract_id",
    inputs: [],
    outputs: [
      {
        type: "struct ContractId",
        name: "",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "get_pool_info_from_id",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
    ],
    outputs: [
      {
        type: "struct PoolInfo",
        name: "",
        components: [
          {
            type: "str[15]",
            name: "poolName",
          },
          {
            type: "bool",
            name: "poolTypeIsStaking",
          },
          {
            type: "u64",
            name: "apy",
          },
          {
            type: "bool",
            name: "paused",
          },
          {
            type: "bool",
            name: "quarterlyPayout",
          },
          {
            type: "u64",
            name: "uniqueUsers",
          },
          {
            type: "struct ContractId",
            name: "tokenInfo",
            components: [
              {
                type: "b256",
                name: "value",
              },
            ],
          },
          {
            type: "struct Funds",
            name: "funds",
            components: [
              {
                type: "u64",
                name: "balance",
              },
              {
                type: "u64",
                name: "loanedBalance",
              },
            ],
          },
          {
            type: "u64",
            name: "pool_id",
          },
          {
            type: "struct DepositLimiters",
            name: "depositLimiters",
            components: [
              {
                type: "u64",
                name: "duration",
              },
              {
                type: "u64",
                name: "startTime",
              },
              {
                type: "u64",
                name: "endTime",
              },
              {
                type: "u64",
                name: "limitPerUser",
              },
              {
                type: "u64",
                name: "capacity",
              },
              {
                type: "u64",
                name: "maxUtilization",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "get_total_pools",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "get_total_stakes_of_user",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
    ],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "get_user_stakes_info_per_pool",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "repay",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "u64",
        name: "amount",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "set_pool_paused",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "bool",
        name: "flag",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "whitelist",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "bool",
        name: "status",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        type: "u64",
        name: "pool_id",
      },
      {
        type: "u64",
        name: "amount",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
];

export class AcumenAbi__factory {
  static readonly abi = _abi;
  static createInterface(): AcumenAbiInterface {
    return new Interface(_abi) as unknown as AcumenAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): AcumenAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as AcumenAbi;
  }
}
