(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{293:function(e,a,t){"use strict";t.r(a);var o=t(13),i=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validating-on-paloma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-on-paloma"}},[e._v("#")]),e._v(" Validating on Paloma")]),e._v(" "),a("p",[e._v("Paloma is powered by the Tendermint consensus, an asynchronous, BFT\nconsensus mechanism that uses DPoS (delegated proof of stake). Validators\nparticipating in consensus will propose blocks of transactions from the\nmempool and aim reach consensus by broadcasting votes on their state.\nValidators on Paloma are required to run full nodes, commit new blocks to\nthe Paloma blockchain, and participate in governance.")]),e._v(" "),a("p",[e._v("Paloma validators are elected into the validator pool by delegated stake\nfrom Paloma delegators, and will cast votes on behalf of their delegators.\nA validator's voting power is weighted according to their total stake.")]),e._v(" "),a("p",[e._v("The top 130 validators make up the "),a("strong",[e._v("active validator set")]),e._v(" and are the\nonly validators that sign blocks and receive revenue from block production.")]),e._v(" "),a("h2",{attrs:{id:"validator-responsibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-responsibilities"}},[e._v("#")]),e._v(" Validator responsibilities")]),e._v(" "),a("p",[e._v("On Paloma, a validator must:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Run the correct software versions:")]),e._v(" Validators need to make sure that\ntheir servers are always online, and that their private keys are not compromised.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Provide oversight and feedback on the correct deployment of community pool funds:")]),e._v("\nThe Paloma protocol includes a governance system for proposals to facilitate the\nadoption of its currencies. Validators are expected to hold budget executors to\nprovide transparency and to use funds efficiently.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Be active members of the community:")]),e._v(" Validators should always be up-to-date with\nthe current state of the ecosystem so that they can easily adapt to any change.")])])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("System administration")]),e._v(" "),a("p",[e._v("Validating requires a significant amount of system administration\nknowledge and experience. and should be only pursued if a user has\nsignificant system administration experience.")]),e._v(" "),a("p",[e._v("Validators are required to stake real value through a bond deposit\non the chain in order to participate in consensus. Mis-operation of a\nvalidator can led to serious consequences that result in the loss of\nfunds.")]),e._v(" "),a("p",[e._v("When in doubt, never hesitate to reach out to the Paloma or Cosmos\ncommunity for questions or concerns about validating.")])]),e._v(" "),a("p",[e._v("A successful validator operation will require the efforts of multiple\nhighly-skilled individuals and continuous operational attention.\nRunning a validator is considerably more involved than mining bitcoin.\nRunning an effective operation is critical to avoiding unexpected\nunbonding or being slashed. This includes being able to respond to\nattacks, outages, as well as to maintain security and isolation in your\ndata center.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("New validators")]),e._v(" "),a("p",[e._v("Take advantage of the testnet environment if you would like to get\nstarted with validating on Paloma. Start by setting up a full node and\nunderstand the different components.")]),e._v(" "),a("p",[e._v("Take the time to dipher what is happening on-chain when blocks are\nproduced, how consensus operates as a state machine, and how consensus\nis reached. Break down transactions, how validators verify and sign\ntransactions, the block structure, the commitment scheme, and more.")]),e._v(" "),a("p",[e._v("Paloma is an omnichain interoperability protocol built on the\nCosmosSDK, meaning, validators should understand message passing\nand cross-chain consensus.")]),e._v(" "),a("p",[e._v("Don't rush into validating if you feel like there are gaps that may\njepordize your funds. Of course, there is always a risk when staking\non the blockchain, but there is a big difference when staking with\nconfidence and staking without.")])]),e._v(" "),a("h2",{attrs:{id:"validator-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-states"}},[e._v("#")]),e._v(" Validator states")]),e._v(" "),a("p",[e._v("After a validator is created with the "),a("code",[e._v("create-validator")]),e._v("\ntransaction, it can be in three states:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("bonded")]),e._v(": A validator that is in the active set and participates in consensus.\nThis validator is earning rewards and can be slashed for misbehavior.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("unbonding")]),e._v(": A validator that is not in the active set and can't not participate\nin consensus. This validator is not earning rewards but can still be slashed for\nmisbehaviour. This is a transition state from "),a("code",[e._v("bonded")]),e._v(" to "),a("code",[e._v("unbonded")]),e._v(". If a validator\ndoes not send a "),a("code",[e._v("rebond")]),e._v(" transaction while in "),a("code",[e._v("unbonding")]),e._v(" mode, it will take three\nweeks for the state transition to complete.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("unbonded")]),e._v(": A validator that is not in the active set and not signing blocks.\nUnbonded validators can't be slashed and can't earn any rewards from their operation.\nIt is still possible to delegate GRAIN to unbonded validators. Un-delegating from\nan "),a("code",[e._v("unbonded")]),e._v(" validator is immediate.")])])]),e._v(" "),a("p",[e._v("All Delegators have the same state as their validator.")]),e._v(" "),a("p",[e._v("Delegations are not necessarily bonded. GRAIN can be delegated and bonded, delegated\nand unbonding, delegated and unbonded, or liquid.")]),e._v(" "),a("h2",{attrs:{id:"incentive-scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incentive-scheme"}},[e._v("#")]),e._v(" Incentive scheme")]),e._v(" "),a("p",[e._v("Each member of a validator's staking pool (validators and their associated delegators)\nearns revenue:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/learn/fees.html#gas"}},[e._v("Gas")]),e._v(":\nTransactions are gas metered on Paloma and fees are added onto each\ntransaction to pay for the consumption of computational resources during\nexecution. This also helps to prevent transaction spamming.")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/guide/develop/module-specifications/spec-mint.html"}},[e._v("Inflation rewards")]),e._v(":\nEvery block, new GRAIN is minted and released to validators and delegators\nas staking rewards. The rate for the minting of this new GRAIN is fixed at 7%\nper year.")],1)])]),e._v(" "),a("p",[e._v("This total revenue is divided among a validator's staking pool according to each\nvalidator's weight. The revenue is then divided among delegators in proportion to\neach delegator's stake. Note that a commission on delegators' revenue is applied\nby the validator before it is distributed.")]),e._v(" "),a("h3",{attrs:{id:"validator-commission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-commission"}},[e._v("#")]),e._v(" Validator commission")]),e._v(" "),a("p",[e._v("Validators can set commissions on the fees they receive as an additional incentive.")]),e._v(" "),a("p",[e._v("The revenue received by a validator's pool is split between a validator and\ntheir delegators. A validator can apply a commission on the part of the revenue\nthat goes to its delegators. This commission is set as a percentage. Each validator\nis free to set its initial commission, maximum daily commission change rate, and\nmaximum commission. The mainnet enforces the parameters that each validator sets.\nThese parameters can only be defined when initially declaring candidacy, and may\nonly be constrained further after being declared.")]),e._v(" "),a("p",[e._v("Validators who set their commission rate to 100% are not seeking delegations as the\nentire commission goes to them. This is the case when the validator has enough\nself-stake.")]),e._v(" "),a("h3",{attrs:{id:"block-provisions-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-provisions-distribution"}},[e._v("#")]),e._v(" Block provisions distribution")]),e._v(" "),a("p",[e._v("Block provisions are distributed proportionally to each validator relative to their\ntotal stake. This means that even though each validator gains rewards with each provision,\nall validators will still maintain equal weight.")]),e._v(" "),a("h3",{attrs:{id:"fees-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees-distribution"}},[e._v("#")]),e._v(" Fees distribution")]),e._v(" "),a("p",[e._v("Fees are distributed to validators in the same way as commission: proportionally to\neach validator relative to their total stake. A Block proposer can also get a bonus if\nthe proposer includes more than the minimum of required precommits.")]),e._v(" "),a("h3",{attrs:{id:"block-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-rewards"}},[e._v("#")]),e._v(" Block rewards")]),e._v(" "),a("p",[e._v("When a validator is selected to propose the next block, they must include at least\ntwo-thirds of the precommits for the previous block in the form of validator signatures.\nProposers who include more than two thirds receive a bonus proportional to the amount of\nadditional precomits. This reward ranges from 1% if the proposer includes two thirds of the\nprecommits to 5% if the proposer includes 100% of the precommits. If a proposer waits too\nlong however, other validators may timeout and move on to the next proposer. This is why\nvalidators have to find a balance between wait time to get the most signatures and the risk\nof losing out on proposing the next block. This feature aims to incentivize non-empty block\nproposals, better networking between validators, and to mitigate censorship.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Block reward example")]),e._v(" "),a("p",[e._v("There are 10 validators with equal stake. Each has a 1% commission and 20% self-bonded\nGRAIN. If a successful block collects 1005 SDT in fees, and the proposer includes 100% of\nthe signatures in their block, they will receive the full 5% bonus.")]),e._v(" "),a("p",[e._v("Use this simple equation to find the reward $R$ for each validator:")]),e._v(" "),a("p",[e._v("$$9R ~ + ~ R ~ + ~ 5%(R) ~ = ~ 1005 ~ \\Leftrightarrow ~ R ~ = ~ 1005 ~/ ~10.05 ~ = ~ 100$$")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For the validator that proposes a block:")]),e._v(" "),a("ul",[a("li",[e._v("The pool obtains $R ~ + ~ 5%(R)$: 105 SDT")]),e._v(" "),a("li",[e._v("Commission: 105 SDT ~ * ~ 80% ~ * ~ 1%$ = 0.84 SDT")]),e._v(" "),a("li",[e._v("Validator's reward: 105 SDT ~ * ~ 20% ~ + ~ Commission$ = 21.84 SDT")]),e._v(" "),a("li",[e._v("Delegators' rewards: 105 SDT ~ * ~ 80% ~ - ~ Commission$ = 83.16 SDT (each delegator will be able to claim its portion of these rewards in proportion to their stake)")])])]),e._v(" "),a("li",[a("p",[e._v("For all other validators:")]),e._v(" "),a("ul",[a("li",[e._v("The pool obtains $R$: 100 SDT")]),e._v(" "),a("li",[e._v("Commission: 100 SDT ~ * ~ 80% ~ * ~ 1%$ = 0.8 SDT")]),e._v(" "),a("li",[e._v("Validator's reward: 100 SDT ~ * ~ 20% ~ + ~ Commission$ = 20.8 SDT")]),e._v(" "),a("li",[e._v("Delegators' rewards: 100 SDT ~ * ~ 80% ~ - ~ Commission$ = 79.2 SDT (each delegator will be able to claim its portion of these rewards in proportion to their stake)")])])])])]),e._v(" "),a("h2",{attrs:{id:"slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("Even if a validator does not intentionally misbehave, it\ncan still be slashed if its node crashes, loses connectivity, gets\nDDoSed, or if its private key is compromised.")])]),e._v(" "),a("p",[e._v("If a validator misbehaves, their bonded stake along with their delegators'\nstake will be slashed. The severity of the punishment depends on the type of fault.\nThere are main faults that can result in slashing of funds:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Double-signing:")]),e._v(" If someone reports on chain A that a validator signed two blocks\nat the same height on chain A and chain B, and if chain A and chain B share a common\nancestor, then this validator will get slashed on chain A.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Unavailability:")]),e._v(" If a validator's signature has not been included in the last\nX blocks, the validator will get slashed by a marginal amount proportional to X.\nIf X is above a certain limit, then the validator will get unbonded.")])])]),e._v(" "),a("h2",{attrs:{id:"additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[e._v("#")]),e._v(" Additional resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://discord.com/invite/xfZK6RMFFx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paloma validator Discord"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=2lKAvltKX6w&ab_channel=PalomaBites",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Spin Up a Node on Paloma - Paloma Bites video"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/validate/manage-a-paloma-validator/faq.html"}},[e._v("The validator FAQ")])],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);